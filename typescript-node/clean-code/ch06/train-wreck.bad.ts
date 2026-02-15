/**
 * Ch 6 - CÓDIGO RUIM (Bad Code)
 *
 * Violação da Lei de Demeter: "Train Wreck"
 * Quem chama precisa conhecer toda a estrutura: Order → Customer → Address.
 * Encadeamento de getters = alto acoplamento e fragilidade.
 */

interface Address {
  street: string;
  city: string;
  zipCode: string;
}

interface Customer {
  name: string;
  address: Address;
}

interface Order {
  id: string;
  customer: Customer;
  total: number;
}

// --- Uso: código que "percorre" a estrutura inteira (RUIM) ---

function printShippingLabel(order: Order): string {
  // Train wreck: order -> customer -> address -> campos
  const street = order.customer.address.street;
  const city = order.customer.address.city;
  const zip = order.customer.address.zipCode;
  const name = order.customer.name;
  return `${name}\n${street}\n${city} ${zip}`;
}

function isOrderFromCity(order: Order, cityName: string): boolean {
  // Mesmo problema: conhece a estrutura interna
  return order.customer.address.city.toLowerCase() === cityName.toLowerCase();
}

function getOrderSummary(order: Order): string {
  // Outro train wreck: mistura dados de vários níveis
  return `Order #${order.id} - ${order.customer.name} (${order.customer.address.city}) - $${order.total}`;
}

// --- Exemplo de uso (tudo exposto, qualquer um pode fazer .customer.address.xxx) ---

const order: Order = {
  id: 'ORD-001',
  customer: {
    name: 'João',
    address: {
      street: 'Rua das Flores, 123',
      city: 'São Paulo',
      zipCode: '01234-567',
    },
  },
  total: 199.9,
};

console.log(printShippingLabel(order));
console.log(isOrderFromCity(order, 'São Paulo'));
console.log(getOrderSummary(order));

// Problema: em outro arquivo, alguém pode escrever:
// order.customer.address.city = '';  // quebra invariantes
// ou order.customer.address  // acoplamento à estrutura interna
