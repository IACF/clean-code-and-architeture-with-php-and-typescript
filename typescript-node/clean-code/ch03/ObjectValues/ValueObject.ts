export abstract class ValueObject<T> {
	protected readonly props: T;

	constructor(props: T) {
		this.props = Object.freeze(props);
	}

	public get value(): T {
		return this.props;
	}

	public equals(valueObject: ValueObject<T>): boolean {
		if (valueObject === null || valueObject === undefined) {
			return false;
		}

		return JSON.stringify(this.value) === JSON.stringify(valueObject.value);
	}
}
