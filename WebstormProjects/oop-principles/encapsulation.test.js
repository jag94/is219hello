const Calculator = require('./encapsulation');

test('Calculator divide 2 by  2 to equal 1', () => {
    let Ctest = new Calculator();
    expect(Ctest.Divide(2, 2)).toBe(1);
    expect(Ctest.Result).toBe(1);
});
test('Calculator Add 2 by  2 to equal 4', () => {
    let Ctest = new Calculator();
    expect(Ctest.Add(2, 2)).toBe(4);
    expect(Ctest.Result).toBe(4);
});
test('Calculator Multiply 2 by  2 has a result equal to 4', () => {
    let Ctest = new Calculator();
    expect(Ctest.Multiply(2, 2)).toBe(4);
    expect(Ctest.Result).toBe(4);
});
test('Calculate subtract 6 and  2 to equal 4', () => {
    let Ctest = new Calculator();
    expect(Ctest.Subtract(6, 2)).toBe(4);
    expect(Ctest.Result).toBe(4);
});

test('Calculate root 4 to equal 2', () => {
    let Ctest = new Calculator();
    expect(Ctest.Root(4)).toBe(2);
    expect(Ctest.Result).toBe(2);
});

test('Calculate square 2 to equal 4', () => {
    let Ctest = new Calculator();
    expect(Ctest.Square(2)).toBe(4);
    expect(Ctest.Result).toBe(4);
});