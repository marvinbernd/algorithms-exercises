/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  // best case, return if length 1 or 0
  if (nums.length < 2) return nums;

  // break intwo two smaller arrays
  const halfLength = Math.floor(nums.length / 2);
  const arrLeft = nums.slice(0, halfLength);
  const arrRight = nums.slice(halfLength);

  // call mergeSort on left and right
  const sortedLeft = mergeSort(arrLeft);
  const sortedRight = mergeSort(arrRight);

  // return the merge of left and right
  return merge(sortedLeft, sortedRight);
};

const merge = (arrLeft, arrRight) => {
  let results = [];

  while (arrLeft.length && arrRight.length) {
    if (arrLeft[0] <= arrRight[0]) {
      results.push(arrLeft.shift());
    } else {
      results.push(arrRight.shift());
    }
  }

  return results.concat(arrLeft, arrRight);
};

// unit tests
// do not modify the below code
test.skip("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
