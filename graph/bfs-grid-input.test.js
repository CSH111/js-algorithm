import { runTests, createTestCase } from '../test-utils.js';
import bfsGridInput from './bfs-grid-input.js';

const testCases = [
  createTestCase('기본 그리드 순회', [
    [
      [1, 1, 0, 1],
      [0, 1, 1, 1],
      [1, 0, 1, 0],
      [1, 1, 1, 1],
    ], 0, 0
  ], [[0, 0], [0, 1], [1, 1], [1, 2], [2, 2], [1, 3], [3, 2], [0, 3], [3, 1], [3, 3], [3, 0], [2, 0]]),
  
  createTestCase('단일 셀', [
    [[1]], 0, 0
  ], [[0, 0]]),
  
  createTestCase('선형 그리드', [
    [
      [1, 1, 1, 1]
    ], 0, 0
  ], [[0, 0], [0, 1], [0, 2], [0, 3]]),
  
  createTestCase('수직 그리드', [
    [[1], [1], [1], [1]], 0, 0
  ], [[0, 0], [1, 0], [2, 0], [3, 0]]),
  
  createTestCase('장애물이 있는 그리드', [
    [
      [1, 0, 1],
      [1, 1, 1],
      [0, 1, 0]
    ], 0, 0
  ], [[0, 0], [1, 0], [1, 1], [2, 1], [1, 2], [0, 2]]),
  
  createTestCase('L자 형태', [
    [
      [1, 1, 0],
      [0, 1, 0],
      [0, 1, 1]
    ], 0, 0
  ], [[0, 0], [0, 1], [1, 1], [2, 1], [2, 2]]),
];

runTests('BFS (Grid)', bfsGridInput, testCases);