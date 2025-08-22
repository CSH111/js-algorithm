function merge(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  return result.concat(arr1.slice(i), arr2.slice(j));
}

export default function mergeSort(oriArr) {
  const arr = [...oriArr];

  if (arr.length > 1) {
    const midIdx = Math.floor((arr.length - 1) / 2);
    const first = arr.slice(0, midIdx + 1);
    const second = arr.slice(midIdx + 1, arr.length);

    const m1 = mergeSort(first);
    const m2 = mergeSort(second);

    return merge(m1, m2);
  }
  return arr;
}
