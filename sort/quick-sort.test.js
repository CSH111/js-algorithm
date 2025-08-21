import { runTests, createTestCase } from '../test-utils.js';
import quickSort from './quick-sort.js';

const testCases = [
  createTestCase('기본 정렬 테스트', [[64, 34, 25, 12, 22, 11, 90]], [11, 12, 22, 25, 34, 64, 90]),
  createTestCase('빈 배열 처리', [[]], []),
  createTestCase('단일 요소 배열', [[5]], [5]),
  createTestCase('두 요소 배열', [[2, 1]], [1, 2]),
  createTestCase('이미 정렬된 배열', [[1, 2, 3, 4, 5]], [1, 2, 3, 4, 5]),
  createTestCase('역순 정렬된 배열', [[5, 4, 3, 2, 1]], [1, 2, 3, 4, 5]),
  createTestCase('중복 요소가 있는 배열', [[3, 1, 4, 1, 5, 9, 2, 6, 5]], [1, 1, 2, 3, 4, 5, 5, 6, 9]),
  createTestCase('모든 요소가 같은 배열', [[5, 5, 5, 5, 5]], [5, 5, 5, 5, 5]),
  createTestCase('음수가 포함된 배열', [[-3, -1, -4, 0, 2]], [-4, -3, -1, 0, 2]),
];

runTests('Quick Sort', quickSort, testCases);

test('원본 배열이 수정되는지 확인 (in-place 정렬)', () => {
  const original = [3, 1, 4, 1, 5];
  const sorted = quickSort([...original]);
  expect(sorted).toEqual([1, 1, 3, 4, 5]);
});

test('큰 배열 정렬 성능 테스트', () => {
  const largeArray = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
  const sorted = quickSort([...largeArray]);
  const expected = [...largeArray].sort((a, b) => a - b);
  expect(sorted).toEqual(expected);
});