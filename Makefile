# Atalhos para ambiente Docker - Clean Code e Clean Architecture
# Uso: make php-shell | node-shell | php-test | node-test | php-run ARGS="..." | node-run ARGS="..."

.PHONY: php-shell node-shell php-build node-build php-test node-test php-run node-run help

# Shell interativo no container PHP (working dir: /app/php)
php-shell:
	docker compose run --rm php sh

# Shell interativo no container Node (working dir: /app/typescript-node)
node-shell:
	docker compose run --rm node sh

# Build das imagens (útil após alterar Dockerfiles)
php-build:
	docker compose build php

node-build:
	docker compose build node

build: php-build node-build

# Rodar PHPUnit em php/ (quando existir composer.json e phpunit.xml)
php-test:
	docker compose run --rm php vendor/bin/phpunit

# Rodar testes em typescript-node/ (npm test ou pnpm test)
node-test:
	docker compose run --rm node npm test

# Executar script PHP. Caminho relativo à pasta php/. Ex.: make php-run ARGS="clean-code/run-calculator.php"
php-run:
	docker compose run --rm php php $(ARGS)

# Executar script TypeScript com tsx. Caminho relativo a typescript-node/. Ex.: make node-run ARGS="clean-code/run-calculator.ts"
node-run:
	docker compose run --rm node npx tsx $(ARGS)

# Composer install em php/
php-install:
	docker compose run --rm php composer install

# npm install em typescript-node/
node-install:
	docker compose run --rm node npm install

help:
	@echo "Ambiente Docker - Clean Code e Clean Architecture"
	@echo ""
	@echo "Shell:     make php-shell | make node-shell"
	@echo "Build:     make build | make php-build | make node-build"
	@echo "Testes:    make php-test | make node-test"
	@echo "Executar:  make php-run ARGS=\"caminho/script.php\"  (caminho relativo a php/)"
	@echo "          make node-run ARGS=\"caminho/script.ts\""
	@echo "Depends:   make php-install | make node-install"
