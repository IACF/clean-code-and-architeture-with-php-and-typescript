<?php

namespace CleanCode\Ch06\Exercise;

class Company {
    public function __construct(
        private readonly string $name,
        private readonly string $taxId,
        private readonly Address $address
    ) {}

    public function getName(): string
    {
        return $this->name;
    }
    
    public function getTaxId(): string
    {
        return $this->taxId;
    }

    public function getFullLineAddress(): string
    {
        return $this->address->getFullLine();
    }

    public function isFromState(string $stateName): bool
    {
        return $this->address->isInState($stateName);
    }

    public function getAddressCity(): string
    {
        return $this->address->getCity();
    }
}