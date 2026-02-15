import { Address } from "./Address";

export class Company {
  constructor(
    private readonly name: string,
    private readonly taxId: string,
    private readonly address: Address
  ) {}

  getName(): string {
    return this.name;
  }

  getCity(): string {
    return this.address.getCity();
  }

  getState(): string {
    return this.address.getState();
  }

  isFromState(state: string): boolean {
    return this.address.isInState(state);
  }

  getFullLineAddress(): string {
    return this.address.getFullLine();
  }
}