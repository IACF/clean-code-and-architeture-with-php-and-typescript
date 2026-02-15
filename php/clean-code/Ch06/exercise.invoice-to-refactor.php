<?php

declare(strict_types=1);

namespace CleanCode\Ch06;

require_once __DIR__ . '/../../vendor/autoload.php';

use CleanCode\Ch06\Exercise\Address;
use CleanCode\Ch06\Exercise\Company;
use CleanCode\Ch06\Exercise\Invoice;



function formatInvoiceMailingAddress(Invoice $invoice): string
{
    return $invoice->getInvoiceMailingAddress();
}

function isInvoiceFromState(Invoice $invoice, string $state): bool
{
    return $invoice->isFromState($state);
}

function getInvoiceDescription(Invoice $invoice): string
{
    return $invoice->getInvoiceDescription();
}

$address = new Address('Av. Paulista, 1000', 'São Paulo', 'SP', '01310-100');
$company = new Company('Acme Ltda', '12.345.678/0001-90', $address);
$invoice = new Invoice('INV-2024-001', 5000.00, new \DateTime('+30 days'), $company);

echo formatInvoiceMailingAddress($invoice);
echo isInvoiceFromState($invoice, 'SP') ? ' - From SP' : '';
echo getInvoiceDescription($invoice);
