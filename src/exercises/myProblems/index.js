class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if(!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while(current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if(!this.head) return undefined;
    let prevHead = this.head;
    this.head = prevHead.next;
    this.length--;
    if(this.length === 0) {
      this.tail = null;
    }
    return prevHead;
  }
  unShift(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if(index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while(counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    let indexedNode = this.get(index);
    if(indexedNode) {
      indexedNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if(index < 0 || index >= this.length) return false;
    if(index === this.length) return !!this.push(val);
    if(index === 0) return !!this.unShift(val);
    let newNode = new Node(index);
    const prev = this.get(index - 1);
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length - 1) return this.pop();
    // let newNode = new Node(val);
    const prevNode = this.get(index - 1);
    const tempRemove = prevNode.next;
    prevNode.next = tempRemove;
    newNode.next = tempRemove;
    this.length--;
    return this.newNode(val);
  }
}

const list = new SinglyLinkedList();
list.push('hello');
list.push('goodbye');
