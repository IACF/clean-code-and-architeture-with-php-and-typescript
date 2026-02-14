import { Email } from "../ch03/ObjectValues/Email";

export class User {
  public email: Email;

  constructor(public name: string, email: string) {
    if (!name || name.length < 3) {
      throw new Error("Nome inválido");
    }

    this.email = new Email(email);
  }

  public isValid(): boolean {
    if (this.name && this.email.value) {
      return true;
    }
    return false;
  }
}