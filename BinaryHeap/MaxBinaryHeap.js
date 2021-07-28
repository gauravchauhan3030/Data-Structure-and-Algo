class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }
  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    var idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      var parentIdx = Math.floor((idx - 1) / 2);
      var parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[idx] = parent;
      this.values[parentIdx] = element;
      idx = parentIdx;
    }
  }

  extractMax() {
    var max = this.values[0];
    var end = this.values.pop();
    this.values[0] = end;
    this.sinkDown();
    return max;
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
        if (element < leftChildElement) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        var rightChildElement = this.values[rightChildIdx];
        if (
          (swap === null && element < rightChildElement) ||
          (swap != null && rightChildElement > leftChildElement)
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
