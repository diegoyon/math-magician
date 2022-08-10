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
  test('if there is no operation', ()=>{
    expect(calculate({next: '4'}, '2')).toEqual({next:'42', total: null})
  })
  test('if there is empty object', ()=>{
    expect(calculate({}, '9')).toEqual({next:'9', total: null})
  })

  test("if the button is '.'", ()=>{
    expect(calculate({next: '5.7'}, '.')).toEqual({next:'5.7'})
  })

  test("if the button is '.' and number is integer", ()=>{
    expect(calculate({next: '5'}, '.')).toEqual({next:'5.'})
  })
  test("if the button is '.' and with operation", ()=>{
    expect(calculate({operation: '+'}, '.')).toEqual({operation:'+', next:'0.'})
  })
  test("if the button is '.' and object has total", ()=>{
    expect(calculate({total: '5.8'}, '.')).toEqual({})
  })
  test("if the button is '.' and number has total", ()=>{
    expect(calculate({total: '4'}, '.')).toEqual({total:'4', next:'4.'})
  })
  test("if the button is '.' and number 0.", ()=>{
    expect(calculate({}, '.')).toEqual({next:'0.'})
  })

  test("if the button is '=' with objects", ()=>{
    expect(calculate({next: '5', total: '3', operation: '+'}, '=')).toEqual({total:'8', next:null, operation: null})
  })
  test("if the button is '=' with empty object ", ()=>{
    expect(calculate({}, '=')).toEqual({})
  })

  test("if the button is '+/-' with next object ", ()=>{
    expect(calculate({next: '2'}, '+/-')).toEqual({next:'-2'})
  })
  test("if the button is '+/-' with total object ", ()=>{
    expect(calculate({total: '2'}, '+/-')).toEqual({total:'-2'})
  })
  test("if the button is '+/-' with empty object ", ()=>{
    expect(calculate({}, '+/-')).toEqual({})
  })

  test("User pressed an operation after pressing '='", ()=>{
    expect(calculate({total: '6'}, '-')).toEqual({total:'6', operation:'-'})
  })
})