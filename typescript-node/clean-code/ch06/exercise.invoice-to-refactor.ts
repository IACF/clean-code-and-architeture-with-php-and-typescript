/**
 * Ch 6 - EXERCÍCIO PARA REFATORAR
 *
 * Este código viola a Lei de Demeter (train wreck).
 * Sua tarefa: refatorar para que Invoice, Company e Address encapsulem
 * o acesso aos dados e exponham apenas métodos que o chamador precisa.
 *
 * Não deixe o chamador fazer: invoice.getCompany().getAddress().getCity()
 * Faça: invoice.getCompanyCity() (ou equivalente encapsulado).
 *
 * Use como referência: train-wreck.bad.ts (ruim) e encapsulated.good.ts (bom).
 */

import { Address } from "./Exercise/Address";
import { Company } from "./Exercise/Company";
import { Invoice } from "./Exercise/Invoice";

// interface Address {
//   street: string;
//   city: string;
//   state: string;
//   zipCode: string;
// }

// interface Company {
//   name: string;
//   taxId: string;
//   address: Address;
// }

// interface Invoice {
//   number: string;
//   amount: number;
//   dueDate: Date;
//   company: Company;
// }

// --- Funções que você deve refatorar (eliminar o train wreck) ---

function formatInvoiceMailingAddress(invoice: Invoice): string {
  return invoice.getInvoiceMailingAddress();
}

function isInvoiceFromState(invoice: Invoice, state: string): boolean {
  return invoice.isFromState(state);
}

function getInvoiceDescription(invoice: Invoice): string {
  return invoice.getInvoiceDescription();
}

// --- Exemplo de uso (após refatorar, o chamador não deve acessar .company.address) ---

const address = new Address('Av. Paulista, 1000', 'São Paulo', 'SP', '01310-100');
const company = new Company('Acme Ltda', '12.345.678/0001-90', address);

const invoice = new Invoice('INV-2024-001', 5000, new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), company);

console.log(formatInvoiceMailingAddress(invoice));
console.log(isInvoiceFromState(invoice, 'SP'));
console.log(getInvoiceDescription(invoice));
