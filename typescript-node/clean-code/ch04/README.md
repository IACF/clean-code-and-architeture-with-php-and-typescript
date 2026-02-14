# Ch 4 – Comments (TypeScript)

## Objetivo

Aplicar os princípios do capítulo **Comments** (Clean Code): remover comentários óbvios e substituir por **nomes que revelam a intenção**.

## Desafio

O arquivo `order-processor.bad.ts` contém código que viola esses princípios:

- Comentários que apenas repetem o que o código faz
- Variáveis com nomes vagos (`o`, `t`, `i`, `u`, `fs`)
- JSDoc redundante

**Sua tarefa:**

1. Refatore o código em um novo arquivo (ex.: `order-processor.ts`) ou no mesmo arquivo.
2. Remova comentários óbvios.
3. Troque nomes por outros que revelem a intenção (ex.: `order`, `subtotal`, `hasFreeShipping`).
4. Mantenha o comportamento idêntico (mesmas entradas/saídas e regras).

Inspire-se na refatoração que você fez em PHP (pastas `Order`, `User`, `OrderProcessor`): pode usar classes, value objects (ex.: `Email` do ch03) e métodos com nomes autoexplicativos.

## Como testar

Crie um pequeno script ou teste que chame as funções e confira totais, frete e validação de usuário.
