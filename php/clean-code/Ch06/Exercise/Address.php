<?php

namespace CleanCode\Ch06\Exercise;

class Address
{
    public function __construct(
        private readonly string $street,
        private readonly string $city,
        private readonly string $state,
        private readonly string $zipCode
    ) {}

    public function getStreet(): string
    {
        return $this->street;
    }

    public function getCity(): string
    {
        return $this->city;
    }

    public function getState(): string
    {
        return $this->state;
    }

    public function getZipCode(): string
    {
        return $this->zipCode;
    }

    public function getFullLine(): string
    {
        return "{$this->street}\n{$this->city}, {$this->state} {$this->zipCode}";
    }

    public function isInState(string $stateName): bool
    {
        return strtolower($this->state) === strtolower($stateName);
    }
}