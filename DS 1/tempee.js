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

    // ==========================

    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    // ===========================

    insertLast(data) {
        let node = new Node(data);
        let current;

        if (!this.head) {
            this.head = head;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    //=============my methode=======
    last(data) {
        let current = this.head;
        let node = new Node(data);
        let length = this.size;
        for (let i = 0; i < length; i++) {
            current = current.next;
        }
        // console.log(current.data);
        if (current) {
            current.next = node;
            this.size++;
        } else {
            // Handle the case when the linked list is empty
            this.head = node;
            this.size++;
        }
    }

    // ===============

    getAt(index) {
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        console.log(current.data);
    }

    // ================================

    insertAt(data, index) {
        if (index > 0 && index > this.size) {
            console.log("nothing is there");
            return;
        }
        if (index == 0) {
            console.log("Its moving up");
            this.insertFirst(data);
            return;
        }
        let current, previous;
        current = this.head;
        const node = new Node(data, this.head);

        for (let i = 0; i < index; i++) {
            previous = current;
            current = current.next;
        }
        node.next = current;
        previous.next = node;

        this.size++;
    }

    // =========================
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            console.log("Index out of bounds");
            return;
        }
        let current = this.head;
        let previous;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        previous = current;
        current = current.next;
        previous.next = current.next;
        this.size--;
    }

    // ==========================
    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    trial() {
        console.log(this.size);
    }
}

const ll = new Linkedlist();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
// ll.insertLast(400);
// ll.insertLast(400);
ll.insertFirst(504);
ll.insertFirst(503);
ll.insertFirst(502);
ll.insertFirst(501);
// ll.insertAt(150, 0);
// ll.removeAt(2);
ll.print();
console.log("==============");
ll.last(400);
// ll.getAt(3)
// ll.trial()
ll.print();
// ll.getAt(3)
