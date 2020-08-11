 .PHONY: \
	run \
	start \

run:
	node src/server.js

start:
	npx nodemon