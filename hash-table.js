'use strict';

const { LinkedList } = require('./linked-list');

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let sum = 0;
    for (let i in key) {
      sum += key.charCodeAt(i);
    }
    return (sum * 769) % this.size;
  }

  set(key, value) {
    let position = this.hash(key);
    if (!this.buckets[position]) {
      this.buckets[position] = new LinkedList();
    }
    let entry = { [key]: value }
    this.buckets[position].append(entry);
    return position;
  }

  get(key) {
    let position = this.hash(key);
    let list = this.buckets[position];
    let result = null;
    if (list) {
      let current = list.head;
      while (current) {
        if (current.value[key]) {
          result = current.value[key];
        }
        current = current.next;
      }
    }
    return result;
  }

  has(key) {
    // Boolean, indicating if the key exists in the table already.
    let ans = this.get(key.toLowerCase());
    let result = null;
    if (ans === null) {
      result = false;
    } else {
      result = true;
    }
    return result;
  }

  keys() {
    let result = [];
    this.buckets.forEach(i => {
      if (i !== null && i.head !== null) {
        let currentNode = i.head;
        while (currentNode !== null) {
          result.push(...Object.keys(currentNode.value));
          currentNode = currentNode.next;
        }
      }
    });
    return result;
  }
}

function leftJoin(map1, map2) {
  let arr = [];
  map1.buckets.forEach(i => {
    if (i !== null && i.head !== null) {
      let currentNode = i.head;
      while (currentNode !== null) {
        let map2val = map2.get(...Object.keys(currentNode.value));
        let entry = Object.entries(currentNode.value).flat();
        entry[2] = map2val;
        arr.push(entry);
        currentNode = currentNode.next;
      }
    }
  });

  return arr;
}

module.exports = { HashTable, leftJoin };
