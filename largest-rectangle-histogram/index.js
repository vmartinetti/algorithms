
var largestRectangleArea = function(heights) {
  let maxArea = 0;
  for(let i = 0; i < heights.length; i++) {
    let currentHeight = heights[i];
    let currentWidth = 1;
    let ii = i+1;
    let iii = i-1;
    while(ii <= heights.length && heights[ii] >= currentHeight) {
      currentWidth ++;
      ii++;
    }
    while(iii >= 0 && heights[iii] >= currentHeight) {
      currentWidth ++;
      iii--;
    }
    let currentArea = currentHeight * currentWidth;
    if(currentArea > maxArea) {
      maxArea = currentArea;
    }
  }
  return maxArea;
};
// TODO: Understand this solution
var largestRectangleArea2 = function(heights) {
  let stack = [];
  let maxArea = 0;
  for(let i = 0; i <= heights.length; i++) {
    let height = (i === heights.length ? 0 : heights[i]);
    while(stack.length > 0 && heights[stack[stack.length - 1]] >= height) {
      let j = stack.pop();
      let width = (stack.length === 0 ? i : i - stack[stack.length - 1] - 1);
      maxArea = Math.max(maxArea, heights[j] * width);
    }
    stack.push(i);
  }
  return maxArea;
};
module.exports = largestRectangleArea;