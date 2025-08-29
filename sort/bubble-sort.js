function bubbleSort1(arr) {
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

// export default bubbleSort1;

// [1,2,3,4]
function bubbleSort2(arrOri) {
  const arr = [...arrOri];
  const swap = (idx1, idx2, arr) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1, arr);
      }
    }
  }
  return arr;
}

export default bubbleSort2;
