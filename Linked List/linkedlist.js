class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class Linkedlist {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    print() {
        let current = this.head;  
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    insertLast(data) {
        let node = new Node(data);
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
        this.size++;
    }

    insertAt(data, index) {
        let count = 0;
        let current = this.head,
            previous;
        let node = new Node(data);
        while (index > count) {
            previous = current;
            current = current.next;
            count++;
        }

        node.next = current;
        previous.next = node;
        this.size++;
    }

    getAt(index) {
        let current = this.head;

        let count = 0;
        while (index > count) {
            current = current.next;
            count++
        }
        console.log(current.next   .data);
    }
}

let a = new Linkedlist();
a.insertFirst(10);
a.insertFirst(21);
a.insertFirst(32);
a.insertFirst(43);
a.insertLast(54);
// a.insertAt(19, 1);
a.getAt(2)

// a.print();
