 .PHONY: \
	lint \
	run \
	start \

lint:
	npx eslint --config .eslintrc.js 'src/**/*.js' --max-warnings 0

run:
	node src/server.js

start:
	npx nodemon