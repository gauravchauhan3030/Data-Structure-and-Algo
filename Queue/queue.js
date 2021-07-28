class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;

    return this.size;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.size == 1) {
      this.last = null;
    }
    var temp = this.first;
    this.first = temp.next;
    return temp.value;
  }
}
