// 使用JavaScript实现图的深度优先和广度优先遍历
const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: [],
  F: [],
}
// 深度优先遍历 (DFS) - 使用记忆优化法
function dfsMemo(graph, start) {
  const visit = new Set();

  function dfs(node) {
    if (visit.has(node)) return;
    visit.add(node);
    for (const neighBor of graph[node]) {
      dfs(neighBor)
    }
  }

  dfs(start)
}
dfsMemo(graph, 'A')

// 广度优先遍历 (BFS) - 使用优先级队列优化
function bfsQueue(graph, start) {
  const visit = new Set();
  const queue = [];

  queue.push(graph);

  while (queue.length) {
    const node = queue.shift()
    if (visit.has(node)) continue;

    visit.add(node);

    for (const item of graph[node]) {
      queue.push(item)
    }
  }

}
bfsQueue(graph, 'A');
