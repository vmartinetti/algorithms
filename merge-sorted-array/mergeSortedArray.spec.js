const mergeSortedArray = require('./index');

test('Test 1', () => {
  expect(mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toEqual([1, 2, 2, 3, 5, 6]);
})
test('Test 2', () => {
  expect(mergeSortedArray([1], 1, [], 0)).toEqual([1]);
})
test('Test 3', () => {
  expect(mergeSortedArray([0], 0, [1], 1)).toEqual([1]);
})
test('Test 4', () => {
  expect(mergeSortedArray([1, 0], 1, [2], 1)).toEqual([1, 2]);
})
test('Test 5', () => {
  expect(mergeSortedArray([1,2,3,0,0,0],3,[2,5,6],3)).toEqual([1,2,2,3,5,6]);
})
