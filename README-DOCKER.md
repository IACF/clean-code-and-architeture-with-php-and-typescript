# Ambiente Docker – PHP e TypeScript/Node.js

Este projeto usa **Docker Compose** com dois serviços para executar e testar código em **PHP** e **TypeScript/Node.js** sem instalar PHP ou Node localmente.

## Pré-requisitos

- [Docker](https://docs.docker.com/get-docker/) e [Docker Compose](https://docs.docker.com/compose/install/) (ou Docker com Compose V2: `docker compose`).

## Estrutura

- **Serviço `php`**: PHP 8.3 CLI, Composer, extensões (mbstring, zip, xml, pdo, pdo_mysql). Working dir: `php/`.
- **Serviço `node`**: Node 20 Alpine, npm, tsx (executar TypeScript direto). Working dir: `typescript-node/`.

O código do repositório é montado em `/app` dentro dos containers, então alterações no host refletem na hora.

## Comandos principais

### Shell no container

```bash
# Abrir shell no ambiente PHP (você já estará em /app/php)
make php-shell
# ou
docker compose run --rm php sh

# Abrir shell no ambiente Node (você já estará em /app/typescript-node)
make node-shell
# ou
docker compose run --rm node sh
```

### Instalar dependências

```bash
# PHP (Composer) – dentro de php/ quando houver composer.json
make php-install

# Node (npm) – dentro de typescript-node/ quando houver package.json
make node-install
```

### Executar scripts

```bash
# Script PHP
make php-run ARGS="clean-code/ch01/script.php"
# ou
docker compose run --rm php php clean-code/ch01/script.php

# Script TypeScript (com tsx)
make node-run ARGS="clean-code/ch02/example.ts"
# ou
docker compose run --rm node npx tsx clean-code/ch02/example.ts
```

### Testes

```bash
# PHPUnit (quando existir phpunit e composer em php/)
make php-test

# Jest/Vitest (quando existir npm test em typescript-node/)
make node-test
```

### Rebuild das imagens

```bash
make build
# ou
docker compose build
```

## Exemplos de uso no dia a dia

1. **Criar um script em `php/clean-code/ch01/hello.php`** e rodar:
   ```bash
   make php-run ARGS="clean-code/ch01/hello.php"
   ```

2. **Criar um script em `typescript-node/clean-code/ch02/hello.ts`** e rodar:
   ```bash
   make node-run ARGS="clean-code/ch02/hello.ts"
   ```

3. **Usar Composer/PHPUnit** (após `composer init` e `phpunit` em `php/`):
   ```bash
   make php-install
   make php-test
   ```

4. **Usar npm/Jest** (após `npm init` e configuração de testes em `typescript-node/`):
   ```bash
   make node-install
   make node-test
   ```

## Ver todos os atalhos

```bash
make help
```

## Casos de teste incluídos

### PHP (PHPUnit)

- **Classe:** `php/src/Calculator.php` – `add()` e `subtract()`.
- **Teste:** `php/tests/CalculatorTest.php`.

**Como rodar e testar:**

```bash
make php-install    # instala dependências (Composer)
make php-test       # executa PHPUnit
```

Ou direto no container:

```bash
docker compose run --rm php composer install
docker compose run --rm php vendor/bin/phpunit
```

### TypeScript (Vitest)

- **Classe:** `typescript-node/clean-code/calculator.ts` – `add()` e `subtract()`.
- **Teste:** `typescript-node/clean-code/calculator.test.ts`.

**Como rodar e testar:**

```bash
make node-install   # instala dependências (npm)
make node-test     # executa Vitest
```

Ou direto no container:

```bash
docker compose run --rm node npm install
docker compose run --rm node npm test
```

---

## Observações

- Os containers não sobem em background por padrão; use `docker compose run --rm ...` para comandos pontuais. Para deixar um serviço rodando: `docker compose up -d php` (o comando padrão é `tail -f /dev/null`).
- Para exercícios que usem banco de dados ou HTTP (ex.: capítulos “Database Is a Detail”, “Web Is a Detail”), pode-se adicionar depois serviços como `db` e `nginx`/`php-fpm` no `docker-compose.yml`.
