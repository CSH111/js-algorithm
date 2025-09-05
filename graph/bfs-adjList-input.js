function bfsAdjInput(adjList, startNodeKey) {
  // adjList: {a:[b,c],b:[d],c:[e,f]}
  // bfs 방식으로 순회한 결과 arr 출력
  const visited = new Set();

  const queue = [];
  const traversal = [];
  queue.push(startNodeKey);
  visited.add(startNodeKey);

  while (queue.length) {
    const target = queue.shift();
    // if (visited.has(target)) {
    //   queue.shift();
    //   continue;
    // }
    adjList[target]?.forEach((nodeKey) => {
      if (visited.has(nodeKey)) {
        return;
      }
      queue.push(nodeKey);
      visited.add(nodeKey);
    });
    traversal.push(target);
  }
  return traversal;
}

export default bfsAdjInput;
