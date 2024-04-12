class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
} 

class LinkedListQueue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(item) {
        const newNode = new Node(item);
        if (!this.front) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }

    dequeue() {
        if (!this.front) {
            return null;
        }

        const frontItem = this.front.data;
        this.front = this.front.next;

        if (!this.front) {
            this.rear = null;
        }

        return frontItem;
    }

    peek() {
        return this.front ? this.front.data : null;
    }

    size() {
        let count = 0;
        let current = this.front;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    isEmpty() {
        return this.size() === 0;
    }
}

// Sample Usage
const llQueue = new LinkedListQueue();
llQueue.enqueue(10);
llQueue.enqueue(20);
llQueue.enqueue(30);

console.log("Dequeue:", llQueue.dequeue()); // Output: 10
console.log("Peek:", llQueue.peek()); // Output: 20
console.log("Queue Size:", llQueue.size()); // Output: 2
