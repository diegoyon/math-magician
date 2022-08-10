import calculate from '../calculate.js';

describe('calculate tests',() => {
  test('AC button', () => {
    const expectedObj = {
      total: null,
      next: null,
      operation: null,
    };
    const outputObj = calculate({},'AC')
    expect(outputObj).toEqual(expectedObj);
  })
  test('if button is 0 and next is 0', () => {
    expect(calculate({ next: '0'}, '0')).toEqual({});
  })

  test('if there is an operation', () => {
    expect(calculate({ next: '5', operation: '+'}, '3')).toEqual({ next: '53', operation: '+'});
  })

  test('if there is an operation an next = 0', () => {
    expect(calculate({ next: '0', operation: '+'}, '3')).toEqual({ next: '3', operation: '+'});
  })
})