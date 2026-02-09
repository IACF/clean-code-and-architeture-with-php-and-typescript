import { ValueObject } from "./ValueObject";

export class Password extends ValueObject<string> {
	constructor (value: string) {
		if (!value || value.length < 6) {
			throw new Error("Erro: Senha muito curta");
		}
		super(value);
	}
}
