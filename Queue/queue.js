// // Queue implementation in JavaScript

// class Queue {
//     constructor() {
//       this.items = [];
//     }
  
//     // Enqueue: Adds an element to the end of the queue
//     enqueue(element) {
//       this.items.push(element);
//     }
  
//     // Dequeue: Removes and returns the front element from the queue
//     dequeue() {
//       if (this.isEmpty()) {
//         return "Underflow";
//       }
//       return this.items.shift();
//     }
  
//     // Display: Prints the elements of the queue
//     display() {
//       console.log(this.items);
//     }
  
//     // Helper method: Checks if the queue is empty
//     isEmpty() {
//       return this.items.length === 0;
//     }
//   }
  
//   // Sample workouts for Queue
//   let queue = new Queue();
  
//   queue.enqueue(1);
//   queue.enqueue(2);
//   queue.enqueue(3);
//   queue.display(); // Output: [1, 2, 3]
  
//   queue.dequeue();
//   queue.display(); // Output: [2, 3]
// ``  

  // ==========================================================
// linked list Queue
// ==========================================================


class Node {
  constructor(element) {
      this.element = element;
      this.next = null;
  }
}

class Queue {
  constructor() {
      this.front = null;
      this.rear = null;
      this.size = 0;
  }

  Qpush(element) {
      let newNode = new Node(element);
      if (this.rear === null) {
          this.front = newNode;
          this.rear = newNode;
      } else {
          this.rear.next = newNode;
          this.rear = newNode;
      }
      this.size++;
  }

  Qpop() {
      if (this.size === 0) {
          return "Queue Underflow";
      }
      let temp = this.front.element;
      this.front = this.front.next;
      if (this.front === null) {
          this.rear = null;
      }
      this.size--;
      return temp;
  }
}

let queue = new Queue();
// queue.Qpush(4);
// queue.Qpush(2);
// queue.Qpush(1);
console.log(queue.Qpop());
