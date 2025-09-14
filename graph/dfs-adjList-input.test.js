import { runTests, createTestCase } from '../test-utils.js';
import dfsAdjListInput from './dfs-adjList-input.js';

const testCases = [
  createTestCase('기본 트리 구조', [{ a: ["b", "c"], b: ["d"], c: ["e", "f"] }, "a"], ["a", "b", "d", "c", "e", "f"]),
  createTestCase('선형 구조', [{ a: ["b"], b: ["c"], c: ["d"] }, "a"], ["a", "b", "c", "d"]),
  createTestCase('단일 노드', [{ a: [] }, "a"], ["a"]),
  createTestCase('복잡한 그래프 (사이클)', [{
    a: ["b", "c"],
    b: ["d", "a"],
    c: ["e"],
    d: ["f"],
    e: ["a"],
    f: []
  }, "a"], ["a", "b", "d", "f", "c", "e"]),
  createTestCase('빈 인접 리스트', [{ a: ["b"], b: undefined }, "a"], ["a", "b"]),
  createTestCase('양방향 연결 (중복 방문 테스트)', [{ a: ["b"], b: ["a"] }, "a"], ["a", "b"]),
  createTestCase('다중 경로로 같은 노드 접근', [{
    a: ["b", "c"],
    b: ["d"],
    c: ["d"],
    d: []
  }, "a"], ["a", "b", "d", "c"]),
];

runTests('DFS (Adjacency List)', dfsAdjListInput, testCases);