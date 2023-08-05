const threeSum = function (nums) {
  let result = [];
  let j=0, k=0, l = 0;
  while (j < nums.length - 2) {
    k = j + 1;
    while (k < nums.length -1){
      l = k + 1;
      if (j === k || k === l || j === l) {
        if (k >= l) {
          l++;
        }
        k++;
      }
      while (l < nums.length) {
        if (j === k || k === l || j === l){
          if (l < nums.length - 1) {
            l++;
          }
        }
        if (nums[j] + nums[k] + nums[l] === 0) {
          // check if the result already exists
          const triplet = [nums[j], nums[k], nums[l]].sort((a, b) => a - b);
          const exists = result.find((item) => {
            return item[0] === triplet[0] && item[1] === triplet[1] && item[2] === triplet[2];
          });
          if (!exists){
            result.push(triplet);
          }

        }
        l++; 
      }
      k++;
    }
    j++;
  }
  console.log('result', result)
  return result;
}

module.exports = threeSum;