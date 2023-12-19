// Implement a binary search algorithm to find the index of a target element in a sorted array.
// Given a sorted array of integers, return the index of the given target element.
// If there are no duplicates, this could be solved with a simple for loop. However, the array is sorted, so we can use a binary search algorithm to find the target element more efficiently.
// Binary search is a divide and conquer algorithm. It works by dividing the array into smaller and smaller subarrays until the target element is found. If the array is empty, then the target is not present.

// The algorithm works as follows:
// 1. Find the middle element of the array.
// 2. If the middle element is the target, return its index.
// 3. If the target is greater than the middle element, then the target must reside in the right half of the array. Set the left pointer to the middle + 1.
// 4. If the target is less than the middle element, then the target must reside in the left half of the array. Set the right pointer to the middle - 1.
// 5. Repeat steps 1-4 until the left pointer is greater than the right pointer.
// 6. If the target is not found, return -1.
// Note: The array is sorted in ascending order. This means that the target element may be present more than once. If this is the case, return the index where the target first occurs in the array.
// Examples:
// For nums = [1, 3, 5, 7, 9] and target = 5, the output should be binarySearch(nums, target) = 2.

// 1. left = 0, right = 4, mid = 2, nums[mid] = 5
// 2. 5 = 5, so return 2
// For nums = [1, 3, 5, 7, 9] and target = 7, the output should be binarySearch(nums, target) = 3.
// 1. left = 0, right = 4, mid = 2, nums[mid] = 5
// 2. 7 > 5, so left = mid + 1 = 3
// 3. left = 3, right = 4, mid = 3, nums[mid] = 7
// 4. 7 = 7, so return 3
// For nums = [1, 3, 5, 7, 9] and target = 11, the output should be binarySearch(nums, target) = -1.
// 1. left = 0, right = 4, mid = 2, nums[mid] = 5
// 2. 11 > 5, so left = mid + 1 = 3
// 3. left = 3, right = 4, mid = 3, nums[mid] = 7
// 4. 11 > 7, so left = mid + 1 = 4
// 5. left = 4, right = 4, mid = 4, nums[mid] = 9
// 6. 11 > 9, so left = mid + 1 = 5
// 7. left > right, so return -1
// Hints
// Hint 1
function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (target === nums[mid]){
      return mid;
    }
    if (target > nums[mid]){
      left = mid +1;
    }
    if (target < nums[mid]){
      right = mid -1;
    }
  }
  return -1;
}

module.exports = binarySearch;