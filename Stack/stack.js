class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      //   var temp = this.first;
      //   this.first = newNode;
      //   this.first.next = temp;
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }
  pop() {
      if(!this.first) return null
      if(this.size ==1){
          this.last= null
      }
      var temp = this.first;
      this.first= temp.next
      this.size--
      return temp
  }
}

var stack = new Stack()

