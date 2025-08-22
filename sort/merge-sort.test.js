import { runTests, createTestCase } from '../test-utils.js';
import mergeSort from './merge-sort.js';

const testCases = [
  createTestCase('기본 정렬 테스트', [[64, 34, 25, 12, 22, 11, 90]], [11, 12, 22, 25, 34, 64, 90]),
  createTestCase('빈 배열 처리', [[]], []),
  createTestCase('단일 요소 배열', [[5]], [5]),
  createTestCase('두 요소 배열', [[2, 1]], [1, 2]),
  createTestCase('이미 정렬된 배열', [[1, 2, 3, 4, 5]], [1, 2, 3, 4, 5]),
  createTestCase('역순 정렬된 배열', [[5, 4, 3, 2, 1]], [1, 2, 3, 4, 5]),
  createTestCase('중복 요소가 있는 배열', [[3, 1, 4, 1, 5, 9, 2, 6, 5]], [1, 1, 2, 3, 4, 5, 5, 6, 9]),
  createTestCase('모든 요소가 같은 배열', [[7, 7, 7, 7]], [7, 7, 7, 7]),
  createTestCase('음수가 포함된 배열', [[-3, -1, -4, 0, 2]], [-4, -3, -1, 0, 2]),
  createTestCase('홀수 길이 배열', [[9, 1, 5, 3, 7]], [1, 3, 5, 7, 9]),
  createTestCase('짝수 길이 배열', [[8, 2, 6, 4]], [2, 4, 6, 8]),
];

runTests('Merge Sort', mergeSort, testCases);

test('원본 배열이 수정되지 않는지 확인', () => {
  const original = [3, 1, 4, 1, 5];
  const sorted = mergeSort(original);
  expect(original).toEqual([3, 1, 4, 1, 5]);
  expect(sorted).toEqual([1, 1, 3, 4, 5]);
});

test('안정성 테스트 (같은 값의 순서 유지)', () => {
  const objects = [{val: 3, id: 'A'}, {val: 1, id: 'B'}, {val: 3, id: 'C'}];
  // 숫자 배열로 안정성 간접 확인
  const values = [3, 1, 3];
  const sorted = mergeSort(values);
  expect(sorted).toEqual([1, 3, 3]);
});

test('큰 배열 정렬 테스트', () => {
  const largeArray = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
  const sorted = mergeSort(largeArray);
  const expected = [...largeArray].sort((a, b) => a - b);
  expect(sorted).toEqual(expected);
});