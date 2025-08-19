const { runTests, createTestCase } = require('../test-utils');
const bubbleSort = require('./bubble-sort');

const testCases = [
  createTestCase('기본 정렬 테스트', [[64, 34, 25, 12, 22, 11, 90]], [11, 12, 22, 25, 34, 64, 90]),
  createTestCase('빈 배열 처리', [[]], []),
  createTestCase('단일 요소 배열', [[5]], [5]),
  createTestCase('이미 정렬된 배열', [[1, 2, 3, 4, 5]], [1, 2, 3, 4, 5]),
  createTestCase('역순 정렬된 배열', [[5, 4, 3, 2, 1]], [1, 2, 3, 4, 5]),
  createTestCase('중복 요소가 있는 배열', [[3, 1, 4, 1, 5, 9, 2, 6, 5]], [1, 1, 2, 3, 4, 5, 5, 6, 9]),
];

runTests('Bubble Sort (Simple)', bubbleSort, testCases);

test('원본 배열이 수정되지 않는지 확인', () => {
  const original = [3, 1, 4, 1, 5];
  const sorted = bubbleSort(original);
  expect(original).toEqual([3, 1, 4, 1, 5]);
  expect(sorted).toEqual([1, 1, 3, 4, 5]);
});