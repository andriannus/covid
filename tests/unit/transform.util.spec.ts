import { formatDate, numberSeparator } from '@/app/shared/utils/transform';

describe('transform.util.ts', () => {
  describe('formatDate', () => {
    it('should return formatted date when value is valid', () => {
      const dateStub = new Date();
      const expectedResult = '2021-01-09';

      expect(formatDate(dateStub)).toBe(expectedResult);
    });

    it('should return `-` WHEN value is INVALID', () => {
      const dateStub = new Date('test');
      const expectedResult = '-';

      expect(formatDate(dateStub)).toBe(expectedResult);
    });
  });

  describe('numberSeparator', () => {
    it('should return `5.000` when amount is 5000', () => {
      const amountStub = 5000;
      const expectedResult = '5.000';

      expect(numberSeparator(amountStub)).toBe(expectedResult);
    });

    it('should return `100` when amount is 100', () => {
      const amountStub = 100;
      const expectedResult = '100';

      expect(numberSeparator(amountStub)).toBe(expectedResult);
    });

    it('should return `0` WHEN amount is INVALID', () => {
      const amountStub = 'test';
      const expectedResult = '0';

      expect(numberSeparator(amountStub)).toBe(expectedResult);
    });
  });
});
