
var largestRectangleArea = function(heights) {
  let maxArea = 0;
  for(let i = 0; i < heights.length; i++) {
    let currentHeight = heights[i];
    let currentWidth = 1;
    for(let ii=0; ii < heights.length; ii++) {
      if(heights[ii] <= currentHeight) {
        currentWidth ++
      }
    }
    let currentArea = currentHeight * currentWidth;
    if(currentArea > maxArea) {
      maxArea = currentArea;
    }
  }
  return maxArea;
};