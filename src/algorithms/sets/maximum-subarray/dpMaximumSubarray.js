/**
 * Dynamic Programming solution.
 * Complexity: O(n)
 *
 * @param {Number[]} inputArray
 * @return {Number[]}
 */
export default function dpMaximumSubarray(inputArray) {
  // We iterate through the inputArray once, using a greedy approach
  // to keep track of the maximum sum we've seen so far and the current sum
  //
  // currentSum gets reset to 0 everytime it drops below 0
  //
  // maxSum is set to -Infinity so that if all numbers
  // are negative, the highest negative number will constitute
  // the maximum subarray
  let maxSum = -Infinity;
  let currentSum = 0;

  // We need to keep track of the starting and ending indices that
  // contributed to our maxSum so that we can return the actual subarray
  let maxStartIndex = 0;
  let maxEndIndex = inputArray.length;
  let currentStartIndex = 0;

  inputArray.forEach((num, currentIndex) => {
    currentSum += num;

    // Update maxSum and the corresponding indices
    // if we have found a new max
    if (maxSum < currentSum) {
      maxSum = currentSum;
      maxStartIndex = currentStartIndex;
      maxEndIndex = currentIndex + 1;
    }

    // Reset currentSum and currentStartIndex
    // if currentSum drops below 0
    if (currentSum < 0) {
      currentSum = 0;
      currentStartIndex = currentIndex + 1;
    }
  });

  return inputArray.slice(maxStartIndex, maxEndIndex);
}
