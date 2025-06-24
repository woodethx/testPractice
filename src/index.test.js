import { capitalize, reverseString } from "./index.js";
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
