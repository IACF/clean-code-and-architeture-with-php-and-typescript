export class Address {
  constructor(
    private readonly street: string,
    private readonly city: string,
    private readonly state: string,
    private readonly zipCode: string
  ) {}

  getFullLine(): string {
    return `${this.street}\n${this.city}, ${this.state} ${this.zipCode}`;
  }

  getCity(): string {
    return this.city;
  }

  getState(): string {
    return this.state;
  }

  isInState(state: string): boolean {
    return this.state.toUpperCase() === state.toUpperCase();
  }
}