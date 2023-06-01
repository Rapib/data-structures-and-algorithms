'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  traverse() {
    let current = this.head;
    while (current) {
      current = current.next;
    }
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  append(data) {
    let newLastNode = new Node(data);
    if (this.head === null) {
      this.head = newLastNode;
    } else {
      let current = this.head;
      while (current !== null) {
        if (current.next === null) {
          return current.next = newLastNode;
        }
        current = current.next;
      }
    }
  }
  insert(data) {
    // cannot let current = this.head because it is a local variable and it doesn't affect the head of the linked list
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  insertBefore(old, newVal) {
    //adds a new node with the given new value immediately before the first node that has the value specified
    let current = this.head;
    let newNode = new Node(newVal);
    // store the previous node
    let preNode = {};
    while (current) {
      // if head matches
      if (this.head.value === old) {
        newNode.next = current;
        // need return to break the loop
        return this.head = newNode;
        // loop through
      } else if (current.value === old) {
        preNode.next = newNode;
        return newNode.next = current;
      } else {
        preNode = current;
        current = current.next;
      }
    }
  }

  insertAfter(old, newVal) {
    let current = this.head;
    let newNode = new Node(newVal);
    while (current) {
      if (current.value === old) {
        newNode.next = current.next;
        return current.next = newNode;
      } else {
        current = current.next;
      }
    }
  }

  toString() {
    // return string "{ a } -> { b } -> { c } -> NULL"
    let current = this.head;
    let arr = [];

    while (current !== null) {
      let currentVal = current.value;
      arr.push('{ ' + currentVal + ' }');
      current = current.next;
    }
    arr.push('NULL');
    let str = arr.join(' -> ');
    return str;
  }

  kthFromEnd(k) {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    let newArr = arr.reverse();
    if (k >= newArr.length) {
      let ans = 'exception';
      return ans;
    } else if (k < 0) {
      let ans = 'not a positive integer';
      return ans;
    } else {
      return newArr[k];
    }
  }
}

function zipLists(link1, link2) {
  let current1 = link1.head;
  let current2 = link2.head;
  let newList = new LinkedList();
  while (current1 && current2) {
    newList.append(current1.value);
    newList.append(current2.value);
    current1 = current1.next;
    current2 = current2.next;
  }

  while (current1){
    newList.append(current1.value);
    current1 = current1.next;
  }
  while (current2){
    newList.append(current2.value);
    current2 = current2.next;
  }
  return newList;
}

module.exports = { LinkedList, zipLists, Node };
