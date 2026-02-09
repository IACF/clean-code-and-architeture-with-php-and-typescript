<?php

namespace CleanCode\Ch03\ObjectValues;

class Email
{
	public function __construct(public string $value)
	{
		if (empty($value) || !filter_var($value, FILTER_VALIDATE_EMAIL)) {
			throw new \InvalidArgumentException('Invalid email');
		}
	}

	public function __toString(): string
	{
		return $this->value;
	}
}
