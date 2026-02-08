<?php

declare(strict_types=1);

namespace CleanCode\Tests;

use CleanCode\Calculator;
use PHPUnit\Framework\TestCase;

final class CalculatorTest extends TestCase
{
    private Calculator $calculator;

    protected function setUp(): void
    {
        $this->calculator = new Calculator();
    }

    public function testAddReturnsSumOfTwoIntegers(): void
    {
        self::assertSame(5, $this->calculator->add(2, 3));
        self::assertSame(0, $this->calculator->add(-1, 1));
    }

    public function testSubtractReturnsDifference(): void
    {
        self::assertSame(2, $this->calculator->subtract(5, 3));
        self::assertSame(-4, $this->calculator->subtract(1, 5));
    }
}
