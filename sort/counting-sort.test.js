import { runTests, createTestCase } from '../test-utils.js';
import countingSort from './counting-sort.js';

const testCases = [
  createTestCase('기본 정렬 테스트', [[4, 2, 4, 4, 2]], [2, 2, 4, 4, 4]),
  createTestCase('빈 배열 처리', [[]], []),
  createTestCase('단일 요소 배열', [[5]], [5]),
  createTestCase('이미 정렬된 배열', [[1, 2, 3, 4, 5]], [1, 2, 3, 4, 5]),
  createTestCase('역순 정렬된 배열', [[5, 4, 3, 2, 1]], [1, 2, 3, 4, 5]),
  createTestCase('중복 요소가 있는 배열', [[3, 1, 4, 1, 5, 9, 2, 6, 5]], [1, 1, 2, 3, 4, 5, 5, 6, 9]),
  createTestCase('음수가 포함된 배열', [[-3, -1, -4, 0, 2]], [-4, -3, -1, 0, 2]),
  createTestCase('큰 범위의 숫자', [[100, 1, 50, 99, 2]], [1, 2, 50, 99, 100]),
];

runTests('Counting Sort', countingSort, testCases);

test('원본 배열이 수정되지 않는지 확인', () => {
  const original = [4, 2, 4, 4, 2];
  const sorted = countingSort(original);
  expect(original).toEqual([4, 2, 4, 4, 2]);
  expect(sorted).toEqual([2, 2, 4, 4, 4]);
});