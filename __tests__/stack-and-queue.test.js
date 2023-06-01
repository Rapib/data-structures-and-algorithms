'use strict';

const { Stack, Queue, PseudoQueue, AnimalShelter } = require('../stack-and-queue');

test('Can successfully push onto a stack', () => {
  let stack = new Stack();
  stack.push(3);
  expect(stack.top.value).toEqual(3);
});

test('Can successfully push multiple values onto a stack', () => {
  let stack = new Stack();
  stack.push(3);
  stack.push(4);
  expect(stack.top.value).toEqual(4);
});

test('Can successfully pop off the stack', () => {
  let stack = new Stack();
  stack.push(3);
  stack.push(4);
  stack.pop();
  expect(stack.top.value).toEqual(3);
});
test('Can successfully empty a stack after multiple pops', () => {
  let stack = new Stack();
  stack.push(3);
  stack.push(4);
  stack.pop();
  stack.pop();
  expect(stack.top).toEqual(null);
});
test('Calling peek on empty stack raises exception', () => {
  let stack = new Stack();
  expect(stack.peek()).toEqual('empty stack');
});
test('Can successfully instantiate an empty stack', () => {
  let stack = new Stack();
  expect(stack.isEmpty()).toEqual(true);
});

test('Calling pop on empty stack raises exception', () => {
  let stack = new Stack();
  expect(stack.pop()).toEqual('empty stack');
});
test('Can successfully enqueue into a queue', () => {
  let queue = new Queue();
  queue.enqueue(1);
  expect(queue.rear.value).toEqual(1);
});
test('Can successfully enqueue multiple values into a queue', () => {
  let queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  expect(queue.rear.value).toEqual(2);
});
test('Can successfully dequeue out of a queue the expected value', () => {
  let queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  expect(queue.dequeue()).toEqual(1);
});
test('Can successfully peek into a queue, seeing the expected value', () => {
  let queue = new Queue();
  expect(queue.peek()).toEqual('empty queue');
});
test('Can successfully empty a queue after multiple dequeues', () => {
  let queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.dequeue();
  queue.dequeue();
  expect(queue.peek()).toEqual('empty queue');
});
test('Can successfully instantiate an empty queue', () => {
  let queue = new Queue();
  expect(queue.isEmpty()).toEqual(true);
});
test('Calling dequeue or peek on empty queue raises exception', () => {
  let queue = new Queue();
  expect(queue.dequeue()).toEqual('empty queue');
});

test('PseudoQueue enqueue 1 value', () => {
  let pq = new PseudoQueue();
  expect(pq.enqueue(1).peek()).toEqual(1);
});

test('PseudoQueue enqueue 2 values', () => {
  let pq = new PseudoQueue();
  pq.enqueue(1);
  expect(pq.enqueue(2).peek()).toEqual(2);
});

test('PseudoQueue dequeue value', () => {
  let pq = new PseudoQueue();
  pq.enqueue(1);
  pq.enqueue(2);
  expect(pq.dequeue()).toEqual(1);
});

test('AnimalShelter enqueue 1 values', () => {
  let as = new AnimalShelter();
  let animal1 = {
    species: "dog",
    name: "aa",
  }


  as.enqueue(animal1);
  expect(as.peek().species).toEqual('dog');
});

test('AnimalShelter enqueue 2 values', () => {
  let as = new AnimalShelter();
  let animal1 = {
    species: "dog",
    name: "aa",
  }
  let animal2 = {
    species: "cat",
    name: "bb",
  }
  as.enqueue(animal2);
  as.enqueue(animal1);
  expect(as.peek().species).toEqual('cat');
});

test('AnimalShelter dequeue value', () => {
  let as = new AnimalShelter();
  let animal1 = {
    species: "dog",
    name: "aa",
  }
  let animal2 = {
    species: "cat",
    name: "bb",
  }
  as.enqueue(animal2);
  as.enqueue(animal1);
  expect(as.dequeue('cat')).toEqual('cat');
});

test('AnimalShelter dequeue non species', () => {
  let as = new AnimalShelter();
  let animal1 = {
    species: "dog",
    name: "aa",
  }
  let animal2 = {
    species: "cat",
    name: "bb",
  }
  as.enqueue(animal2);
  as.enqueue(animal1);
  expect(as.dequeue('fsdf')).toEqual(null);
});
