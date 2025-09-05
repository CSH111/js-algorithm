function bfsGridInput(grid, startRow, startCol) {
  // input -> grid = [
  //   [1, 1, 0, 1],
  //   [0, 1, 1, 1],
  //   [1, 0, 1, 0],
  //   [1, 1, 1, 1],
  // ];
  //
  // input -> startRow = 0
  // input -> startCol = 0
  // 자식 순회순서는 인풋 방향상 위부터 반시계 방향으로 한다.

  const queue = [];
  const traversal = [];
  const visit = new Set();
  queue.push([startRow, startCol]);
  visit.add(`${startRow}-${startCol}`);
  while (queue.length) {
    const [currentRow, currentCol] = queue.shift();
    const childAvailables = [
      [currentRow - 1, currentCol],
      [currentRow, currentCol - 1],
      [currentRow + 1, currentCol],
      [currentRow, currentCol + 1],
    ];
    childAvailables.forEach(([row, col]) => {
      const checkTargetChild = grid[row]?.[col];
      if (typeof checkTargetChild === "undefined" || checkTargetChild === 0) {
        return;
      }
      if (visit.has(`${row}-${col}`)) {
        return;
      }
      queue.push([row, col]);
      visit.add(`${row}-${col}`);
    });
    traversal.push([currentRow, currentCol]);
  }
  return traversal;
}

export default bfsGridInput;
