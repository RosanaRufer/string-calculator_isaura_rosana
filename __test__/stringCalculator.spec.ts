import { StringCalculator } from '../src/stringCalculator';

describe('Default test', () => {
  it('should work', () => {
    const main = new StringCalculator();
    expect(main).toBeDefined();
  });
});
