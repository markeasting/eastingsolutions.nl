npm run build

# git subtree push --prefix dist origin gh-pages
git push origin :gh-pages && git subtree push --prefix dist origin gh-pages