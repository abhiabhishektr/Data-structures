class Queue {
    constructor() {
      this.items = {};
      this.frontIndex = 0;
      this.rearIndex = -1;
    }
  
    enqueue(item) {
      this.rearIndex++;
      this.items[this.rearIndex] = item;
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
  
      const frontItem = this.items[this.frontIndex];
      delete this.items[this.frontIndex];
      this.frontIndex++;
  
      return frontItem;
    }
  
    peek() {
      return this.isEmpty() ? null : this.items[this.frontIndex];
    }
  
    size() {
      return Math.max(0, this.rearIndex - this.frontIndex + 1);
    }
  
    isEmpty() {
      return this.size() === 0;
    }
  }
  
  // Sample Usage
  const objQueue = new Queue();
  objQueue.enqueue(10);
  objQueue.enqueue(20);
  objQueue.enqueue(30);
  
  console.log("Dequeue:", objQueue.dequeue()); // Output: 10
  console.log("Peek:", objQueue.peek());         // Output: 20
  console.log("Queue Size:", objQueue.size());   // Output: 2
  