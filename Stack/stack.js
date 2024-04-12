// Stack implementation in JavaScript

class Stack {
    constructor() {
      this.items = [];
    }
  
    // Push: Adds an element to the top of the stack
    push(element) {
      this.items.push(element);
    }
  
    // Pop: Removes and returns the top element from the stack
    pop() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.pop();
    }
  
    // Display: Prints the elements of the stack
    display() {
      console.log(this.items);
    }
  
    // Helper method: Checks if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  // Sample workouts for Stack
  let stack = new Stack();
  
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.display(); // Output: [1, 2, 3]
  
  stack.pop();
  stack.display(); // Output: [1, 2]
  

  // class Node {
  //   constructor(element) {
  //     this.element = element;
  //     this.next = null;
  //   }
  // }
  
  // class Stack {
  //   constructor() {
  //     this.top = null;
  //   }
  
  //   push(element) {
  //     const newNode = new Node(element);
  //     newNode.next = this.top;
  //     this.top = newNode;
  //   }
  
  //   pop() {
  //     if (this.isEmpty()) {
  //       return "Underflow";
  //     }
  //     const poppedElement = this.top.element;
  //     this.top = this.top.next;
  //     return poppedElement;
  //   }
  
  //   display() {
  //     let current = this.top;
  //     const stackElements = [];
  //     while (current) {
  //       stackElements.push(current.element);
  //       current = current.next;
  //     }
  //     console.log(stackElements);
  //   }
  
  //   isEmpty() {
  //     return this.top === null;
  //   }
  // }
  
  // // Sample usage:
  // let stack = new Stack();
  
  // stack.push(1);
  // stack.push(2);
  // stack.push(3);
  // stack.display(); // Output: [3, 2, 1]
  
  // stack.pop();
  // stack.display(); // Output: [2, 1]
  

  // ==========================================================
// linked list Stack
// ==========================================================

class Node {
  constructor(element) {
      this.element = element;
      this.next = null;
  }
}

class Stack {
  constructor() {
      this.top = null;
      this.size = 0;
  }

  push(element) {
      let newNode = new Node(element);
      newNode.next = this.top;
      this.top = newNode;
      this.size++;
  }

  pop() {
      if (this.isEmpty()) {
          return "Stack Underflow";
      }
      let temp = this.top;
      this.top = this.top.next;
      this.size--;
      return temp.element;
  }

  print() {
      let current = this.top;
      while (current !== null) {
          console.log(current.element);
          current = current.next;
      }
  }

  isEmpty() {
      return this.size === 0;
  }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop());
stack.print();

// ==========================================================
// ==========================================================