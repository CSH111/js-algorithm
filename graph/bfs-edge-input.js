function bfsEdgeInput(edges, startNode) {
  // edges: [["a", "b"], ["a","c"],["b", "c"],["b", "d"]]
  // startNode: "a"
  // 한 노드의 자식노드끼리의 순서는 사전순으로 방문
  const adjList = {};
  edges.forEach((edge) => {
    edge.forEach((n, idx) => {
      if (!adjList[n]) {
        adjList[n] = [];
      }
      adjList[n].push(edge[idx ? 0 : 1]);
    });
  });
  for (let a in adjList) {
    adjList[a].sort();
  }

  const visit = new Set();

  const queue = [];
  const traversal = [];
  queue.push(startNode);
  visit.add(startNode);

  while (queue.length) {
    const currentNode = queue.shift();
    adjList[currentNode]?.forEach((node) => {
      if (visit.has(node)) {
        return;
      }
      queue.push(node);
      visit.add(node);
    });
    traversal.push(currentNode);
  }
  return traversal;
}

export default bfsEdgeInput;
