import { runTests, createTestCase } from "../test-utils.js";
import twoPointer from "./two-pointer.js";

const testCases = [
  createTestCase("첫 번째와 마지막 원소 합", [[1, 2, 3, 6, 8, 9], 10], [0, 5]),
  createTestCase("중간 원소들의 합", [[1, 2, 3, 6, 8, 9], 9], [0, 4]),
  createTestCase("인접한 원소들의 합", [[1, 2, 3, 6, 8, 9], 5], [1, 2]),
  createTestCase("최대 합 (마지막 두 원소)", [[1, 2, 3, 6, 8, 9], 17], [4, 5]),
  createTestCase("최소 배열 (2개 원소)", [[1, 3], 4], [0, 1]),
  createTestCase("다양한 간격의 배열", [[1, 4, 7, 12], 13], [0, 3]),
  createTestCase("최소 합 (첫 두 원소)", [[1, 2, 5, 8], 3], [0, 1]),
  createTestCase("큰 배열에서 중간값", [[1, 4, 6, 8, 10, 15], 19], [1, 5]),
];

runTests("Two Pointer Algorithm", twoPointer, testCases);
