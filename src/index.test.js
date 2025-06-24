import { capitalize, reverseString, calculator, caesarCipher } from "./index.js";
describe('capitalize function', () => {
    test('returns Ethan given ethan', () => {
        const actual = capitalize("ethan");
        const expected = "Ethan";
        expect(actual).toBe(expected);
    });
    test('returns Marissa given mAriSSa', () => {
        const actual = capitalize("mAriSSa");
        const expected = "Marissa";
        expect(actual).toBe(expected);
    });
    test('returns undefined given non-string', () => {
        const actual = capitalize(123);
        const expected = undefined;
        expect(actual).toBe(expected);
    });
});
describe('reverseString function', () => {
    test('returns nahtE given Ethan', () => {
        const actual = reverseString('Ethan');
        const expected = 'nahtE';
        expect(actual).toBe(expected);
    });
    test('returns aSSirAm given mAriSSa', () => {
        const actual = reverseString('mAriSSa');
        const expected = 'aSSirAm';
        expect(actual).toBe(expected);
    });
    test('returns undefined given non-string', () => {
        const actual = reverseString(123);
        const expected = undefined;
        expect(actual).toBe(expected);
    });
});
describe('calculator object', () => {
    test('adds 1 and 2', () => {
        const actual = calculator.add(1,2);
        const expected = 3;
        expect(actual).toBe(expected);
    });
    test('subtracts 3 from 5', () => {
        const actual = calculator.subtract(5,3);
        const expected = 2;
        expect(actual).toBe(expected);
    });
    test('divides 8 by 2', () => {
        const actual = calculator.divide(8,2);
        const expected = 4;
        expect(actual).toBe(expected);
    });
    test('multiplies 5 by 3', () => {
        const actual = calculator.multiply(5,3);
        const expected = 15;
        expect(actual).toBe(expected);
    })
});
describe('caesarCipher function', () => {
    test('returns fubio given (ethan,1)', () => {
        const actual = caesarCipher('ethan', 1);
        const expected = 'fuibo';
        expect(actual).toBe(expected);
    });
    test('returns pdulvvd given (marissa,3)', () => {
        const actual = caesarCipher('marissa', 3);
        const expected = 'pdulvvd';
        expect(actual).toBe(expected);
    });
    test('wrapping: returns abc given (xyz,3)', () => {
        const actual = caesarCipher('xyz', 3);
        const expected = 'abc';
        expect(actual).toBe(expected);
    });
    test('save case: returns fuIbO given (etHaN, 1)', () => {
        const actual = caesarCipher('etHaN', 1);
        const expected = 'fuIbO';
        expect(actual).toBe(expected);
    });
    test('upper wrapping: returns ABC given (XYZ, 3)', () => {
        const actual = caesarCipher('XYZ', 3);
        const expected = 'ABC';
        expect(actual).toBe(expected);
    });
    test('non-alphabet: returns Khoor, Zruog! given (Hello, World!, 3)', () => {
        const actual = caesarCipher('Hello, World!', 3);
        const expected = 'Khoor, Zruog!';
        expect(actual).toBe(expected);
    });
})