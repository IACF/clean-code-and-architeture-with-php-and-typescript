import { Company } from "./Company";

export class Invoice {
  constructor(
    private readonly number: string,
    private readonly amount: number,
    private readonly dueDate: Date,
    private readonly company: Company
  ) {}

  getCompanyName(): string {
    return this.company.getName();
  }

  getCompanyCity(): string {
    return this.company.getCity();
  }

  isFromState(state: string): boolean {
    return this.company.isFromState(state);
  }

  getInvoiceMailingAddress(): string {
    return `${this.getCompanyName()}\n${this.company.getFullLineAddress()}`;
  }

  getInvoiceDescription(): string {
    const due = this.dueDate.toISOString().slice(0, 10);
    return `Invoice #${this.number} - ${this.getCompanyName()} (${this.getCompanyCity()}) - $${this.amount} due ${due}`;
  }
}