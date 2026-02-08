# Clean Code e Clean Architecture – Estudos (PHP + TypeScript)

Projeto para estudar **Clean Code** e **Clean Architecture** com implementações em paralelo em **PHP** e **TypeScript/Node.js**. O aprendizado segue um plano capítulo a capítulo; você pode usar um agente de IA para guiar o estudo (o plano está em [PLANO_ESTUDOS.md](PLANO_ESTUDOS.md)).

## O que é este projeto

- **Objetivo:** Aprender na prática os princípios dos livros *Clean Code* e *Clean Architecture* (Robert C. Martin), implementando os mesmos conceitos em PHP e em TypeScript.
- **Estrutura:** Duas pastas de código (`php/` e `typescript-node/`) com subpastas `clean-code/` e `clean-architecture/` para organizar os exercícios por tema.
- **Ambiente:** Tudo roda via **Docker**; não é obrigatório ter PHP ou Node instalado na máquina.

## Pré-requisitos

- [Docker](https://docs.docker.com/get-docker/) e [Docker Compose](https://docs.docker.com/compose/install/) (ou `docker compose` V2)
- Make (opcional; os comandos podem ser feitos direto com `docker compose run ...`)

## Estrutura do repositório

```
├── README.md                 # Este arquivo
├── PLANO_ESTUDOS.md          # Plano de estudos capítulo a capítulo (Clean Code + Clean Architecture)
├── .progress.md              # Progresso do estudo (último tópico) – ver seção abaixo
├── PLANO_DOCKER.md          # Detalhes da infraestrutura Docker
├── Makefile                  # Atalhos: make php-test, make node-run, etc.
├── docker-compose.yml       # Serviços php e node
├── php/                      # Código e exercícios em PHP
│   ├── clean-code/
│   ├── clean-architecture/
│   ├── src/                  # Código fonte (ex.: Calculator)
│   └── tests/                # Testes PHPUnit
└── typescript-node/          # Código e exercícios em TypeScript/Node.js
    ├── clean-code/
    └── clean-architecture/
```

## Início rápido

1. **Subir o ambiente (build das imagens):**
   ```bash
   make build
   ```
   ou `docker compose build`

2. **Instalar dependências (uma vez por stack):**
   ```bash
   make php-install
   make node-install
   ```

3. **Rodar os testes de exemplo:**
   ```bash
   make php-test
   make node-test
   ```

## Comandos para estudo

Todos os comandos abaixo usam o Makefile. O caminho em `ARGS=` é sempre **relativo à pasta da stack** (`php/` ou `typescript-node/`).

### Ambiente (Docker)

| Comando | Descrição |
|---------|-----------|
| `make build` | (Re)construir as imagens Docker (php e node) |
| `make php-shell` | Abrir shell no container PHP (working dir: `php/`) |
| `make node-shell` | Abrir shell no container Node (working dir: `typescript-node/`) |

### PHP

| Comando | Descrição |
|---------|-----------|
| `make php-install` | Instalar dependências com Composer (`php/`) |
| `make php-test` | Rodar testes PHPUnit |
| `make php-run ARGS="caminho/script.php"` | Executar um script PHP |

**Exemplo – rodar o script de exemplo da calculadora:**
```bash
make php-run ARGS="clean-code/run-calculator.php"
```

### TypeScript/Node.js

| Comando | Descrição |
|---------|-----------|
| `make node-install` | Instalar dependências com npm (`typescript-node/`) |
| `make node-test` | Rodar testes (Vitest) |
| `make node-run ARGS="caminho/script.ts"` | Executar um script TypeScript (via tsx) |

**Exemplo – rodar o script de exemplo da calculadora:**
```bash
make node-run ARGS="clean-code/run-calculator.ts"
```

### Ver todos os atalhos

```bash
make help
```

## Arquivo `.progress.md`

O arquivo **`.progress.md`** fica na raiz do projeto e serve para **registrar em qual tópico do plano você parou**. Assim, em uma nova sessão (ou ao usar um agente de IA para guiar o estudo), é possível retomar de onde parou, sem precisar lembrar manualmente.

- **Função:** Guardar o último capítulo/princípio estudado (ex.: `1.1`, `2.6`) e, opcionalmente, o próximo sugerido e notas (tópicos pulados, decisões).
- **Quem usa:** Você pode editar à mão; se usar um agente de IA que segue o [PLANO_ESTUDOS.md](PLANO_ESTUDOS.md), ele pode ler e atualizar o `.progress.md` ao avançar ou pular tópicos.
- **Formato:** Markdown (`.md`), com seções claras, para facilitar a leitura e a atualização por um agente de IA. Ao concluir um tópico, preencha a seção **Último tópico estudado/concluído** com o número (ex.: `1.1`); em **Próximo tópico sugerido**, indique o próximo item do plano.

O `.progress.md` é opcional: se você não usar, basta seguir o plano na ordem; se usar, facilita a continuidade entre sessões e o trabalho com um agente.

## Resumo do fluxo de estudo

1. Abra o **[PLANO_ESTUDOS.md](PLANO_ESTUDOS.md)** e siga a ordem dos capítulos (Clean Code e depois Clean Architecture).
2. Para cada tópico, implemente em **PHP** e em **TypeScript** nas pastas correspondentes.
3. Use os comandos acima para instalar dependências, rodar testes e executar scripts.
4. (Opcional) Atualize o **`.progress.md`** ao concluir um tópico para retomar depois.
5. Para mais detalhes sobre Docker e exemplos, consulte [README-DOCKER.md](README-DOCKER.md) e [PLANO_DOCKER.md](PLANO_DOCKER.md).

## Exemplos incluídos

- **PHP:** classe `php/src/Calculator.php`, testes em `php/tests/CalculatorTest.php`, script em `php/clean-code/run-calculator.php`.
- **TypeScript:** classe `typescript-node/clean-code/calculator.ts`, testes em `typescript-node/clean-code/calculator.test.ts`, script em `typescript-node/clean-code/run-calculator.ts`.

Para rodar os scripts que exibem saída no terminal, use os exemplos com `run-calculator` acima; arquivos que só definem classes não imprimem nada ao serem executados.
