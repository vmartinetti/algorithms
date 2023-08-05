const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let difference = target - current;
    // check to the right of current index for difference
    let differenceIndex = nums.indexOf(difference, i + 1);
    if (differenceIndex !== -1 && differenceIndex !== i) {
      return [i, differenceIndex];
    }
    // check to the left of current index for difference
    differenceIndex = nums.indexOf(difference, 0, i - 1);
    if (differenceIndex !== -1 && differenceIndex !== i) {
      return [i, differenceIndex];
    }
  }
};

const twoSum2 = (nums, target) => {
  const complementHash = {};
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const difference = target - current;
    if (difference in hash) {
      return [complementHash[difference], i];
    }
    complementHash[current] = i;
  }
};
module.exports = twoSum2;
