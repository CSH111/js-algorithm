function dfsAdjListInput(graph, startNode) {
  // input: graph = {
  //   'A': ['B', 'C'],
  //   'B': ['A', 'D', 'E'],
  //   'C': ['A', 'F'],
  //   'D': ['B'],
  //   'E': ['B'],
  //   'F': ['C']
  // };
  const visit = new Set();
  const traversal = [];

  const helper = (graph, currentNode) => {
    if (visit.has(currentNode)) {
      return;
    }
    // if(!graph[currentNode]?.length){
    //   return
    // }
    visit.add(currentNode);
    traversal.push(currentNode);
    graph[currentNode]?.forEach((node) => {
      helper(graph, node);
    });
  };
  helper(graph, startNode);
  return traversal;
}

export default dfsAdjListInput;
