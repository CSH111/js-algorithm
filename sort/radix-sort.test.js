import { runTests, createTestCase } from '../test-utils.js';
import radixSort from './radix-sort.js';

const testCases = [
  createTestCase('기본 정렬 테스트', [[170, 45, 75, 90, 2, 802, 24, 66]], [2, 24, 45, 66, 75, 90, 170, 802]),
  createTestCase('빈 배열 처리', [[]], []),
  createTestCase('단일 요소 배열', [[5]], [5]),
  createTestCase('두 요소 배열', [[25, 1]], [1, 25]),
  createTestCase('이미 정렬된 배열', [[1, 2, 3, 4, 5]], [1, 2, 3, 4, 5]),
  createTestCase('역순 정렬된 배열', [[5, 4, 3, 2, 1]], [1, 2, 3, 4, 5]),
  createTestCase('중복 요소가 있는 배열', [[3, 1, 4, 1, 5, 9, 2, 6, 5]], [1, 1, 2, 3, 4, 5, 5, 6, 9]),
  createTestCase('모든 요소가 같은 배열', [[7, 7, 7, 7]], [7, 7, 7, 7]),
  createTestCase('한 자리 숫자만', [[9, 1, 5, 3, 7, 2, 8, 4, 6]], [1, 2, 3, 4, 5, 6, 7, 8, 9]),
  createTestCase('서로 다른 자릿수', [[1, 22, 333, 4444, 55]], [1, 22, 55, 333, 4444]),
  createTestCase('0이 포함된 배열', [[10, 0, 5, 100, 50]], [0, 5, 10, 50, 100]),
  createTestCase('큰 숫자들', [[999, 111, 555, 333, 777]], [111, 333, 555, 777, 999]),
];

runTests('Radix Sort', radixSort, testCases);

test('원본 배열이 수정되지 않는지 확인', () => {
  const original = [170, 45, 75, 90];
  const sorted = radixSort(original);
  expect(original).toEqual([170, 45, 75, 90]);
  expect(sorted).toEqual([45, 75, 90, 170]);
});

test('안정성 테스트 (같은 값의 순서 유지)', () => {
  // 같은 값들이 원래 순서를 유지하는지 확인
  const values = [12, 23, 12, 45, 23];
  const sorted = radixSort(values);
  expect(sorted).toEqual([12, 12, 23, 23, 45]);
});

test('매우 큰 배열 테스트', () => {
  const largeArray = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 10000));
  const sorted = radixSort(largeArray);
  const expected = [...largeArray].sort((a, b) => a - b);
  expect(sorted).toEqual(expected);
});

test('극단적인 경우 - 매우 큰 숫자와 작은 숫자', () => {
  const extremeArray = [999999, 1, 100000, 10, 1000];
  const sorted = radixSort(extremeArray);
  expect(sorted).toEqual([1, 10, 1000, 100000, 999999]);
});