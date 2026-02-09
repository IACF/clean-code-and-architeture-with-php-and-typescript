
import { Email } from './ObjectValues/Email';
import { Password } from './ObjectValues/Password';
export class User {
	public createdAt: Date
	public id: number
	public email: Email
	public password: Password
	constructor(
		public username: string,
		email: string,
		password: string,
	) {
		if (!this.username || this.username.length < 3) {
			throw new Error('Username inválido');
		}

		this.id = Math.floor(Math.random() * 1000);
		this.createdAt = new Date();
		this.email = new Email(email);
		this.password = new Password(password);
	}

	public toArray() {
		return {
			id: this.id,
			username: this.username,
			email: this.email.value,
			password: this.password.value,
			createdAt: this.createdAt,
		};
	}

	public getEmail() {
		return this.email.value;
	}
}
