# Ch 6 – Objects vs Data Structures / Lei de Demeter

## Conceito

### Objetos vs estruturas de dados
- **Estrutura de dados (DTO):** expõe dados (getters/setters) e não esconde implementação. Quem usa conhece a estrutura interna.
- **Objeto (com comportamento):** esconde dados e expõe **ações**. Quem usa não precisa saber como os dados estão organizados.

### Lei de Demeter
> “Não fale com estranhos.” Um método só deve chamar:
> - métodos do próprio objeto (`this`);
> - métodos dos parâmetros recebidos;
> - métodos de objetos criados dentro do método;
> - métodos de atributos do próprio objeto (com cuidado).

**Violação típica (Train Wreck):**
```ts
order.getCustomer().getAddress().getCity()
```
Quem chama precisa conhecer: Order → Customer → Address → City. Qualquer mudança interna quebra o chamador.

**Respeitando a Lei de Demeter:**
```ts
order.getCustomerCity()
```
O `Order` encapsula o “caminho” até a cidade; o chamador só pede o que precisa.

### Por que importa
- **Acoplamento:** train wreck acopla o código à estrutura interna (Customer, Address, etc.).
- **Manutenção:** mudar `Address` ou `Customer` obriga a mudar todos os lugares que fazem `.getCustomer().getAddress()...`.
- **Teste:** fica difícil mockar uma cadeia inteira de objetos.

### Resumo
- Evite encadear getters: `a.getB().getC().getD()`.
- Prefira métodos que devolvem o valor desejado: `a.getD()` (encapsulado em `A`).
- DTOs são aceitáveis quando você **realmente** só transporta dados; para regras e apresentação, use objetos com comportamento.

---

## Arquivos neste capítulo

| Arquivo | Descrição |
|--------|-----------|
| `train-wreck.bad.ts` | Exemplo de código ruim (train wreck: Order → Customer → Address) |
| `encapsulated.good.ts` | Exemplo de código bom (encapsulado, Lei de Demeter) |
| `exercise.invoice-to-refactor.ts` | **Exercício:** refatore este código (Invoice → Company → Address) aplicando a Lei de Demeter |
