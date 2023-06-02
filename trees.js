'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.next = null;
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

class BinaryTree {
  constructor() {
    this.root = null;
  }
  // Each depth first traversal method should return an array of values, ordered appropriately.
  preOrder() {
    //Root > left > right
    // you wiill know the first element is the root, easier to recreate the tree
    let arr = [];
    traverse = (root) => {
      arr.push(root.value);
      if (root.left) {
        traverse(root.left);
      }
      if (root.right) {
        traverse(root.right);
      }
    };
    traverse(this.root);
    return arr;
  }

  inOrder() {
    // left >> root >> right
    // the output will be sorted if it is a binary search tree
    //eg [2,3,4,5,6]
    let arr = [];
    traverse = (root) => {
      if (root.left) {
        traverse(root.left);
      }
      arr.push(root.value);
      if (root.right) {
        traverse(root.right);
      }
    };
    traverse(this.root);
    return arr;
  }

  postOrder() {
    // left >> right >> root
    let arr = [];
    traverse = (root) => {
      if (root.left) {
        traverse(root.left);
      }
      if (root.right) {
        traverse(root.right);
      }
      arr.push(root.value);
    };
    traverse(this.root);
    return arr;
  }
}

class BinarySearchTree extends BinaryTree {
  add(value) {
    // Return: nothing
    let node = new Node(value);
    addNode = (currentNode, newNode) => {
      // if the new Node is smaller than the current node, go to the left
      if (currentNode.value > newNode.value) {
        if (currentNode.left === null) {
          return currentNode.left = newNode;
        } else {
          addNode(currentNode.left, newNode);
        }
      } else {
        if (currentNode.right === null) {
          return currentNode.right = newNode;
        } else {
          addNode(currentNode.right, newNode);
        }
      }
    }
    // if there is nothing in the tree, set it to the root
    if (this.root === null) {
      this.root = node;
    } else {
      addNode(this.root, node);
    }
  }

  contains(value) {
    // Returns: boolean indicating whether or not the value is in the tree at least once.
    checkNode = (currentNode, val) => {
      if (currentNode.value === val) {
        return true;
      } else if (currentNode.left === null && currentNode.right === null) {
        return false;
      } else if (currentNode.value > val) {
        return checkNode(currentNode.left, val);
      } else if (currentNode.value <= val) {
        return checkNode(currentNode.right, val);
      }
    }
    if (this.root === null) {
      return false;
    } else {
      return checkNode(this.root, value);
    }
  }

  getMax() {
    // return the max number
    let max = null;
    loop = (node) => {
      if (node.value > max) {
        max = node.value;
      }
      if (node.left !== null) {
        loop(node.left);
      }
      if (node.right !== null) {
        loop(node.right);
      }

    }
    if (this.root === null) {
      return 'nothing in the tree';
    } else {
      loop(this.root);
      return max;
    }
  }
}



function breadthFirst(root) {
  let queue = [];
  let arr = [];
  let current = root;
  queue.push(root);
  while (queue.length > 0) {
    arr.push(queue.shift());
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);   
  }
  return arr;
}


// class kNode {
//   constructor(value) {
//     this.value = value;
//     this.children = [];
//   }
// }

// class KaryTree {
//   constructor(k) {
//     this.root = null;
//     this.k = k;
//   }

//   add(value) {
//     let node = new kNode(value);

//     if (!this.root) {
//       this.root = node;
//       return;
//     }

//     let queue = [this.root];

//     while (queue.length) {
//       let current = queue.shift();

//       if (current.children.length < this.k) {
//         current.children.push(node);
//         return;
//       } else {
//         queue.push(...current.children);
//       }
//     }
//   }

//   add2(value, parentNode) {
//     let node = new Node(value);
//     if (this.root === null) {
//       this.root = node;
//     } else if (parentNode.children.length < this.k) {
//       parentNode.children.push(node);
//     }
//   }


//   contains(value) {
//     if (!this.root) {
//       return false;
//     }

//     let queue = [this.root];

//     while (queue.length) {
//       let current = queue.shift();

//       if (current.value === value) {
//         return true;
//       } else {
//         queue.push(...current.children);
//       }
//     }

//     return false;
//   }

//   traverseBFS() {
//     let result = [];

//     if (!this.root) {
//       return result;
//     }

//     let queue = [this.root];

//     while (queue.length) {
//       let currentLevel = [];
//       let size = queue.length;

//       for (let i = 0; i < size; i++) {
//         let current = queue.shift();
//         currentLevel.push(current.value);
//         queue.push(...current.children);
//       }

//       result.push(currentLevel);
//     }

//     return result;
//   }
// }


// function fizzBuzzTree (oldKTree, parent = null){
//   let k = oldKTree.k;
//   let kTree = new KaryTree(k);
//   function traverse (node, parent) {
//     if (node.value % 3 === 0 && node.value % 5 === 0 ){
//       kTree.add2('FizzBuzz',parent);
//     } else if (node.value % 5 === 0){
//       kTree.add2('Buzz',parent);
//     } else if (node.value % 3 === 0){
//       kTree.add2('Fizz',parent);
//     } else {
//       kTree.add2(node.value.toString(),parent);
//     }
//     while(node.children.length > 0){
//       for (let i = 0; i < node.children.length; i++){
//         traverse(node.children[i], node);
//       }
//     }
//   }
//   traverse(oldKTree.root, parent);

//   return kTree;
// }

module.exports = { BinaryTree, Node, BinarySearchTree, breadthFirst, fizzBuzzTree, KaryTree };
