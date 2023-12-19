const binarySearch = require('./index');
test('Test 1', () => {
  expect(binarySearch([1, 3, 5, 7, 9], 5)).toEqual(2);
})
test('Test 2', () => {
  expect(binarySearch([1, 3, 5, 7, 9], 7)).toEqual(3);
})
test('Test 3', () => {
  expect(binarySearch([1, 3, 5, 7, 9], 11)).toEqual(-1);
})