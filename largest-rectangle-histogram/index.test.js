const { test } = require('node:test');
const largestRectangleArea = require('./index');
const edgeValues = require('./edgeValues');
test('Test 1', () => {
  expect(largestRectangleArea([2,1,5,6,2,3])).toEqual(10);
});
test('Test 2', () => {
  expect(largestRectangleArea([2,4])).toEqual(4);
});
test('Test 3', () => {
  expect(largestRectangleArea([2,1,2])).toEqual(3);
});
// test('Test 4', () => {
//   expect(largestRectangleArea(edgeValues[0])).toEqual(4);
// });