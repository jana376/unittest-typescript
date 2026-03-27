export function add(summandA: number, summandB: number): number {
  return summandA + summandB;
}

export function subtract(minuend: number, subtrahend: number): number {
  return minuend - subtrahend;
}

export function multiplication(factorA: number, factorB: number): number {
  return factorA * factorB;
}

export function division(divisor: number, divident: number): number {
  return divisor / divident;
}

export function division(divident: number, divisor: number): number {
  if (divisor === 0) {
    throw new Error("Division by zero is not allowed");
  }

  return divident / divisor;
}


