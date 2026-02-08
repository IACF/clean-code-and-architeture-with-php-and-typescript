# Plano de Estudos: Clean Code e Clean Architecture (PHP + TypeScript/Node.js)

## Objetivo do projeto

Projeto de estudo para aprender **Clean Code** e **Clean Architecture** com implementações paralelas em **PHP** e **JavaScript/TypeScript (Node.js)**. O aprendizado é guiado capítulo a capítulo; um agente de IA usa este plano para mentoria.

---

## Instruções para o agente de IA

- **Fluxo obrigatório a cada capítulo/princípio:**
  1.  **Perguntar:** *"Você quer estudar/implementar este capítulo agora ou avançar?"*
  2.  **Explicar:** Se "estudar", explicar brevemente o conceito do capítulo.
  3.  **Desafio Prático (Atividade):**
      *   Criar um arquivo com **"Código Sujo" (Bad Code)** que viole os princípios do capítulo, tanto em PHP quanto em TypeScript.
      *   Pedir para o desenvolvedor refatorar esse código aplicando o que aprendeu.
  4.  **Análise e Feedback (CRUCIAL):**
      *   Ler a solução implementada pelo usuário.
      *   **Validar:** Verificar se a refatoração resolveu os problemas originais.
      *   **Dar Feedback:** Apontar o que ficou bom e o que ainda pode melhorar.
      *   Se a solução estiver incompleta ou incorreta, explicar o porquê e pedir nova tentativa ou ajustes.
  5.  **Gabarito (Comparação):**
      *   Após o feedback e eventuais correções, fornecer a **solução ideal (Clean Code)** do agente.
      *   Comparar as abordagens.

- **Manter Contexto:** Ler e atualizar o arquivo `.progress.md` para saber onde parou.

---

## Estrutura de pastas do repositório

```
clean-code-and-architeture-with-php-and-typescript/
├── PLANO_ESTUDOS.md          # Este plano
├── .progress.md              # Progresso do estudo
├── php/
│   ├── clean-code/           # Exercícios por capítulo (ex: ch02-names/)
│   └── clean-architecture/
└── typescript-node/
    ├── clean-code/
    └── clean-architecture/
```

---

## Parte 1: Clean Code (Desafios de Refatoração)

Para cada capítulo, o agente deve gerar um exercício de **Bad Code -> Clean Code**.

| #    | Capítulo                               | Conceito Chave                                                                                                    | Atividade Prática (Desafio para o usuário)                                                                 |
| ---- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 1.1  | **Ch 1 – Clean Code**                  | Definição, Regra do Escoteiro, Responsabilidade                                                                   | (Teórico) Checklist: "O que torna este código ruim?" (Análise de um trecho ilegível)                       |
| 1.2  | **Ch 2 – Meaningful Names**            | Revelar intenção, evitar desinformação, nomes pronunciáveis                                                       | **Refatorar:** Variáveis `$d`, `$list`, `funcaoX()` para nomes de domínio (ex: `$daysOverdue`).            |
| 1.3  | **Ch 3 – Functions**                   | Pequenas, fazem uma coisa só, níveis de abstração, poucos argumentos                                              | **Refatorar:** Quebrar uma "God Function" de 50 linhas com 3 `if/else` aninhados em funções menores.       |
| 1.4  | **Ch 4 – Comments**                    | Código > Comentários; remover comentários óbvios ou mentirosos                                                    | **Limpar:** Código cheio de `// verifica se x é verdadeiro` e substituir por nomes de variáveis explicativos. |
| 1.5  | **Ch 5 – Formatting**                  | Densidade vertical, espaçamento, convenções                                                                       | **Formatar:** Um arquivo "minificado" ou bagunçado. Aplicar PSR-12 (PHP) e Prettier (TS).                  |
| 1.6  | **Ch 6 – Objects vs Data Structures**  | Lei de Demeter, DTOs vs Objetos com comportamento                                                                 | **Refatorar:** Código que faz `getObj()->getPart()->getData()` (Train Wreck) para métodos encapsulados.    |
| 1.7  | **Ch 7 – Error Handling**              | Exceptions vs Return Codes, não retornar null                                                                     | **Refatorar:** Substituir checagem de `if ($result == -1)` por `try/catch` e Exceptions tipadas.           |
| 1.8  | **Ch 8 – Boundaries**                  | Encapsular código de terceiros (Adapters)                                                                         | **Criar Wrapper:** Código que chama `curl_exec` ou `axios` direto espalhado; criar uma Interface/Adapter.  |
| 1.9  | **Ch 9 – Unit Tests**                  | TDD, FIRST, um assert por teste                                                                                   | **Testar:** Escrever testes para uma função simples, depois refatorar o teste para ser legível.            |
| 1.10 | **Ch 10 – Classes**                    | SRP, coesão, organização interna                                                                                  | **Quebrar Classe:** Uma classe `UserManager` que valida email, salva no banco e envia notificação.         |
| 1.11 | **Ch 11 – Systems**                    | Separação de construção (Main) e uso                                                                              | **Injeção de Dependência:** Refatorar classes que dão `new Database()` no construtor para receber via DI.  |
| 1.12 | **Ch 12 – Emergence**                  | Design simples (testes, sem duplicação, expressivo)                                                               | **Refatoração Livre:** O agente gera um código funcional mas duplicado e confuso; usuário limpa.           |
| 1.13 | **Ch 13 – Concurrency**                | (Opcional) Separação de responsabilidade em threads                                                               | **Async/Threads:** Exemplo simples de *race condition* para corrigir (se aplicável).                       |
| 1.14 | **Ch 14 – Successive Refinement**      | Refatorar passo a passo sem quebrar testes                                                                        | **Refatoração Guiada:** Um parser de argumentos de linha de comando "sujo" para limpar em etapas.          |
| 1.15 | **Ch 17 – Smells and Heuristics**      | Checklist final de odores de código                                                                               | **Code Review:** O agente apresenta um código complexo; o usuário deve listar os "Smells" encontrados.     |

---

## Parte 2: Clean Architecture (Estrutura e Componentes)

Nesta fase, os exercícios focam em **estrutura de pastas** e **diagramas/código esqueleto**.

| #    | Capítulo                                    | Conceito                                         | Atividade Prática                                                                 |
| ---- | ------------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------- |
| 2.1  | **Ch 1–2 – Intro & Values**                 | Comportamento vs Estrutura                      | (Teórico) Discussão sobre um caso onde estrutura ruim travou o projeto.           |
| 2.3  | **Ch 3–6 – Paradigms**                      | Estruturado, OO, Funcional                      | **Polimorfismo:** Substituir um `switch ($type)` gigante por polimorfismo (OO).   |
| 2.6  | **Ch 7 – SRP (Single Responsibility)**      | Uma razão para mudar                            | **Refatorar:** Classe que mistura Regra de Negócio com Formatação HTML/JSON.      |
| 2.7  | **Ch 8 – OCP (Open/Closed)**                | Extensível sem modificação                      | **Adicionar Feature:** Adicionar novo tipo de desconto sem tocar na classe base.  |
| 2.8  | **Ch 9 – LSP (Liskov Substitution)**        | Subtipos intercambiáveis                        | **Corrigir:** Uma subclasse que lança erro em método da pai (violação LSP).       |
| 2.9  | **Ch 10 – ISP (Interface Segregation)**     | Interfaces específicas                          | **Dividir Interface:** Uma interface `UserOps` gigante quebrada em menores.       |
| 2.10 | **Ch 11 – DIP (Dependency Inversion)**      | Depender de abstrações                          | **Inverter:** Fazer a regra de negócio depender de `RepositoryInterface`, não MySQL. |
| 2.11 | **Ch 12–14 – Component Principles**         | Coesão e Acoplamento (REP, CCP, ADP)            | **Diagrama:** Desenhar/Corrigir setas de dependência entre 3 módulos fictícios.   |
| 2.14 | **Ch 15–21 – Architecture & Boundaries**    | Limites arquiteturais, Policy vs Detail         | **Decisão:** Definir o que é "Core" e o que é "Detalhe" em um app de Todo List.   |
| 2.20 | **Ch 22 – The Clean Architecture**          | As 4 camadas (Entities, Use Cases, etc)         | **Implementar:** Criar a estrutura de pastas completa para um Use Case simples.   |
| 2.21 | **Ch 23–29 – Presenters, Main, Test**       | Humble Objects, Main Component                  | **Adapter:** Criar um Presenter que formata dados para a View/API.                |
| 2.26 | **Ch 30–34 – Details (DB, Web, Frameworks)**| Frameworks como ferramentas, não o centro       | **Implementar:** Trocar a persistência (memória -> banco) sem tocar no Use Case.  |

---

## Ordem sugerida

1.  **Clean Code (1.1 a 1.15):** Foco em micro-design (funções, classes).
2.  **SOLID (2.6 a 2.10):** Princípios de design de classes.
3.  **Clean Architecture (2.20 em diante):** Macro-design (camadas, limites).

---

## Resumo para o agente

- **Sempre crie o "Problema" primeiro:** Gere o arquivo com código ruim.
- **Peça a solução:** Deixe o usuário tentar resolver.
- **Analisar e dar feedback:** Validar a solução do usuário antes de dar o gabarito.
- **Forneça o gabarito:** Mostre como ficaria aplicando o princípio estritamente.
- Use **PHP puro** e **Node/TS** sem frameworks pesados nas fases de aprendizado.
