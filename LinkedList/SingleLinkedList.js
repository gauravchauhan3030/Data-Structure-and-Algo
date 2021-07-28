class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(data) {
    var newNode = new Node(data);
    if (!this.head) {
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
    if (!this.head) {
      return undefined;
    }
    var current = this.head;
    var newTail = this.head;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length == 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(data) {
    var newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, value) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index == 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);
    var newNode = new Node(value);
    var prevNode = this.get(index - 1);
    var indexedNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = indexedNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index == 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    var prevNode = this.get(index - 1);
    var indexedNode = prevNode.next;
    prevNode.next = indexedNode.next;
    this.length--;
    return indexedNode;
  }
  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var prev = null;
    var next;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const list = new SingleLinkedList();

list.push("Hi").push("gaurav").push("how").push("are").push("you !");
//null [10, ->  20 ,  30,   40,  50]
//prev Node
//null <-[10, <-   20,         30,               40,              50]
//      prev    next/node
//                  prev    next/node
console.log(list);
next = node.next;
node.next = prev;
prev = node;
node = next;
