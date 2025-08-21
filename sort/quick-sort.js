export default function quickSort(arr, startIdx = 0, endIdx = arr.length - 1) {
  if (endIdx - startIdx < 1) {
    return arr;
  }

  const [swapIdx] = partition(arr, startIdx, endIdx);
  quickSort(arr, startIdx, swapIdx - 1);
  quickSort(arr, swapIdx + 1, endIdx);
  return arr;
}

function partition(arr, startIdx, endIdx) {
  const targetIdx = startIdx;
  let swapIdx = targetIdx;

  for (let i = startIdx; i <= endIdx; i++) {
    if (arr[i] >= arr[targetIdx]) {
      continue;
    }
    swapIdx++;
    swap(i, swapIdx, arr);
  }
  swap(swapIdx, targetIdx, arr);

  return [swapIdx, targetIdx, endIdx];
}

function swap(idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
