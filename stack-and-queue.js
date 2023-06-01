'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let node = new Node(value);
    if (this.top === null) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
  }

  pop() {
    if (this.top === null) return 'empty stack';
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    return temp.value;
  }

  peek() {
    if (this.top === null) return 'empty stack';
    return this.top.value;
  }

  isEmpty() {
    if (this.top === null) {
      return true;
    } else {
      return false;
    };
  }
}


class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    let node = new Node(value);
    if (this.front === null) {
      this.front = node;
      this.rear = node;
    } else {
      let current = this.front;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.rear = node;
    }
  }

  dequeue() {
    if (this.front === null) {
      return 'empty queue';
    } else {
      let temp = this.front;
      this.front = temp.next;
      temp.next = null;
      return temp.value;
    }
  }

  peek() {
    if (this.front === null) {
      return 'empty queue';
    } else {
      return this.front.value;
    }
  }


  isEmpty() {
    if (this.front === null) {
      return true;
    } else {
      return false;
    }
  }
}

class PseudoQueue extends Stack {
  constructor() {
    super();
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value);
    return this.stack1;
  }

  dequeue() {
    if (this.stack1.top === null) {
      return 'nothing to remove';
    } else if (this.stack1.top.next === null) {
      this.stack1.pop();
    } else {
      while (this.stack1.top !== null) {
        this.stack2.push(this.stack1.pop());
      }
      let remove = this.stack2.pop();
      while (this.stack2.top !== null) {
        this.stack1.push(this.stack2.pop());
      }
      return remove;
    }
  }
}

class AnimalShelter extends Queue {

  dequeue(pref) {
    if (pref !== "dog" && pref !== "cat" ) {
      return null;
    }
    if (this.front === null) {
      return 'empty queue';
    } else {
      let current = this.front;
      let pre = {};
      while (pref !== current.value.species){
        pre = current;
        current = current.next;
      }
      pre.next = current.next;
      current.next = null;
      return current.value.species;
    }
  }
}

module.exports = { Stack, Queue, PseudoQueue, AnimalShelter };
