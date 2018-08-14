import ComplexNumber from '../ComplexNumber';

describe('ComplexNumber', () => {
  it('should create complex numbers', () => {
    const complexNumber = new ComplexNumber({ re: 1, im: 2 });

    expect(complexNumber).toBeDefined();
    expect(complexNumber.re).toBe(1);
    expect(complexNumber.im).toBe(2);

    const defaultComplexNumber = new ComplexNumber();
    expect(defaultComplexNumber.re).toBe(0);
    expect(defaultComplexNumber.im).toBe(0);
  });

  it('should add complex numbers', () => {
    const complexNumber1 = new ComplexNumber({ re: 1, im: 2 });
    const complexNumber2 = new ComplexNumber({ re: 3, im: 8 });

    const complexNumber3 = complexNumber1.add(complexNumber2);
    const complexNumber4 = complexNumber2.add(complexNumber1);

    expect(complexNumber3.re).toBe(1 + 3);
    expect(complexNumber3.im).toBe(2 + 8);

    expect(complexNumber4.re).toBe(1 + 3);
    expect(complexNumber4.im).toBe(2 + 8);
  });

  it('should add complex and natural numbers', () => {
    const complexNumber = new ComplexNumber({ re: 1, im: 2 });
    const realNumber = new ComplexNumber({ re: 3 });

    const complexNumber3 = complexNumber.add(realNumber);
    const complexNumber4 = realNumber.add(complexNumber);

    expect(complexNumber3.re).toBe(1 + 3);
    expect(complexNumber3.im).toBe(2);

    expect(complexNumber4.re).toBe(1 + 3);
    expect(complexNumber4.im).toBe(2);
  });

  it('should subtract complex numbers', () => {
    const complexNumber1 = new ComplexNumber({ re: 1, im: 2 });
    const complexNumber2 = new ComplexNumber({ re: 3, im: 8 });

    const complexNumber3 = complexNumber1.subtract(complexNumber2);
    const complexNumber4 = complexNumber2.subtract(complexNumber1);

    expect(complexNumber3.re).toBe(1 - 3);
    expect(complexNumber3.im).toBe(2 - 8);

    expect(complexNumber4.re).toBe(3 - 1);
    expect(complexNumber4.im).toBe(8 - 2);
  });

  it('should subtract complex and natural numbers', () => {
    const complexNumber = new ComplexNumber({ re: 1, im: 2 });
    const realNumber = new ComplexNumber({ re: 3 });

    const complexNumber3 = complexNumber.subtract(realNumber);
    const complexNumber4 = realNumber.subtract(complexNumber);

    expect(complexNumber3.re).toBe(1 - 3);
    expect(complexNumber3.im).toBe(2);

    expect(complexNumber4.re).toBe(3 - 1);
    expect(complexNumber4.im).toBe(-2);
  });

  it('should multiply complex numbers', () => {
    const complexNumber1 = new ComplexNumber({ re: 3, im: 2 });
    const complexNumber2 = new ComplexNumber({ re: 1, im: 7 });

    const complexNumber3 = complexNumber1.multiply(complexNumber2);
    const complexNumber4 = complexNumber2.multiply(complexNumber1);

    expect(complexNumber3.re).toBe(-11);
    expect(complexNumber3.im).toBe(23);

    expect(complexNumber4.re).toBe(-11);
    expect(complexNumber4.im).toBe(23);
  });

  it('should multiply complex numbers by themselves', () => {
    const complexNumber = new ComplexNumber({ re: 1, im: 1 });

    const result = complexNumber.multiply(complexNumber);

    expect(result.re).toBe(0);
    expect(result.im).toBe(2);
  });

  it('should calculate i in power of two', () => {
    const complexNumber = new ComplexNumber({ re: 0, im: 1 });

    const result = complexNumber.multiply(complexNumber);

    expect(result.re).toBe(-1);
    expect(result.im).toBe(0);
  });

  it('should divide complex numbers', () => {
    const complexNumber1 = new ComplexNumber({ re: 2, im: 3 });
    const complexNumber2 = new ComplexNumber({ re: 4, im: -5 });

    const complexNumber3 = complexNumber1.divide(complexNumber2);

    expect(complexNumber3.re).toBe(-7 / 41);
    expect(complexNumber3.im).toBe(22 / 41);
  });
});
