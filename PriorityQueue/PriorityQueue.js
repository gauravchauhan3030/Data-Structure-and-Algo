class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    var newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    var idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      var parentIdx = Math.floor((idx - 1) / 2);
      var parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[idx] = parent;
      this.values[parentIdx] = element;
      idx = parentIdx;
    }
  }

  dequeue() {
    var min = this.values[0];
    var end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    console.log(min);
    return min;
  }
  sinkDown() {
    var idx = 0;
    var element = this.values[idx];
    var length = this.values.length;

    while (true) {
      var leftChildIdx = idx * 2 + 1;
      var rightChildIdx = idx * 2 + 2;
      var swap = null;

      if (leftChildIdx < length) {
        var leftChildElement = this.values[leftChildIdx];
        if (element.priority > leftChildElement.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        var rightChildElement = this.values[rightChildIdx];
        if (
          (swap === null && element.priority > rightChildElement.priority) ||
          (swap != null &&
            rightChildElement.priority < leftChildElement.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (!swap) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);
// console.log(ER);
ER.dequeue();
ER.dequeue();
ER.dequeue();
ER.dequeue();
