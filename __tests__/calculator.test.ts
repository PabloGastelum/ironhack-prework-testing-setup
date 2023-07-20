import { add, subtract, division, multiplication, exponentiation } from "../calculator";

test("adds two numbers correctly", () => {
    expect(add(5, 9)).toBe(14);
});

test("subtracts two numbers correctly", () => {
    expect(subtract(8, 4)).toBe(4);
});

test("divide between two numbers correctly", () => {
    expect(division(2, 5)).toBe(0.4);
    expect(division(130, 16)).toBe(8.125);
});

test("dividing a number by 0", () => {
    expect(division(4, 0)).toBe(0);
});

test("multiplication between two numbers correctly", () => {
    expect(multiplication(0.25, 6)).toBe(1.5);
});

test("calculates the exponential of a number to the suggested power", () => {
    expect(exponentiation(2, 3)).toBe(8);
});