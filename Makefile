# build and watch
watch:
	test -e node_modules || npm i
	node build.js watch

# build without watching
build:
	test -e node_modules || npm i
	node build.js

serve:
	cd public && python3 -m http.server

parser:
	npm run build-parser

# deploy to github pages
deploy:
	git push origin "main:deploy"
