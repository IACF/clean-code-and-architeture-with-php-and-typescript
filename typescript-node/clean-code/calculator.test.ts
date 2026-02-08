import { describe, it, expect, beforeEach } from 'vitest';
import { Calculator } from './calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('add returns sum of two numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(-1, 1)).toBe(0);
  });

  it('subtract returns difference', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.subtract(1, 5)).toBe(-4);
  });
});
