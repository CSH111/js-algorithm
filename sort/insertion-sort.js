function insertionSort(arr) {
  const copiedArr = [...arr];
  for (let i = 1; i < copiedArr.length; i++) {
    const currVal = copiedArr[i];
    let j;
    for (j = i - 1; j > -1 && copiedArr[j] > currVal; j--) {
      copiedArr[j + 1] = copiedArr[j];
    }
    copiedArr[j + 1] = currVal;
  }
  return copiedArr;
}

function insertionSort2(arr) {
  // 가독성 좋은 버전 but memory낭비
  const copiedArr = [...arr];
  const swap = (idx1, idx2, arr) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = 1; i < copiedArr.length; i++) {
    for (let j = i; j > 0 && copiedArr[j] < copiedArr[j - 1]; j--) {
      swap(j, j - 1, copiedArr);
    }
  }
  return copiedArr;
}

export default insertionSort;
