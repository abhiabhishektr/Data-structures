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

    // insert

    insertData(data) {
        let node = new Node(data, this.head);
        this.head = node;
        this.size++;
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    isPalindrome() {
        // Helper function to reverse a linked list
        const reverseLinkedList = (head) => {
            let prev = null;
            let current = head;

            while (current) {
                let next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }

            return prev;
        };

        // Find the middle of the linked list
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Reverse the second half
        let reversedSecondHalf = reverseLinkedList(slow);

        // Compare the reversed second half with the first half
        let firstHalf = this.head;
        while (reversedSecondHalf) {
            if (firstHalf.data !== reversedSecondHalf.data) {
                return false;
            }
            firstHalf = firstHalf.next;
            reversedSecondHalf = reversedSecondHalf.next;
        }

        return true;
    }
}

let a = new Linkedlist();

a.insertData(0);
a.insertData(1);
a.insertData(2);
a.insertData(1);
a.insertData(0);
console.log(a.isPalindrome());

