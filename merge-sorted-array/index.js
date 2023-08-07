const mergeSortedArray = (nums1, m, nums2, n) => {
  nums1 = nums1.filter(el => el !== 0);
  nums2 = nums2.filter(el => el !== 0);
  nums1.push(...nums2);
  return nums1.sort((a, b) => a - b);
}
module.exports = mergeSortedArray;