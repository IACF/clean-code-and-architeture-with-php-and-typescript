<?php

namespace CleanCode\Ch03;

require __DIR__ . '/../../vendor/autoload.php';

use CleanCode\Ch03\Services\SendWelcomeEmailService;

class UserRegistration
{
    private $emailService;

    public function __construct()
    {
        $this->emailService = new SendWelcomeEmailService();
    }

    public function register(User $user)
    {
        $this->createUser($user);
        $this->emailService->send($user);

        return $this->formatResponse($user);
    }

    private function createUser(User $user)
    {
        // Simulando persistência
        file_put_contents('users.log', json_encode($user->toArray()) . "\n", FILE_APPEND);
    }

    private function formatResponse(User $user)
    {
        $html = "<div class='success'>";
        $html .= "<h1>Usuário criado com sucesso!</h1>";
        $html .= "<p>ID: " . $user->id . "</p>";
        $html .= "</div>";

        return $html;
    }
}

// Uso
try {
    $user = new User('usuario123', 'teste@example.com', 'minhasenha');
    $reg = new UserRegistration();
    echo $reg->register($user);
} catch (\Exception $e) {
    echo $e->getMessage();
}
