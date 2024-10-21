.PHONY: run test

run: node_modules
	npm run start

test: node_modules
	npm test

node_modules: package.json package-lock.json
	npm install
	@touch $@

