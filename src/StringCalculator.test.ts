import {StringCalculator} from './StringCalculator'

describe('Empty string', () => {
    it('should return 0', () => {
        const stringCalculator = new StringCalculator()
        expect(stringCalculator.add('')).toBe(0)
    })
})
