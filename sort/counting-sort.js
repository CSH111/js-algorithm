// 계수정렬
function countingSort(oriArr) {
  if (!oriArr.length) {
    return [];
  }
  const arr = [...oriArr];
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  // [4, 3, 2, 3, 4]
  const countArr = new Array(max - min + 1).fill(0);
  arr.forEach((n) => {
    countArr[n - min] += 1;
  });
  // [1, 2, 2]
  const indexArr = [];
  // [1, 3, 5]

  countArr.forEach((c, idx) => {
    // 누적합을 이용해 인덱스 생성
    indexArr.push(c + (indexArr[idx - 1] || 0));
  });
  const sorted = new Array(arr.length);

  for (let i = arr.length - 1; i > -1; i--) {
    const countArrIdx = arr[i] - min;
    sorted[indexArr[countArrIdx] - 1] = arr[i];
    indexArr[countArrIdx] -= 1;
  }
  return sorted;
}

function countingSort2(oriArr) {
  // 안전성 미보장(같은 값들의 원래순서 유지x)
  if (!oriArr.length) {
    return [];
  }
  const arr = [...oriArr];
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  // [4, 4, 2, 4, 2]
  const countArr = new Array(max - min + 1).fill(0);
  arr.forEach((n) => {
    countArr[n - min] += 1;
  });
  // [2, 0, 3]
  // [1, 0, 4]

  const indexArr = [];
  // [0,2,2,2]
  countArr.forEach((c, idx) => {
    if (!c) return;
    const tail = new Array(c).fill(idx);
    indexArr.push(...tail);
  });

  const sorted = new Array(arr.length);
  // [_, _, _, _, _]

  const zzz = indexArr.map((targetIdx) => {
    return targetIdx + min;
  });
  return zzz;
}

function countingSort3(oriArr) {
  if (!oriArr.length) {
    return [];
  }
  const arr = [...oriArr];
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  const countArr = new Array(max - min + 1).fill(0);

  arr.forEach((num) => {
    countArr[num - min]++;
  });

  const accArr = [];
  countArr.forEach((num, idx) => {
    accArr.push((accArr[idx - 1] || 0) + num);
  });
  const sorted = new Array(arr.length).fill(null);
  for (let i = arr.length - 1; i > -1; i--) {
    const targetIdx = accArr[arr[i] - min] - 1;
    sorted[targetIdx] = arr[i];
    accArr[arr[i] - min]--;
  }
  return sorted;

  // [107, 105, 109, 110, 109]

  // [1, 0, 1, 0, 2, 1]

  // [1, 1, 2, 2, 4, 5]
}

export default countingSort3;
