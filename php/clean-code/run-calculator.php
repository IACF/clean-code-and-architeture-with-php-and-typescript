<?php
declare(strict_types=1);

require_once __DIR__ . '/../vendor/autoload.php';

use CleanCode\Calculator;

$calculator = new Calculator();

echo 'Calculator - exemplo de uso' . PHP_EOL;
echo '  2 + 3 = ' . $calculator->add(2, 3) . PHP_EOL;
echo '  5 - 3 = ' . $calculator->subtract(5, 3) . PHP_EOL;
