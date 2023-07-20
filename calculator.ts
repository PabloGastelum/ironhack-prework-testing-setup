export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}

export function multiplication(a: number, b: number): number {
    return a * b
}

export function division(a: number, b: number): number {
    return b === 0 ? 0 : a / b
}

export function exponentiation(base: number, exponent: number): number {
    if (exponent === 0) return 1;

    let result = 1;
    let absExponent = Math.abs(exponent);

    for (let i = 0; i < absExponent; i++) {
        result *= base;
    }

    return exponent < 0 ? 1 / result : result;
}