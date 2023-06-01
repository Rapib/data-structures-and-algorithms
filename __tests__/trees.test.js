'use strict';
const { BinaryTree, BinarySearchTree } = require('../trees');


test('Can successfully instantiate an empty tree', () => {
  let binaryTree = new BinaryTree();
  expect(binaryTree.root).toEqual(null);
});

test('Can successfully instantiate a tree with a single root node', () => {
  let binarySearchTree = new BinarySearchTree();
  binarySearchTree.add(5);
  expect(binarySearchTree.root.value).toEqual(5);
});

test('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
  let binarySearchTree = new BinarySearchTree();
  binarySearchTree.add(5);
  binarySearchTree.add(2);
  binarySearchTree.add(7);
  expect(binarySearchTree.root.value).toEqual(5);
  expect(binarySearchTree.root.left.value).toEqual(2);
  expect(binarySearchTree.root.right.value).toEqual(7);
});

test('Can successfully return a collection from a pre-order traversal', () => {
  let binarySearchTree = new BinarySearchTree();
  binarySearchTree.add(5);
  binarySearchTree.add(2);
  binarySearchTree.add(7);
  expect(binarySearchTree.preOrder()).toEqual([5,2,7]);
});

test('Can successfully return a collection from an in-order traversal', () => {
  let binarySearchTree = new BinarySearchTree();
  binarySearchTree.add(5);
  binarySearchTree.add(2);
  binarySearchTree.add(7);
  expect(binarySearchTree.inOrder()).toEqual([2,5,7]);
});

test('Can successfully return a collection from a post-order traversal', () => {
  let binarySearchTree = new BinarySearchTree();
  binarySearchTree.add(5);
  binarySearchTree.add(2);
  binarySearchTree.add(7);
  expect(binarySearchTree.postOrder()).toEqual([2,7,5]);
});

test('Returns true / false for the contains method, given an existing or non-existing node value', () => {
  let binarySearchTree = new BinarySearchTree();
  binarySearchTree.add(5);
  binarySearchTree.add(2);
  binarySearchTree.add(7);
  expect(binarySearchTree.contains(8)).toEqual(false);
});

test('find the max value in a tree', () => {
  let binarySearchTree = new BinarySearchTree();
  binarySearchTree.add(5);
  binarySearchTree.add(2);
  binarySearchTree.add(5);
  binarySearchTree.add(0);
  binarySearchTree.add(7);
  binarySearchTree.add(9);
  binarySearchTree.add(11);
  binarySearchTree.add(1);
  expect(binarySearchTree.getMax()).toEqual(11);
});

test('find the max value in an empty tree', () => {
  let binarySearchTree = new BinarySearchTree();
  expect(binarySearchTree.getMax()).toEqual('nothing in the tree');
});

