up:
	docker-compose up -d

down:
	docker-compose down

upc:
	docker-compose -f docker-compose-control-center.yml up -d

downc:
	docker-compose -f docker-compose-control-center.yml down

.PHONY: up down upc downc
