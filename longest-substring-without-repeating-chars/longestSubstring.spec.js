const lenghtOfLongestSubstring = require('./index');

test('Test 1', () => {
  expect(lenghtOfLongestSubstring('abcabcbb')).toBe(3);
});
test('Test 2', () => {
  expect(lenghtOfLongestSubstring('bbbbb')).toBe(1);
});
test('Test 3', () => {
  expect(lenghtOfLongestSubstring('pwwkew')).toBe(3);
});