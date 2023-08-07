const isValid = require('./index');

test('Test 1', () => {
  expect(isValid('()')).toEqual(true);
});
test('Test 2', () => {
  expect(isValid('()[]{}')).toEqual(true);
});
test('Test 3', () => {
  expect(isValid('(]')).toEqual(false);
});
test('Test 4', () => {
  expect(isValid('[({(())}[()])]')).toEqual(true);
});

test('Test 5', () => {
  expect(isValid(')[({(())}[()])]')).toEqual(false);
});