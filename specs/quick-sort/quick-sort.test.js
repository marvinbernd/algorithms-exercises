/*

  Quick Sort!
  
  Name your function quickSort.
  
  Quick sort should grab a pivot from the end and then separate the list (not including the pivot)
  into two lists, smaller than the pivot and larger than the pivot. Call quickSort on both of those
  lists independently. Once those two lists come back sorted, concatenate the "left" (or smaller numbers)
  list, the pivot, and the "right" (or larger numbers) list and return that. The base case is when quickSort
  is called on a list with length less-than-or-equal-to 1. In the base case, just return the array given.

*/

function quickSort(nums) {
  // base case, array of length 1 or 0
  if (nums.length <= 1) return nums;

  // choose pivot
  const pivot = nums.pop();

  // seperate into left and right arrays
  let arrLeft = [];
  let arrRight = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) arrLeft.push(nums[i]);
    else arrRight.push(nums[i]);
  }

  // call quickSort on left and right arrays
  arrLeft = quickSort(arrLeft);
  arrRight = quickSort(arrRight);

  // return left.concat(pivot, right)
  return arrLeft.concat(pivot, arrRight);
}

// unit tests
// do not modify the below code
test.skip("quickSort", function () {
  const input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
  const answer = quickSort(input);

  expect(answer).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
