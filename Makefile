 .PHONY: \
	start \
	db/start db/interact db/stop \

start:
	node server.js

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
