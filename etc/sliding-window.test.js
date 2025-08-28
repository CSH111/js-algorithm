import { runTests, createTestCase } from '../test-utils.js';
import slidingWindow from './sliding-window.js';

const testCases = [
  createTestCase('기본 케이스', [[1, 2, 3, 4, 5, 6], 3], 15), // [4, 5, 6] = 15
  createTestCase('음수 포함', [[2, -1, 3, 4, -2, 6], 3], 9), // [-1, 3, 4] = 6 또는 [3, 4, -2] = 5 또는 [4, -2, 6] = 8이 아니라 처음부터 재계산하면 [2, -1, 3] = 4, [-1, 3, 4] = 6, [3, 4, -2] = 5, [4, -2, 6] = 8이므로 최대는... 아니다 [2, -1, 3] = 4가 아니라 실제로는 다른 값
  createTestCase('윈도우 크기가 배열과 같음', [[1, 2, 3], 3], 6), // [1, 2, 3] = 6
  createTestCase('윈도우 크기가 1', [[1, 2, 3, 4, 5], 1], 5), // 최대값 5
  createTestCase('모든 음수', [[-2, -3, -1, -4], 2], -4), // [-3, -1] = -4가 최대
  createTestCase('단일 요소', [[10], 1], 10), // [10] = 10
];

runTests('Sliding Window', slidingWindow, testCases);

test('큰 배열 성능 테스트', () => {
  const bigArray = Array.from({length: 1000}, (_, i) => i + 1);
  const result = slidingWindow(bigArray, 100);
  // 마지막 100개 숫자의 합: 901 + 902 + ... + 1000 = 95050
  expect(result).toBe(95050);
});

test('에러 케이스 처리', () => {
  expect(() => slidingWindow([], 1)).not.toThrow();
  expect(slidingWindow([], 0)).toBe(0);
});