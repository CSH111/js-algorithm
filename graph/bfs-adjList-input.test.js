import { runTests, createTestCase } from '../test-utils.js';
import bfsAdjInput from './bfs-adjList-input.js';

const testCases = [
  createTestCase('기본 트리 구조', [{ a: ["b", "c"], b: ["d"], c: ["e", "f"] }, "a"], ["a", "b", "c", "d", "e", "f"]),
  createTestCase('선형 구조', [{ a: ["b"], b: ["c"], c: ["d"] }, "a"], ["a", "b", "c", "d"]),
  createTestCase('단일 노드', [{ a: [] }, "a"], ["a"]),
  createTestCase('복잡한 그래프 (사이클)', [{ 
    a: ["b", "c"], 
    b: ["d", "a"], 
    c: ["e"], 
    d: ["f"],
    e: ["a"],
    f: []
  }, "a"], ["a", "b", "c", "d", "e", "f"]),
  createTestCase('빈 인접 리스트', [{ a: ["b"], b: undefined }, "a"], ["a", "b"]),
];

runTests('BFS (Adjacency List)', bfsAdjInput, testCases);