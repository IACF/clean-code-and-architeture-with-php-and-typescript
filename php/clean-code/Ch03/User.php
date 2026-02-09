<?php
declare(strict_types=1);

namespace CleanCode\Ch03;

use CleanCode\Ch03\ObjectValues\Email;
use CleanCode\Ch03\ObjectValues\Password;

class User
{
	public int $id;
	public string $username;
	public Email $email;
	public Password $password;

	public function __construct($username, $email, $password)
	{
		if (empty($username) || strlen($username) < 3) {
			throw new \Exception("Erro: Username inválido");
		}

		$this->id = rand(1, 1000);
		$this->username = $username;
		$this->email = new Email($email);
		$this->password = new Password($password);
	}

	public function getEmail(): string
	{
		return $this->email->__toString();
	}

	public function toArray()
	{
		return [
			'id' => $this->id,
			'username' => $this->username,
			'email' => $this->email->__toString()
		];
	}
}
