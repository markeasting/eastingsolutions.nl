(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1512:function(e,t,r){Promise.resolve().then(r.bind(r,3664)),Promise.resolve().then(r.bind(r,1684)),Promise.resolve().then(r.bind(r,9911)),Promise.resolve().then(r.bind(r,1503)),Promise.resolve().then(r.bind(r,6280)),Promise.resolve().then(r.bind(r,1645)),Promise.resolve().then(r.t.bind(r,1703,23))},3664:function(e,t,r){"use strict";r.r(t),r.d(t,{ContactLink:function(){return s}});var n=r(8376);function s(e){let{children:t,...r}=e;return(0,n.jsx)("a",{...r,href:"mailto:contact@eastingsolutions.nl?subject=Contact form Easting Solutions",target:"_blank",children:t||"Contact &rsaquo;"})}},1684:function(e,t,r){"use strict";r.d(t,{CopyLink:function(){return s}});var n=r(8376);function s(e){let{type:t,copy:r,children:s,...o}=e;return(0,n.jsx)("a",{...o,href:"#",onClick:e=>{e.preventDefault(),navigator.clipboard.writeText(r).then(()=>{alert("".concat(t||"Item"," copied to clipboard."))},()=>{})},children:s||"Contact &rsaquo;"})}},9911:function(e,t,r){"use strict";r.d(t,{NavMenu:function(){return c}});var n=r(8376),s=r(1503),o=r(3664),l=r(7894);function c(){let[e,t]=(0,l.useState)(!1),r=()=>{t(!1),document.body.style.overflow="auto"};return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{onClick:()=>{t(!0),document.body.style.overflow="hidden"},className:"cursor-pointer p-2",children:(0,n.jsx)("div",{id:"hamburger",className:"w-[2rem] h-[2rem]",style:function(e){for(let[t,r]of Object.entries(e))e["Webkit"+(t.charAt(0).toUpperCase()+t.slice(1))]=r;return e}({filter:"saturate(0) blur(4px)",backdropFilter:"invert(1)",maskImage:'url("hamburger.svg")',maskRepeat:"no-repeat",maskSize:"2rem"})})}),(0,n.jsxs)("nav",{className:"\n                fixed right-0 top-0 h-full \n                flex flex-col gap-4\n                bg-white px-8\n                min-w-64 max-xs:w-full\n                ".concat(e?"translate-x-[0%]":"translate-x-[100%]"," transition-transform\n                "),children:[(0,n.jsx)("div",{className:"pt-4",children:(0,n.jsx)("img",{src:"hamburger_close.svg",className:"w-[2rem] h-[2rem] ml-auto cursor-pointer",alt:"Close menu",onClick:r})}),(0,n.jsxs)("div",{className:"flex flex-col gap-2 items-center",children:[(0,n.jsx)("a",{href:"https://calendly.com/easting-solutions/30min",target:"_blank",className:"w-full bg-black text-white h-auto px-4 py-2 rounded text-center hover:bg-primary hover:text-white transition-colors",children:"Book appointment ↗"}),(0,n.jsx)(o.ContactLink,{className:"w-full bg-black text-white h-auto px-4 py-2 rounded text-center hover:bg-primary hover:text-white transition-colors",children:"Email us ↗"}),(0,n.jsx)("a",{href:"tel:+31631388344",className:"w-full bg-black text-white h-auto px-4 py-2 rounded text-center hover:bg-primary hover:text-white transition-colors",children:"Call us ↗"})]}),(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)(s.ScrollToElement,{href:"#about",target:"about",className:"block my-4 text-black",onClick:r,children:"About"}),(0,n.jsx)(s.ScrollToElement,{href:"#portfolio",target:"portfolio",className:"block my-4 text-black",onClick:r,children:"Portfolio"})]}),(0,n.jsx)("div",{className:"grow"}),(0,n.jsxs)("p",{className:"text-xs text-center",children:["\xa9 ",new Date().getFullYear()," Easting Solutions"]})]})]})}},1503:function(e,t,r){"use strict";r.d(t,{ScrollToElement:function(){return o}});var n=r(8376),s=r(8173);function o(e){let{target:t,children:r,...o}=e,l=(0,s.uW)();return(0,n.jsx)("a",{...o,onClick:e=>{e.preventDefault(),l.scrollTo(document.getElementById(t)),o.onClick&&o.onClick()},children:[...r]})}},6280:function(e,t,r){"use strict";r.d(t,{TetraScene:function(){return u}});var n=r(8376),s=r(8173),o=r(6952),l=r(4798),c=r(7894),i=r(2445);let a="Tetra.glb";function u(){let e=[{pos:new i.Vector3(-1,-.2,-.5),scale:.3},{pos:new i.Vector3(.7,.8,-.4),scale:.5},{pos:new i.Vector3(2,.6,-.6),scale:.5},{pos:new i.Vector3(2,-.2,-.5),scale:.4},{pos:new i.Vector3(1.5,0,-1.3),scale:.5},{pos:new i.Vector3(1.9,-.4,-1),scale:.4},{pos:new i.Vector3(.2,.8,-1),scale:.5},{pos:new i.Vector3(1.7,.3,-.2),scale:.7}],t=(0,c.useRef)(null);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{ref:t,className:"absolute top-0 left-0 h-full w-full pointer-events-none"}),(0,n.jsx)(s.bA,{children:(0,n.jsx)(s.e,{track:t,hideOffscreen:!0,children:t=>(0,n.jsxs)("group",{scale:.5*t.scale.xy.min(),children:[(0,n.jsx)(d,{...t}),e.map((e,r)=>(0,n.jsx)("group",{position:e.pos,scale:e.scale,children:(0,n.jsx)(h,{index:r,...t})},r))]})})})]})}function d(e){let{scale:t,scrollState:r}=e,s=(0,o.L)(a),i=(0,c.useRef)(null);(0,l.F)((e,t)=>{i.current.rotation.z=-2-6*r.progress,i.current.rotation.x=-2-6*r.progress,i.current.position.z=-3+5*r.progress,i.current.position.y=1-r.progress*u,i.current.position.x=2-2.5*r.progress});let u=window.innerWidth<720?window.innerWidth<480?3.5:3.2:2.4;return(0,n.jsx)(c.Suspense,{fallback:null,children:(0,n.jsx)("mesh",{ref:i,geometry:s.scene.children[0].geometry,children:(0,n.jsx)("meshNormalMaterial",{})})})}function h(e){let{index:t,scale:r,scrollState:s}=e,i=(0,o.L)(a),u=(0,c.useRef)(),[d,h]=(0,c.useState)(!1);return(0,l.F)((e,r)=>{let n=e.clock.getElapsedTime()+10*t;u.current.rotation.y=.1*n,u.current.rotation.z=3*s.progress}),(0,n.jsx)(c.Suspense,{fallback:null,children:(0,n.jsxs)("mesh",{ref:u,geometry:i.scene.children[0].geometry,scale:[2,2,2],children:[(0,n.jsx)("meshStandardMaterial",{roughness:.75,metalness:.2,color:3355443}),","]})})}o.L.preload(a)},1645:function(e,t,r){"use strict";r.d(t,{TetraSceneCta:function(){return u}});var n=r(8376),s=r(8173),o=r(4798),l=r(7894),c=r(2445),i=r(6952);let a="Tetra.glb";function u(){let e=[{pos:new c.Vector3(-1,-.55,-.5),scale:.5},{pos:new c.Vector3(3,.3,-.3),scale:.5},{pos:new c.Vector3(-3,-.2,-1),scale:.5}],t=(0,l.useRef)(null);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{ref:t,className:"absolute top-0 left-0 h-full w-full pointer-events-none"}),(0,n.jsx)(s.bA,{children:(0,n.jsx)(s.e,{track:t,hideOffscreen:!0,children:t=>(0,n.jsxs)("group",{scale:.5*t.scale.xy.min(),children:[(0,n.jsx)(d,{...t}),e.map((e,r)=>(0,n.jsx)("group",{position:e.pos,scale:e.scale,children:(0,n.jsx)(h,{index:r,...t})},r))]})})})]})}function d(e){let{scale:t,scrollState:r}=e,s=(0,i.L)(a),c=(0,l.useRef)();return(0,o.F)((e,t)=>{let n=.1*e.clock.getElapsedTime();c.current.rotation.z=-2-3*r.progress,c.current.rotation.x=-2-3*r.progress,c.current.rotation.y=n,c.current.position.y=.1-1.15*r.progress,c.current.position.x=1.3-1*r.progress,c.current.position.z=0+1.5*r.progress}),(0,n.jsx)(l.Suspense,{fallback:null,children:(0,n.jsx)("mesh",{ref:c,geometry:s.scene.children[0].geometry,scale:[1.5,1.5,1.5],children:(0,n.jsx)("meshNormalMaterial",{})})})}function h(e){let{index:t,scale:r,scrollState:s}=e,c=(0,i.L)(a),u=(0,l.useRef)(),[d,h]=(0,l.useState)(!1);return(0,o.F)((e,r)=>{let n=e.clock.getElapsedTime()+10*t;u.current.rotation.y=.1*n,u.current.rotation.z=3*s.progress}),(0,n.jsx)(l.Suspense,{fallback:null,children:(0,n.jsxs)("mesh",{ref:u,geometry:c.scene.children[0].geometry,scale:[2,2,2],children:[(0,n.jsx)("meshStandardMaterial",{roughness:.75,metalness:.2,color:d?16711935:3355443}),","]})})}i.L.preload(a)}},function(e){e.O(0,[680,173,18,922,996,744],function(){return e(e.s=1512)}),_N_E=e.O()}]);