import { calculator} from "../code/calculator";

test('Calculator', () => {
    const calc = calculator();

    expect(calc.add(2,3)).toBe(5);
    expect(calc.subract(3,2)).toBe(1);
    expect(calc.divide(12,4)).toBe(3);
    expect(calc.multiply(4,3)).toBe(12);
});