function selectionSort(oriArr) {
  const arr = [...oriArr];
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
    }
    [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]];
  }
  return arr;
}

// export default selectionSort;

function selectionSort2(oriArr) {
  const swap = (idx1, idx2, arr) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  const arr = [...oriArr];
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    swap(i, minIdx, arr);
  }

  return arr;
}
export default selectionSort2;
