import { User } from "../User";

export class SendWelcomeEmailService {
	async send(user: User): Promise<void> {
		console.log(`Enviando email para ${user.getEmail()}: Bem-vindo ${user.username}!`);
	}
}
