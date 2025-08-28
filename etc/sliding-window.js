function slidingWindow(arr, length) {
  // arr 의 숫자중 length 길이의 연속된 길이의 최대합
  let maxSum = 0;

  for (let i = 0; i < length; i++) {
    maxSum += arr[i];
  }
  //  1 2 3 4 5 6
  // 6 - 3 = 3

  for (let i = 1; i <= arr.length - length; i++) {
    const tempSum = maxSum - arr[i - 1] + arr[i + length - 1];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

export default slidingWindow;
