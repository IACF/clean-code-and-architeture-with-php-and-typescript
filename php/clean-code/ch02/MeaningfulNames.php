<?php

namespace CleanCode\Ch02;

class MeaningfulNames
{
    // --- Exemplo 1: Intenção ---

    // Ruim: O que é $d?
    public function badExample1(int $d): int
    {
        return $d * 86400;
    }

    // Bom: O nome revela a unidade e o propósito
    public function goodExample1(int $daysSinceCreation): int
    {
        $secondsInADay = 86400;
        return $daysSinceCreation * $secondsInADay;
    }

    // --- Exemplo 2: Evitar Desinformação e Clareza ---

    // Ruim: getThem? Them quem? list1? x? 4?
    // Difícil de entender sem conhecer o contexto interno de $theList
    public function getThem(array $theList): array
    {
        $list1 = [];
        foreach ($theList as $x) {
            if ($x[0] === 4) {
                $list1[] = $x;
            }
        }
        return $list1;
    }

    // Bom: O contexto está explícito.
    // Estamos jogando "Campo Minado" (Minesweeper).
    // O valor 4 significa que a célula está marcada (FLAGGED).
    public function getFlaggedCells(array $gameBoard): array
    {
        $flaggedCells = [];
        $STATUS_FLAGGED = 4;

        foreach ($gameBoard as $cell) {
            if ($cell[0] === $STATUS_FLAGGED) {
                $flaggedCells[] = $cell;
            }
        }
        return $flaggedCells;
    }
}

// Pequeno teste de execução
$example = new MeaningfulNames();
$board = [[4, 'mina'], [0, 'vazio'], [4, 'mina']];

$ruim = $example->getThem($board);
$bom = $example->getFlaggedCells($board);

echo "Ruim (count): " . count($ruim) . "
";
echo "Bom (count): " . count($bom) . "
";
