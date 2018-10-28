import { email, number, maxValue } from './validationRules';

describe('Validation rules', () => {
  it('Email', () => {
    expect(email('test@')).toBeDefined();
    expect(email('test@p')).toBeDefined();
    expect(email('@p.com')).toBeDefined();
    expect(email('adam.kowalski.pl')).toBeDefined();

    expect(email('test@test.com')).toBeUndefined();
    expect(email('john.smith@chago.north')).toBeUndefined();
    expect(email('example@p.com')).toBeUndefined();
  });

  it('Number', () => {
    expect(number('string')).toBeDefined();
    expect(number('23r')).toBeDefined();

    expect(number('14')).toBeUndefined();
    expect(number(56)).toBeUndefined();
  });

  it('Max value', () => {
    const max56 = maxValue(56);
    expect(max56(100)).toBeDefined();
    expect(max56(57)).toBeDefined();
    expect(max56('60')).toBeDefined();

    expect(max56(56)).toBeUndefined();
    expect(max56(40)).toBeUndefined();
    expect(max56('12')).toBeUndefined();
  });
});

