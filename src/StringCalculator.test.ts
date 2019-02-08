import {StringCalculator} from './StringCalculator'

describe('Empty string', () => {
    it('should return 0', () => {
        const stringCalculator = new StringCalculator()
        expect(stringCalculator.add('')).toBe(0)
    })
})

describe('With one number', () => {
    it('should return the same number', () => {
        const stringCalculator = new StringCalculator()
        expect(stringCalculator.add("2")).toBe(2)
    });
});
