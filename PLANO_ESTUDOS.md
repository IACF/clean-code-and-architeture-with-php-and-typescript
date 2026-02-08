# Plano de Estudos: Clean Code e Clean Architecture (PHP + TypeScript/Node.js)

## Objetivo do projeto

Projeto de estudo para aprender **Clean Code** e **Clean Architecture** com implementações paralelas em **PHP** e **JavaScript/TypeScript (Node.js)**. O aprendizado é guiado capítulo a capítulo; um agente de IA usa este plano e, a cada tópico, pergunta ao desenvolvedor se deseja **estudar/implementar** aquele capítulo/princípio ou **avançar para o próximo**.

---

## Instruções para o agente de IA

- **Fluxo obrigatório a cada capítulo/princípio:** Antes de ensinar ou propor exercícios, o agente deve perguntar explicitamente: *"Você quer estudar e implementar este capítulo/princípio agora, ou prefere ir para o próximo?"*
- Se o desenvolvedor escolher **estudar**: o agente explica o tópico, sugere leitura (quando houver referência ao livro), propõe exercícios de implementação em **ambas** as pastas (`php/` e `typescript-node/`) e pode usar as ferramentas do **Senior Mind MCP** (review_code, suggest_refactoring, explain_principle, tdd_guide, etc.) quando fizer sentido.
- Se o desenvolvedor escolher **avançar**: o agente registra que o tópico foi pulado e passa ao próximo item do plano.
- O agente deve manter contexto do último tópico trabalhado para continuar de onde parou em sessões futuras (sugestão: arquivo opcional `.progress` na raiz com último capítulo/princípio).

---

## Estrutura de pastas do repositório

```
clean-code-and-architeture-with-php-and-typescript/
├── PLANO_ESTUDOS.md          # Este plano (na raiz, para outros desenvolvedores)
├── .progress                 # (opcional) Último tópico estudado
├── php/                      # Implementações e exercícios em PHP
│   ├── clean-code/           # Exercícios por capítulo Clean Code
│   └── clean-architecture/   # Exercícios por parte/capítulo Clean Architecture
└── typescript-node/          # Implementações e exercícios em TypeScript/Node.js
    ├── clean-code/
    └── clean-architecture/
```

- **PHP:** usar **PHP puro** nos tópicos de Clean Code e princípios SOLID para não mascarar conceitos; introduzir **Laravel** (ou outro framework) quando o plano chegar em "Frameworks & Drivers", "Web Is a Detail" e casos de uso com HTTP/DB, conforme recomendação do Senior Mind (Clean Architecture com Use Cases).
- **TypeScript/Node.js:** usar **Node.js com TypeScript** (sem framework inicialmente); opcionalmente **NestJS** ou Express quando o plano tratar de adaptadores e frameworks.

---

## Parte 1: Clean Code (livro – edição original)

Base: *Clean Code: A Handbook of Agile Software Craftsmanship*, Robert C. Martin. Ordem sugerida abaixo.

| #    | Capítulo                               | Objetivo de aprendizado                                                                                           | PHP                                                                                       | TypeScript/Node.js                                            |
| ---- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 1.1  | **Ch 1 – Clean Code**                  | O que é código limpo, por que importa, responsabilidade do desenvolvedor                                          | Pequeno texto ou checklist em Markdown; nenhum código ainda                               | Idem                                                          |
| 1.2  | **Ch 2 – Meaningful Names**            | Nomes que revelam intenção, evitar desinformação, pronunciáveis, searchable, sem prefixos tipo                    | Funções e variáveis com nomes significativos vs. ruins (exemplo antes/depois)             | Idem em TS                                                    |
| 1.3  | **Ch 3 – Functions**                   | Funções pequenas, uma coisa só, um nível de abstração, DRY, argumentos mínimos, sem efeitos colaterais            | Refatorar uma função "suja" em funções pequenas e nomeadas                                | Idem; usar tipagem para contratos                             |
| 1.4  | **Ch 4 – Comments**                    | Quando comentários ajudam vs. quando código autoexplicativo é melhor; TODO, informações úteis                     | Código que substitui comentários por nomes e funções                                      | Idem                                                          |
| 1.5  | **Ch 5 – Formatting**                  | Formatação vertical/horizontal, densidade, convenções de estilo                                                   | PSR-12 (PHP) aplicado em um módulo                                                        | Prettier/ESLint em um módulo                                  |
| 1.6  | **Ch 6 – Objects and Data Structures** | Abstração de dados, objetos vs. DTOs, Lei de Demeter                                                              | Exemplo: objeto com comportamento vs. estrutura de dados exposta                          | Classes vs. interfaces/types em TS                            |
| 1.7  | **Ch 7 – Error Handling**              | Não retornar null desnecessário; exceções vs. códigos de erro; contexto nas exceções                              | Exceções customizadas e tratamento em PHP                                                 | try/catch e tipos de erro em TS; não abusar de `any`          |
| 1.8  | **Ch 8 – Boundaries**                  | Integrar código de terceiros atrás de interfaces; testes nas bordas                                               | Wrapper em PHP para uma lib externa (ex.: cliente HTTP)                                   | Wrapper em TS para uma lib (ex.: axios/fetch)                 |
| 1.9  | **Ch 9 – Unit Tests**                  | TDD, testes limpos (FIRST), um conceito por teste, nomenclatura clara                                             | PHPUnit: um caso de uso com testes primeiro                                               | Jest ou Vitest: mesmo caso com testes primeiro                |
| 1.10 | **Ch 10 – Classes**                    | SRP em classes; organização (variáveis estáticas, de instância, métodos privados depois públicos); encapsulamento | Classe "gorda" refatorada em classes menores                                              | Idem com classes TS                                           |
| 1.11 | **Ch 11 – Systems**                    | Separação da construção do uso (main/orquestração); injeção de dependência                                        | Main que monta objetos e chama caso de uso (PHP puro)                                     | Main que monta e chama (Node)                                 |
| 1.12 | **Ch 12 – Emergence**                  | Regras de design emergente (SRP, OCP, DIP, testes); refatoração guiada por testes                                 | Aplicar em um mini-módulo já testado                                                      | Idem                                                          |
| 1.13 | **Ch 13 – Concurrency**                | Single Responsibility para threads; limites de dados; testes de concorrência (opcional)                           | Exemplo simples com threads/async se fizer sentido em PHP                                 | Promises/async em Node; um exemplo de concorrência controlada |
| 1.14 | **Ch 14 – Successive Refinement**      | Refinamento sucessivo: começar "sujo" e refatorar passo a passo                                                   | Um parser ou processador de texto refinado em etapas                                      | Idem em TS                                                    |
| 1.15 | **Ch 17 – Smells and Heuristics**      | Lista de heurísticas e code smells; usar como checklist em revisões                                               | Revisar código de um exercício anterior com Senior Mind (review_code, detect_code_smells) | Idem em TS                                                    |

**Sugestão:** Capítulos 15 (JUnit Internals) e 16 (Refactoring SerialDate) podem ser opcionais ou adaptados: 15 como "como um framework de testes está organizado" (PHPUnit/Jest por dentro); 16 como "refatoração de um módulo legado" em ambos os ecossistemas.

---

## Parte 2: Clean Architecture (livro)

Base: *Clean Architecture: A Craftsman's Guide to Software Structure and Design*, Robert C. Martin. A ordem segue as partes do livro; a implementação prática pode usar a **Opção 1 do Senior Mind: Clean Architecture com Use Cases** (Entities, Use Cases, Interface Adapters, Frameworks).

### Part I – Introduction

| #   | Capítulo                                    | Objetivo                                                                          | PHP                                                                            | TypeScript/Node.js |
| --- | ------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------ |
| 2.1 | **Ch 1 – What Is Design and Architecture?** | Objetivo da arquitetura: facilitar desenvolvimento, deploy, operação e manutenção | Documento ou diagrama (Mermaid) do que você entendeu                           | Idem               |
| 2.2 | **Ch 2 – A Tale of Two Values**             | Comportamento vs. estrutura; valor da arquitetura a longo prazo                   | Pequeno exemplo onde "mudar comportamento" é barato e "mudar estrutura" é caro | Idem               |

### Part II – Programming Paradigms

| #   | Capítulo                                        | Objetivo                                                                | PHP                                                    | TypeScript/Node.js                        |
| --- | ----------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------ | ----------------------------------------- |
| 2.3 | **Ch 3–4 – Paradigms / Structured Programming** | Estruturação com sequência, decisão, iteração; sem `goto` desnecessário | Funções pequenas e bem estruturadas                    | Idem                                      |
| 2.4 | **Ch 5 – Object-Oriented Programming**          | Encapsulamento, herança, polimorfismo e como suportam arquitetura       | Classes com encapsulamento e polimorfismo (interfaces) | Classes e interfaces em TS                |
| 2.5 | **Ch 6 – Functional Programming**               | Imutabilidade, segregação de mutação; impacto na arquitetura            | Funções puras e imutabilidade onde fizer sentido       | Idem; uso de `readonly` e tipos imutáveis |

### Part III – Design Principles (SOLID)

| #    | Capítulo        | Objetivo                                       | PHP                                                                                   | TypeScript/Node.js                                                 |
| ---- | --------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 2.6  | **Ch 7 – SRP**  | Uma razão para mudar por classe/módulo         | Uma Use Case por classe; entidade separada de persistência                            | Idem; use `explain_principle` (srp) e `review_code` do Senior Mind |
| 2.7  | **Ch 8 – OCP**  | Abrir para extensão, fechar para modificação   | Nova regra de negócio por nova classe, sem alterar existentes                         | Idem                                                               |
| 2.8  | **Ch 9 – LSP**  | Subtipos substituíveis; contratos claros       | Hierarquia onde subclasses não quebram expectativas                                   | Idem em TS                                                         |
| 2.9  | **Ch 10 – ISP** | Interfaces enxutas e específicas ao cliente    | Múltiplas interfaces pequenas em vez de uma grande                                     | Idem em TS                                                         |
| 2.10 | **Ch 11 – DIP** | Depender de abstrações; injeção de dependência | Use cases dependem de interfaces (repositórios, gateways); main injeta implementações | Idem; containers opcionais (ex.: NestJS DI)                        |

### Part IV – Component Principles

| #    | Capítulo                       | Objetivo                                         | PHP                                                     | TypeScript/Node.js                                      |
| ---- | ------------------------------ | ------------------------------------------------ | ------------------------------------------------------- | ------------------------------------------------------- |
| 2.11 | **Ch 12 – Components**         | Componentes como unidades de deploy/relocação    | Estrutura de namespaces/pastas como "componentes"       | Módulos/pastas como componentes                         |
| 2.12 | **Ch 13 – Component Cohesion** | REP, CCP, CRP                                    | Agrupar classes que mudam juntas (ex.: por caso de uso) | Idem                                                    |
| 2.13 | **Ch 14 – Component Coupling** | ADP, SDP, SAP; dependências estáveis e abstratas | Grafo de dependências apontando para dentro (núcleo)   | Idem; validar com `validate_architecture` (Senior Mind) |

### Part V – Architecture (núcleo do livro)

| #    | Capítulo                                   | Objetivo                                                                              | PHP                                                                       | TypeScript/Node.js                                |
| ---- | ------------------------------------------ | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------- |
| 2.14 | **Ch 15 – What Is Architecture?**          | Arquitetura a serviço de desenvolvimento, deploy, operação, manutenção                | Lista de decisões e "options kept open"                                   | Idem                                              |
| 2.15 | **Ch 16 – Independence**                   | Independência de use cases, camadas, modos de deploy                                  | Diagrama de camadas e dependências                                        | Idem                                              |
| 2.16 | **Ch 17–18 – Boundaries**                  | Onde traçar linhas; anatomia de boundaries (monolith, services)                       | Decisão: monólito com boundaries claros ou serviços                       | Idem                                              |
| 2.17 | **Ch 19 – Policy and Level**               | Níveis de política (regras de negócio vs. detalhes)                                   | Identificar "nível" de cada classe no projeto                             | Idem                                              |
| 2.18 | **Ch 20 – Business Rules**                 | Entities vs. Use Cases; request/response models                                       | Entidades de domínio + um Use Case com request/response                   | Idem                                              |
| 2.19 | **Ch 21 – Screaming Architecture**         | Estrutura de pastas revela o domínio, não o framework                                 | Pastas por domínio/use case (não "controllers", "models" genéricos)       | Idem                                              |
| 2.20 | **Ch 22 – The Clean Architecture**         | Regra da dependência; diagrama de camadas (Entities, Use Cases, Adapters, Frameworks) | Implementar as 4 camadas em PHP (puro ou Laravel na camada externa)       | Idem em TS (Node; Express/Nest na camada externa) |
| 2.21 | **Ch 23 – Presenters and Humble Objects**  | Humble Object para UI e testes; Presenters; gateways e mappers                        | Controller "burro" + Presenter; Gateway de persistência                   | Idem                                              |
| 2.22 | **Ch 24–25 – Partial Boundaries / Layers** | Boundaries parciais e organização em camadas                                         | Um boundary parcial (ex.: facade) em um módulo                            | Idem                                              |
| 2.23 | **Ch 26 – Main Component**                 | Ponto de entrada que monta e injeta dependências                                      | `index.php` ou `public/index.php` que compõe a aplicação                  | `src/main.ts` ou similar                          |
| 2.24 | **Ch 27 – Services**                       | Serviços grandes vs. pequenos; objetos e componentes                                 | Um "service" como orquestrador de use cases, sem lógica de negócio pesada  | Idem                                              |
| 2.25 | **Ch 28 – Test Boundary**                  | Testes como parte da arquitetura; design for testability                              | Testes unitários de use cases com mocks de repositórios                   | Idem (Jest/Vitest)                                |

### Part VI – Details

| #    | Capítulo                            | Objetivo                                                                  | PHP                                                                            | TypeScript/Node.js                                                   |
| ---- | ----------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| 2.26 | **Ch 30 – Database Is a Detail**    | Persistência atrás de interfaces; trocar DB sem mudar regras              | Interface `UserRepository`; implementação em memória e uma com PDO/Eloquent     | Interface + in-memory e uma implementação (ex.: Prisma/TypeORM)      |
| 2.27 | **Ch 31 – Web Is a Detail**         | HTTP como mecanismo de entrega; regras independentes da web               | Use case chamado por controller HTTP (Laravel/PSR)                             | Use case chamado por Express/Nest controller                         |
| 2.28 | **Ch 32 – Frameworks Are Details**  | Framework na camada externa; não deixar o framework "vazar" para o núcleo | Laravel apenas em controllers, rotas, config; domínio sem referência a Laravel | Express/Nest apenas em adapters; domínio sem referência ao framework |
| 2.29 | **Ch 33 – Case Study: Video Sales** | Aplicar tudo em um estudo de caso                                         | Implementar um subconjunto (ex.: cadastro de item, listagem) em PHP            | Idem em TS                                                           |
| 2.30 | **Ch 34 – The Missing Chapter**     | Package by layer vs. by feature; Ports and Adapters; encapsulamento       | Reorganizar um módulo por "package by feature" ou "ports and adapters"         | Idem                                                                 |

---

## Ordem de estudo sugerida

1. **Fase 1 – Clean Code (capítulos 1–12 e 17):** Do "Clean Code" até "Emergence" e "Smells and Heuristics", com implementações em `php/clean-code/` e `typescript-node/clean-code/`.
2. **Fase 2 – SOLID e componentes (Clean Architecture Part III e IV):** Princípios de design e componentes em ambos os idiomas; começar a esboçar pastas `php/clean-architecture/` e `typescript-node/clean-architecture/`.
3. **Fase 3 – Arquitetura em camadas (Part V):** Entities, Use Cases, Adapters, Frameworks; um caso de uso completo em PHP e um em TypeScript/Node.js.
4. **Fase 4 – Details (Part VI):** Database, Web, Frameworks e Case Study; integrar Laravel (PHP) e Express/Nest (Node) apenas nas camadas externas.

---

## Uso do Senior Mind MCP pelo agente

- **analyze_architecture:** Ao definir ou revisar a estrutura de pastas e camadas (PHP ou NestJS/Laravel).
- **review_code / detect_code_smells:** Após o desenvolvedor implementar um exercício (Clean Code ou SOLID).
- **suggest_refactoring:** Ao refatorar código para Object Calisthenics ou Clean Code.
- **explain_principle:** Para SRP, OCP, LSP, ISP, DIP, DRY, KISS, YAGNI, Demeter, Tell Don't Ask, FIRST.
- **validate_architecture:** Para validar imports e camadas (Laravel/NestJS/generic).
- **tdd_guide:** Nos capítulos de testes (Clean Code Ch 9 e Clean Architecture Ch 28).
- **compare_sql:** Quando o tópico envolver persistência e escolha entre ORM e SQL.

---

## Resumo para o agente

- Sempre **perguntar** se o desenvolvedor quer **estudar/implementar** o tópico atual ou **ir ao próximo**.
- Manter **duas pastas** de código: `php/` e `typescript-node/`, com subpastas `clean-code/` e `clean-architecture/`.
- Usar **PHP puro** (e Node/TS puro) nos fundamentos; **Laravel** e **Express/Nest** apenas como detalhes nas camadas externas.
- Referir-se a **Clean Code** e **Clean Architecture** por capítulo; usar **Senior Mind MCP** para revisão, princípios, refatoração, TDD e validação de arquitetura.
- Garantir que o **plano completo** esteja documentado em **PLANO_ESTUDOS.md** na raiz para reutilização.
