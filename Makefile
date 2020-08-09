 .PHONY: \
	run \
	start \
	db/start db/interact db/stop

run:
	node server.js

start:
	npx nodemon

db/interact:
	docker exec \
		--tty \
		--interactive my-flix-pg psql \
		--host=localhost \
		--username=postgres \
		--dbname=postgres

db/start:
	docker-compose up --detach

db/stop:
	docker-compose down
