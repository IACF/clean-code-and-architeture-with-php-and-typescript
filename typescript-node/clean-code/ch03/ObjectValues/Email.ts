import { ValueObject } from "./ValueObject";

export class Email extends ValueObject<string> {
	constructor (value: string) {
		if (!value || !value.includes('@')) {
			throw new Error("Erro: Email inválido");
		}
		super(value);
	}
}
