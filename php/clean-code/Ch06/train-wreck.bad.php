<?php

declare(strict_types=1);

/**
 * Ch 6 - CÓDIGO RUIM (Bad Code)
 *
 * Violação da Lei de Demeter: "Train Wreck"
 * Quem chama precisa conhecer toda a estrutura: Order → Customer → Address.
 * Encadeamento de getters = alto acoplamento e fragilidade.
 */

namespace CleanCode\Ch06\ExampleBad;

class Address
{
    public string $street;
    public string $city;
    public string $zipCode;

    public function __construct(string $street, string $city, string $zipCode)
    {
        $this->street = $street;
        $this->city = $city;
        $this->zipCode = $zipCode;
    }
}

class Customer
{
    public string $name;
    public Address $address;

    public function __construct(string $name, Address $address)
    {
        $this->name = $name;
        $this->address = $address;
    }
}

class Order
{
    public string $id;
    public Customer $customer;
    public float $total;

    public function __construct(string $id, Customer $customer, float $total)
    {
        $this->id = $id;
        $this->customer = $customer;
        $this->total = $total;
    }
}

// --- Uso: código que "percorre" a estrutura inteira (RUIM) ---

function printShippingLabel(Order $order): string
{
    $street = $order->customer->address->street;
    $city = $order->customer->address->city;
    $zip = $order->customer->address->zipCode;
    $name = $order->customer->name;
    return "{$name}\n{$street}\n{$city} {$zip}";
}

function isOrderFromCity(Order $order, string $cityName): bool
{
    return strtolower($order->customer->address->city) === strtolower($cityName);
}

function getOrderSummary(Order $order): string
{
    return sprintf(
        'Order #%s - %s (%s) - $%.2f',
        $order->id,
        $order->customer->name,
        $order->customer->address->city,
        $order->total
    );
}

// Exemplo de uso (tudo exposto; qualquer um pode fazer $order->customer->address->city = '')
// $address = new Address('Rua das Flores, 123', 'São Paulo', '01234-567');
// $customer = new Customer('João', $address);
// $order = new Order('ORD-001', $customer, 199.9);
