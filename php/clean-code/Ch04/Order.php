<?php

namespace CleanCode\Ch04;

class Order
{
    private const MIN_ORDER_VALUE_FOR_FREE_SHIPPING = 150.00;
    private const SHIPPING_PRICE = 15.00;
    private const DISCOUNT_COUPON = 0.9;

    private float $total;
    
    private float $totalWithoutDiscount;

    private float $shipping;

    private bool $free_shipping;

    public function __construct(public array $items, public string $coupon = '')
    {
        $this->total = 0;
        $this->shipping = 0;
        $this->free_shipping = false;

        $this->totalWithoutDiscount = $this->getTotalItems($items);

        $this->shipping = $this->calculateShipping($this->totalWithoutDiscount);

        $this->total = $this->applyDiscount($this->totalWithoutDiscount, $this->coupon) + $this->shipping;

    }

    public function getTotalItems(array $items): float
    {
        $total = 0;

        foreach ($items as $item) {
            $total += $item['price'] * $item['qty'];
        }

        return $total;
    }

    public function isEmpty(): bool
    {
        return count($this->items) === 0;
    }

    private function calculateShipping(float $total): float
    {
        $free_shipping = $total >= self::MIN_ORDER_VALUE_FOR_FREE_SHIPPING;
        return $free_shipping ? 0 : self::SHIPPING_PRICE;
    }

    private function applyDiscount(float $total, string $coupon): float
    {
        if (empty($coupon)) {
            return $total;
        }

        return $total * self::DISCOUNT_COUPON;
    }

    public function getTotal(): float
    {
        return $this->total;
    }

    public function getTotalWithoutDiscount(): float
    {
        return $this->totalWithoutDiscount;
    }
    
    public function getShipping(): float
    {
        return $this->shipping;
    }

    public function getFreeShipping(): bool
    {
        return $this->free_shipping;
    }
}