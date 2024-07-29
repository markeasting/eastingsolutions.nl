import * as THREE from 'three';
import './app.scss'

/* Obfuscate email addresses */
// 'aW5mb0BlYXN0aW5nc29sdXRpb25zLm5s';      // info@
// 'Y29udGFjdEBlYXN0aW5nc29sdXRpb25zLm5s'   // contact@
const emailAddress = atob('Y29udGFjdEBlYXN0aW5nc29sdXRpb25zLm5s');

document.querySelectorAll('.mailto').forEach(el => {
    el.setAttribute('href', `mailto:${emailAddress}?subject=Contact met Easting Solutions`);
    if (!el.classList.contains('customtext')) {
        el.innerHTML = emailAddress;
    }
});

const phoneNumber = atob('MDYgMzEzIDg4IDM0NA==');
document.querySelectorAll('.tel').forEach(el => {
    el.setAttribute('href', `tel:${phoneNumber.replace('06', '+316').replace(/\s/g, '')}`);
    el.innerHTML = phoneNumber;
});

/* --------------------------------------------------------- */

const canvas = document.getElementById('canvas');

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
});
renderer.setAnimationLoop(animate);

// const camera = new THREE.PerspectiveCamera(50, 0, 0.1, 100);
const camera = new THREE.OrthographicCamera(0, 0, 0, 0, 0.1, 100);
camera.position.z = 5;

window.addEventListener('resize', setSize);
window.addEventListener('DOMContentLoaded', setSize);

function setSize() {

    const frustumSize = 4;
    // const aspect = window.innerWidth / window.innerHeight;
    const aspect = canvas.clientWidth / canvas.clientHeight;

    camera.left = - frustumSize * aspect / 2;
    camera.right = frustumSize * aspect / 2;
    camera.top = frustumSize / 2;
    camera.bottom = - frustumSize / 2;
    camera.aspect = aspect;

    camera.updateProjectionMatrix();

    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
}

const scene = new THREE.Scene();

const geometry = new THREE.TetrahedronGeometry(1, 0);
const material = new THREE.MeshPhysicalMaterial({
    // color: 0x000000, 
    // color: 0x0055ff,
    color: 0x009BFF,
    // specularColor: 0xffffff,
    metalness: 0.5,
    roughness: 0.6,
});

/* Point towards top */
geometry.applyMatrix4(
    new THREE.Matrix4()
        .makeRotationAxis(
            new THREE.Vector3(1, 0, -1).normalize(),
            Math.atan(Math.sqrt(2))
        )
);

const tetra = new THREE.Mesh(geometry, material);
tetra.scale.setScalar(1.1);
tetra.position.set(
    // window.innerWidth < 640 ? 0.0 : 2.0, 
    0,
    0, 
    0
);
tetra.userData.originalPos = tetra.position.clone();
scene.add(tetra);

// const ambient = new THREE.AmbientLight(0xffffff, 0);
// scene.add(ambient);

const l1 = new THREE.PointLight(0xffffff, 30); // 0xedf5ff
const l2 = new THREE.PointLight(0xffffff, 30); // 0xedf5ff
const l3 = new THREE.PointLight(0xffffff, 30); // 0xedf5ff

l1.position.set(3.5, 0, 1);
l2.position.set(-2, 1, 1);
l3.position.set(0, -2, 0);

scene.add(l1);
scene.add(l2);
scene.add(l3);

// scene.add(new THREE.PointLightHelper(l1, 1, 0xffff00))
// scene.add(new THREE.PointLightHelper(l2, 1, 0xffff00))
// scene.add(new THREE.PointLightHelper(l3, 1, 0xffff00))

function animate(t) {
    tetra.position.y = tetra.userData.originalPos.y + 0.1 * Math.sin(t * 0.0005);
    tetra.rotation.y = t * 0.0001;
    tetra.rotation.x = t * 0.0001;

    // tetra.material.color.setHSL((t*0.0001) % 1, 1, 0.5);

    renderer.render(scene, camera);
}
