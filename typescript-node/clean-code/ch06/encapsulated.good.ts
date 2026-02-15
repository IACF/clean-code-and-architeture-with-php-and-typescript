/**
 * Ch 6 - CÓDIGO BOM (Clean Code)
 *
 * Lei de Demeter respeitada: cada tipo expõe apenas o que o chamador precisa.
 * Sem train wreck: Order e Customer encapsulam o "caminho" até os dados.
 */

// --- Value Object: dados imutáveis, sem expor navegação interna para fora ---

class Address {
  constructor(
    private readonly street: string,
    private readonly city: string,
    private readonly zipCode: string
  ) {}

  getStreet(): string {
    return this.street;
  }

  getCity(): string {
    return this.city;
  }

  getZipCode(): string {
    return this.zipCode;
  }

  /** Um único método que devolve o que o mundo externo precisa (formatação encapsulada). */
  getFullLine(): string {
    return `${this.street}\n${this.city} ${this.zipCode}`;
  }

  isInCity(cityName: string): boolean {
    return this.city.toLowerCase() === cityName.toLowerCase();
  }
}

// --- Customer encapsula Address; quem usa Customer não precisa saber "address.street" ---

class Customer {
  constructor(
    private readonly name: string,
    private readonly address: Address
  ) {}

  getName(): string {
    return this.name;
  }

  /** Encapsula: o chamador não faz customer.getAddress().getCity() */
  getCity(): string {
    return this.address.getCity();
  }

  /** Encapsula: "me dê a linha de endereço" em vez de navegar em address. */
  getShippingLines(): string {
    return `${this.name}\n${this.address.getFullLine()}`;
  }

  isFromCity(cityName: string): boolean {
    return this.address.isInCity(cityName);
  }
}

// --- Order encapsula Customer; quem usa Order não chama .customer.address ---

class Order {
  constructor(
    private readonly id: string,
    private readonly customer: Customer,
    private readonly total: number
  ) {}

  getId(): string {
    return this.id;
  }

  getTotal(): number {
    return this.total;
  }

  /** Um único ponto de entrada: "qual a cidade do pedido?" Sem train wreck. */
  getCustomerCity(): string {
    return this.customer.getCity();
  }

  /** Etiqueta de envio: Order devolve a string pronta; não expõe customer nem address. */
  getShippingLabel(): string {
    return this.customer.getShippingLines();
  }

  isFromCity(cityName: string): boolean {
    return this.customer.isFromCity(cityName);
  }

  getSummary(): string {
    return `Order #${this.id} - ${this.customer.getName()} (${this.customer.getCity()}) - $${this.total}`;
  }
}

// --- Uso: código que só fala com Order (BOM) ---

function printShippingLabel(order: Order): string {
  return order.getShippingLabel();
}

function isOrderFromCity(order: Order, cityName: string): boolean {
  return order.isFromCity(cityName);
}

function getOrderSummary(order: Order): string {
  return order.getSummary();
}

// --- Exemplo de uso: nenhum .customer ou .address visível ---

const address = new Address('Rua das Flores, 123', 'São Paulo', '01234-567');
const customer = new Customer('João', address);
const order = new Order('ORD-001', customer, 199.9);

console.log(printShippingLabel(order));
console.log(isOrderFromCity(order, 'São Paulo'));
console.log(getOrderSummary(order));

// Quem usa não pode fazer: order.customer.address.city (customer é privado)
// Só usa: order.getCustomerCity(), order.getShippingLabel(), etc.
// Mudanças em Customer ou Address não quebram os chamadores.
