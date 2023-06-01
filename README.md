# Data Structures and Algorithms (JavaScript)


This repository contains a collection of common data structures and algorithms implemented in JavaScript. Each implementation is accompanied by a brief explanation and examples of usage.

## Table of Contents

1. [Data Structures](#data-structures)
    - [Array](#array)
    - [Linked List](#linked-list)
    - [Stack](#stack)
    - [Queue](#queue)
    - [Binary Tree](#binary-tree)
    - [Heap](#heap)
    - [Hash Table](#hash-table)
    - [Graph](#graph)

2. [Algorithms](#algorithms)
    - [Searching](#searching)
    - [Sorting](#sorting)
    - [Recursion](#recursion)
    - [Dynamic Programming](#dynamic-programming)

## Data Structures

### Array

- **Description**: An array is a collection of elements stored at contiguous memory locations. It allows random access to elements based on their indices.
- **Implementation**: [Array.js](data-structures/array.js)
- **Example**:
  ```javascript
  const array = new Array();
  array.push(1);
  array.push(2);
  console.log(array); // [1, 2]
  ```

### Linked List

- **Description**: A linked list is a linear data structure consisting of nodes, where each node contains a value and a reference to the next node in the sequence.
- **Implementation**: [LinkedList.js](data-structures/linked-list.js)
- **Example**:

  ```javascript
  const list = new LinkedList();
  list.insertAtHead(1);
  list.insertAtHead(2);
  console.log(list.toString()); // 2 -> 1
  ```

### Stack

- **Description**: A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. Elements are added and removed from the same end called the "top" of the stack.
- **Implementation**: [Stack.js](data-structures/stack.js)
- **Example**:

  ```javascript
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  console.log(stack.pop()); // 2
  ```

### Queue

- **Description**: A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. Elements are added at the rear and removed from the front.
- **Implementation**: [Queue.js](data-structures/queue.js)
- **Example**:

  ```javascript
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  console.log(queue.dequeue()); // 1
  ```

### Binary Tree

- **Description**: A binary tree is a tree-like structure with a maximum of two children for each parent node.
- **Implementation**: [BinaryTree.js](data-structures/binary-tree.js)
- **Example**:

  ```javascript
  const tree = new BinaryTree();
  tree.insert(5);
  tree.insert(3);
  console.log(tree.contains(3)); // true
  ```

### Heap

- **Description**: A heap is a specialized tree-based data structure that satisfies the heap property, where each parent node is less/greater than or equal to its child nodes.
- **Implementation**: [Heap.js](data-structures/heap.js)
- **Example**:

  ```javascript
  const heap = new Heap();
  heap.insert(4);
  heap.insert(2);
  console.log(heap.peek()); // 2
  ```

### Hash Table

- **Description**:

 A hash table (hash map) is a data structure that uses hash functions to map keys to values, allowing constant-time average case lookups, insertions, and deletions.

- **Implementation**: [HashTable.js](data-structures/hash-table.js)
- **Example**:

  ```javascript
  const table = new HashTable();
  table.set("name", "John");
  console.log(table.get("name")); // John
  ```

### Graph

- **Description**: A graph is a non-linear data structure consisting of nodes (vertices) connected by edges. It represents relationships between different objects.
- **Implementation**: [Graph.js](data-structures/graph.js)
- **Example**:

  ```javascript
  const graph = new Graph();
  graph.addEdge("A", "B");
  graph.addEdge("B", "C");
  console.log(graph.hasEdge("A", "B")); // true
  ```

## Algorithms

### Searching

- **Binary Search**: A search algorithm that finds the position of a target value within a sorted array by repeatedly dividing it into half.
- **Linear Search**: A simple search algorithm that sequentially checks each element of an array until a match is found.

### Sorting

- **Bubble Sort**: A simple comparison-based sorting algorithm that repeatedly swaps adjacent elements if they are in the wrong order.
- **Selection Sort**: A sorting algorithm that repeatedly selects the minimum/maximum element and places it in the correct position.
- **Insertion Sort**: A sorting algorithm that builds the final sorted array one item at a time by inserting each item into its correct position.
- **Merge Sort**: A divide-and-conquer sorting algorithm that recursively divides the input array into smaller subarrays, sorts them, and merges them.
- **Quick Sort**: A divide-and-conquer sorting algorithm that partitions the array around a pivot element and recursively sorts the subarrays.

### Recursion

- **Description**: Recursion is a programming technique where a function calls itself to solve a problem by breaking it down into smaller subproblems.
- **Example**:

  ```javascript
  function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
  console.log(factorial(5)); // 120
  ```

### Dynamic Programming

- **Description**: Dynamic programming is an optimization technique that solves complex problems by breaking them down into simpler overlapping subproblems.
- **Example**:

  ```javascript
  function fibonacci(n) {
    const memo = {};
    function fib(n) {
      if (n <= 2) return 1;
      if (n in memo) return memo[n];
      memo[n] = fib(n - 1) + fib(n - 2);
      return memo[n];
    }
    return fib(n);
  }
  console.log(fibonacci(6)); // 8
  ```

