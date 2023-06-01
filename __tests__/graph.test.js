const { Graph } = require('../graph');

test('Node can be successfully added to the graph', () => {
  const graph = new Graph();
  graph.addNode('tom');
  let result = graph.getNodes();
  expect(result[0].value).toEqual('tom');
});


test('An edge can be successfully added to the graph,A graph with only one node and edge can be properly returned', () => {
  const graph = new Graph();
  let tom = graph.addNode('tom');
  let thomas = graph.addNode('thomas');
  graph.addEdge(tom, thomas, 3);
  let result = graph.getNeighbors(tom);
  expect(result[0].weight).toEqual(3);
});

test('A collection of all nodes can be properly retrieved from the graph', () => {
  const graph = new Graph();
  graph.addNode('tom');
  graph.addNode('thomas');
  let result = graph.getNodes();
  expect(result[1].value).toEqual('thomas');
});

test('All appropriate neighbors can be retrieved from the graph & Neighbors are returned with the weight between nodes included', () => {
  const graph = new Graph();
  let tom = graph.addNode('tom');
  let thomas = graph.addNode('thomas');
  graph.addEdge(tom, thomas, 3);
  let result = graph.getNeighbors(tom);
  expect(result[0].weight).toEqual(3);
});



test('The proper size is returned, representing the number of nodes in the graph', () => {
  const graph = new Graph();
  graph.addNode('tom');
  graph.addNode('thomas');
  let result = graph.size();
  expect(result).toEqual(2);
});

