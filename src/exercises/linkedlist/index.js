/* eslint-disable no-undef */
// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

// // other Node set up
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
}

module.exports = { Node, LinkedList };
