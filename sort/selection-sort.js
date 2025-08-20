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

export default selectionSort;
