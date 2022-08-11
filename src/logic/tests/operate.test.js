import operate from '../operate';

describe('operation tests', () => {
  test('sum', () => {
    const num = operate(1, 2, '+');
    expect(num).toBe('3');
  });
  test('substraction', () => {
    const num = operate(4, 2, '-');
    expect(num).toBe('2');
  });
  test('multiplication', () => {
    const num = operate(3, 4, 'x');
    expect(num).toBe('12');
  });
  test('division', () => {
    const num = operate(16, 2, '÷');
    expect(num).toBe('8');
  });
  test('modulo', () => {
    const num = operate(15, 4, '%');
    expect(num).toBe('3');
  });
  test('division by 0', () => {
    const num = operate(9, 0, '÷');
    expect(num).toBe("Can't divide by 0.");
  });
  test('modulo by 0', () => {
    const num = operate(15, 0, '%');
    expect(num).toBe("Can't find modulo as can't divide by 0.");
  });
});
