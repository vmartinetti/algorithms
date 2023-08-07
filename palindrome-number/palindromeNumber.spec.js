const isPalindrome = require('./index');

test('Test 1', () => {
  expect(isPalindrome(121)).toEqual(true);
})
test('Test 2', () => {
  expect(isPalindrome(-121)).toEqual(false);
})
test('Test 3', () => {
  expect(isPalindrome(10)).toEqual(false);
})