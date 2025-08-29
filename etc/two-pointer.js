function twoPointer(arr, targetSum) {
  // 정렬된 정수 배열과 목표값이 주어졌을 때, 배열의 두 원소를 더해서 목표값이 되는 두 원소의 인덱스를 반환하세요.
  // 두 원소의 인덱스를 담은 배열 [index1, index2] (index1 < index2)
  // 해가 정확히 하나 존재한다고 가정
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    const sum = arr[i] + arr[j];
    if (sum === targetSum) {
      break;
    }
    if (sum < targetSum) {
      i++;
    } else {
      j--;
    }
  }

  return [i, j];
}

export default twoPointer;

