// God Function em TypeScript

import { User } from "./User";
import { SendWelcomeEmailService } from './Services/SendWelcomeEmailService';

export class UserRegistration {

	constructor(private emailService: SendWelcomeEmailService) {}
	public async register(user: User): Promise<string> {

		this.createUser(user);

		await this.emailService.send(user);

		return this.formatResponse(user);
	}

	private createUser(user: User) {
		console.log("Salvando no banco...", user.toArray());
	}

	private formatResponse(user: User) {
		return JSON.stringify({
			status: "success",
			message: "User created",
			userId: user.id
		});
	}
}

// Uso
const emailService = new SendWelcomeEmailService();
const reg = new UserRegistration(emailService);
const user = new User("dev_senior", "dev@example.com", "securePass123");
const result = await reg.register(user);
console.log(result);
