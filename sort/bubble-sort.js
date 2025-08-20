function bubbleSort(arr) {
  const arrCopied = [...arr];
  const swap = (idx1, idx2, arr) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (let i = 0; i < arrCopied.length - 1; i++) {
    for (let j = 0; j < arrCopied.length - 1 - i; j++) {
      if (arrCopied[j] > arrCopied[j + 1]) {
        swap(j, j + 1, arrCopied);
      }
    }
  }
  return arrCopied;
}

export default bubbleSort;
