<?php

namespace CleanCode\Ch03\ObjectValues;

class Password
{
	public function __construct(public string $value)
	{
		if (empty($value) || strlen($value) < 6 ) {
			throw new \InvalidArgumentException('Invalid password');
		}
	}
}
