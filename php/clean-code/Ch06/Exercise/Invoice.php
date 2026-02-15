<?php

namespace CleanCode\Ch06\Exercise;

class Invoice {
    public function __construct(
        private readonly string $number,
        private readonly float $amount,
        private readonly \DateTimeInterface $dueDate,
        private readonly Company $company
    ) {}

    public function getCompanyName(): string
    {
        return $this->company->getName();
    }

    public function getCompanyCity(): string
    {
        return $this->company->getAddressCity();
    }

    public function isFromState(string $stateName): bool
    {
        return $this->company->isFromState($stateName);
    }

    public function getInvoiceMailingAddress(): string
    {
        return "{$this->getCompanyName()}\n{$this->company->getFullLineAddress()}";
    }

    public function getInvoiceDescription(): string
    {
        return "Invoice #{$this->number} - {$this->getCompanyName()} ({$this->getCompanyCity()}) - \${$this->amount} due {$this->dueDate->format('Y-m-d')}";
    }
}