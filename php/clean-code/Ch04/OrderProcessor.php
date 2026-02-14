<?php

use CleanCode\Ch04\Order;
use CleanCode\Ch04\User;

class OrderProcessor
{
    public function process(array $orderData): Order
    {
        $order = new Order($orderData['items'], $orderData['coupon']);

        if ($order->isEmpty()) {
            throw new \Exception("Erro: Pedido vazio");
        }

        return $order;
    }

    public function canCheckout(array $userData): bool
    {
        $user = new User($userData['name'], $userData['email']);

        return $user->isValid();
    }
}
