<?php

namespace CleanCode\Ch03\Services;

use CleanCode\Ch03\User;

class SendWelcomeEmailService
{
    public function send(User $user)
    {
        $subject = "Bem-vindo {$user->username}";
        $message = "Olá, obrigado por se cadastrar. Seu ID é {$user->id}";
        echo "Enviando email para {$user->getEmail()}...\n";
    }
}
