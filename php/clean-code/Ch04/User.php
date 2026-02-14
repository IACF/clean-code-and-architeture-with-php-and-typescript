<?php

namespace CleanCode\Ch04;

use CleanCode\Ch03\ObjectValues\Email;

class User
{
    private string $name;
    private Email $email;

    public function __construct(string $name, string $email)
    {
        if (empty($name) || strlen($name) < 3) {
            throw new \Exception("Erro: Nome inválido");
        }

        $this->name = $name;
        $this->email = new Email($email);
    }

    public function isValid(): bool
    {
        return !empty($this->name) && !empty($this->email);
    }
}