function getMaxDigit(arr) {
  return Math.max(
    ...arr.map((n) => {
      return String(n).length;
    })
  );
}
function getDigitOfM(n, m) {
  const strN = String(n);
  return Number(strN[strN.length - m - 1] || "0");
}

export default function radixSort(oriArr) {
  let arr = [...oriArr];
  const md = getMaxDigit(arr);
  for (let i = 0; i < md; i++) {
    const tempArr = new Array(10).fill(null).map(() => []);
    for (let n of arr) {
      const idx = getDigitOfM(n, i);
      tempArr[idx].push(n);
    }
    arr = tempArr.flat();
  }
  return arr;
}
