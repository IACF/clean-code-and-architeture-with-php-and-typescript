<?php

declare(strict_types=1);

/**
 * Ch 6 - CÓDIGO BOM (Clean Code)
 *
 * Lei de Demeter respeitada: cada tipo expõe apenas o que o chamador precisa.
 * Sem train wreck: Order e Customer encapsulam o "caminho" até os dados.
 */

namespace CleanCode\Ch06\ExampleGood;

class Address
{
    private string $street;
    private string $city;
    private string $zipCode;

    public function __construct(string $street, string $city, string $zipCode)
    {
        $this->street = $street;
        $this->city = $city;
        $this->zipCode = $zipCode;
    }

    public function getStreet(): string
    {
        return $this->street;
    }

    public function getCity(): string
    {
        return $this->city;
    }

    public function getZipCode(): string
    {
        return $this->zipCode;
    }

    public function getFullLine(): string
    {
        return "{$this->street}\n{$this->city} {$this->zipCode}";
    }

    public function isInCity(string $cityName): bool
    {
        return strtolower($this->city) === strtolower($cityName);
    }
}

class Customer
{
    private string $name;
    private Address $address;

    public function __construct(string $name, Address $address)
    {
        $this->name = $name;
        $this->address = $address;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getCity(): string
    {
        return $this->address->getCity();
    }

    public function getShippingLines(): string
    {
        return $this->name . "\n" . $this->address->getFullLine();
    }

    public function isFromCity(string $cityName): bool
    {
        return $this->address->isInCity($cityName);
    }
}

class Order
{
    private string $id;
    private Customer $customer;
    private float $total;

    public function __construct(string $id, Customer $customer, float $total)
    {
        $this->id = $id;
        $this->customer = $customer;
        $this->total = $total;
    }

    public function getId(): string
    {
        return $this->id;
    }

    public function getTotal(): float
    {
        return $this->total;
    }

    public function getCustomerCity(): string
    {
        return $this->customer->getCity();
    }

    public function getShippingLabel(): string
    {
        return $this->customer->getShippingLines();
    }

    public function isFromCity(string $cityName): bool
    {
        return $this->customer->isFromCity($cityName);
    }

    public function getSummary(): string
    {
        return sprintf(
            'Order #%s - %s (%s) - $%.2f',
            $this->id,
            $this->customer->getName(),
            $this->customer->getCity(),
            $this->total
        );
    }
}

// --- Uso: código que só fala com Order (BOM) ---
// $order->getShippingLabel();
// $order->isFromCity('São Paulo');
// $order->getSummary();
// Nenhum $order->customer->address visível.
