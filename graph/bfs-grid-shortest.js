function bfsGridShortest(grid, start, end) {
  // input -> grid = [
  //   [1, 1, 0, 1],
  //   [0, 1, 1, 1],
  //   [1, 0, 1, 0],
  //   [1, 1, 1, 1],
  // ];
  // 1: 이동가능, 0: 이동불가
  // start -> [row n, col m]
  // start -> [col n, col m]
  const visit = new Set();
  const queue = [];
  const initialDistance = 0;
  queue.push([...start, initialDistance]);
  visit.add(`${start[0]}-${start[1]}`);
  // let incompleted = true;
  let shortest;

  while (queue.length) {
    const [currentRow, currentCol, distance] = queue.shift();
    if (`${currentRow}-${currentCol}` === `${end[0]}-${end[1]}`) {
      shortest = distance;
      break;
    }

    [
      [currentRow + 1, currentCol],
      [currentRow - 1, currentCol],
      [currentRow, currentCol + 1],
      [currentRow, currentCol - 1],
    ].forEach(([row, col]) => {
      if (!grid[row] || !grid[row]?.[col]) {
        return;
      }
      if (visit.has(`${row}-${col}`)) {
        return;
      }

      queue.push([row, col, distance + 1]);
      visit.add(`${row}-${col}`);
    });
  }
  return shortest;
}

export default bfsGridShortest