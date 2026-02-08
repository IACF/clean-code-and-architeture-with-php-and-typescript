// --- Exemplo 1: Nomes que revelam intenção ---

// Ruim
const d: number = 10; // dias?
function calc(n: number): number {
    return n * 86400;
}

// Bom
const daysSinceCreation: number = 10;
const SECONDS_IN_A_DAY = 86400;

function convertDaysToSeconds(days: number): number {
    return days * SECONDS_IN_A_DAY;
}

// --- Exemplo 2: Classes e Objetos ---

// Ruim: Nomes genéricos
class Dta {
    p: string;
    d: Date;
}

// Bom: Entidade do domínio
class CustomerAccount {
    private name: string;
    private creationDate: Date;

    constructor(name: string, creationDate: Date) {
        this.name = name;
        this.creationDate = creationDate;
    }

    getName(): string {
        return this.name;
    }
}

// --- Exemplo 3: Booleanos ---

// Ruim
const flag = true;
if (flag) { /* ... */ }

// Bom
const isUserActive = true;
if (isUserActive) { /* ... */ }

// Execução para teste
console.log(`Ruim: ${calc(d)}`);
console.log(`Bom: ${convertDaysToSeconds(daysSinceCreation)}`);
