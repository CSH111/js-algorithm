import { runTests, createTestCase } from "../test-utils.js";
import bfsGridShortest from "./bfs-grid-shortest.js";

const testCases = [
  createTestCase(
    "기본 최단경로",
    [
      [
        [1, 1, 0, 1],
        [0, 1, 1, 1],
        [1, 0, 1, 0],
        [1, 1, 1, 1],
      ],
      [0, 0],
      [1, 3],
    ],
    4
  ),

  createTestCase("직선 경로", [[[1, 1, 1, 1]], [0, 0], [0, 3]], 3),

  createTestCase(
    "시작점이 목표점",
    [
      [
        [1, 1],
        [1, 1],
      ],
      [0, 0],
      [0, 0],
    ],
    0
  ),

  createTestCase(
    "막힌 경로 (경로 없음)",
    [
      [
        [1, 0, 1],
        [0, 0, 1],
        [1, 1, 1],
      ],
      [0, 0],
      [0, 2],
    ],
    undefined
  ),

  createTestCase(
    "우회 경로",
    [
      [
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1],
      ],
      [0, 0],
      [0, 2],
    ],
    6
  ),

  createTestCase(
    "대각선 차단 (L자 경로)",
    [
      [
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1],
      ],
      [0, 0],
      [2, 2],
    ],
    4
  ),

  createTestCase("단일 셀", [[[1]], [0, 0], [0, 0]], 0),

  createTestCase(
    "서로 다른 거리의 여러 경로 (직선 vs 우회)",
    [
      [
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1],
      ],
      [0, 0],
      [0, 4],
    ],
    4
  ),

  createTestCase(
    "서로 다른 거리의 여러 경로 (복잡한 우회)",
    [
      [
        [1, 0, 1, 1, 1, 1],
        [1, 0, 1, 0, 0, 1],
        [1, 1, 1, 1, 1, 1],
      ],
      [0, 0],
      [0, 5],
    ],
    9
  ),

  createTestCase(
    "서로 다른 거리의 여러 경로 (직선 vs 대각우회)",
    [
      [
        [1, 1, 1, 1, 1],
        [0, 0, 1, 0, 0],
        [1, 1, 1, 1, 1],
        [0, 0, 1, 0, 0],
        [1, 1, 1, 1, 1],
      ],
      [0, 0],
      [4, 4],
    ],
    8
  ),

  createTestCase(
    "복잡한 미로",
    [
      [
        [1, 1, 0, 1, 1],
        [0, 1, 0, 0, 1],
        [1, 1, 1, 0, 1],
        [1, 0, 1, 1, 1],
        [1, 1, 0, 0, 1],
      ],
      [0, 0],
      [4, 4],
    ],
    8
  ),
];

runTests("BFS Grid Shortest Path", bfsGridShortest, testCases);
