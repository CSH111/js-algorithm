import { runTests, createTestCase } from '../test-utils.js';
import bfsEdgeInput from './bfs-edge-input.js';

const testCases = [
  createTestCase('기본 트리 구조', [[["a", "b"], ["a", "c"], ["b", "d"], ["c", "e"], ["c", "f"]], "a"], ["a", "b", "c", "d", "e", "f"]),
  createTestCase('선형 구조', [[["a", "b"], ["b", "c"], ["c", "d"]], "a"], ["a", "b", "c", "d"]),
  createTestCase('단일 노드 (빈 엣지)', [[], "a"], ["a"]),
  createTestCase('복잡한 그래프 (사이클)', [[
    ["a", "b"], ["a", "c"], ["b", "d"], ["c", "e"], ["d", "f"], ["e", "a"]
  ], "a"], ["a", "b", "c", "e", "d", "f"]),
  createTestCase('양방향 연결 (중복 방지)', [[["a", "b"]], "a"], ["a", "b"]),
  createTestCase('다중 경로로 같은 노드 접근', [[
    ["a", "b"], ["a", "c"], ["b", "d"], ["c", "d"]
  ], "a"], ["a", "b", "c", "d"]),
  createTestCase('사전순 정렬 확인', [[
    ["a", "z"], ["a", "b"], ["a", "m"]
  ], "a"], ["a", "b", "m", "z"]),
  createTestCase('숫자 노드', [[
    ["1", "2"], ["1", "3"], ["2", "4"]
  ], "1"], ["1", "2", "3", "4"]),
];

runTests('BFS (Edge List)', bfsEdgeInput, testCases);