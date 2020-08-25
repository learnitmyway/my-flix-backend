 .PHONY: \
	db/seed \
	lint \
	run \
	start \

db/seed:
	node scripts/seed-data.js

lint:
	npx eslint --config .eslintrc.js 'src/**/*.js' --max-warnings 0

run:
	node src/server.js

start:
	npx nodemon