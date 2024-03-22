class Node {
    constructor(data, prev = null, next = null) {
      this.data = data;
      this.prev = prev;
      this.next = next;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    // Insert at the beginning of the list
    insertFirst(data) {
      const newNode = new Node(data, null, this.head);
  
      if (this.head) {
        this.head.prev = newNode;
      } else {
        // If the list is empty, the new node is also the tail
        this.tail = newNode;
      }
  
      this.head = newNode;
      this.size++;
    }
  
    // Insert at the end of the list
    insertLast(data) {
      const newNode = new Node(data, this.tail, null);
  
      if (this.tail) {
        this.tail.next = newNode;
      } else {
        // If the list is empty, the new node is also the head
        this.head = newNode;
      }
  
      this.tail = newNode;
      this.size++;
    }
  
    // Print list data in both directions
    printListData() {
      let currentForward = this.head;
      let currentBackward = this.tail;
  
      console.log("Forward:");
      while (currentForward) {
        console.log(currentForward.data);
        currentForward = currentForward.next;
      }
  
      console.log("Backward:");
      while (currentBackward) {
        console.log(currentBackward.data);
        currentBackward = currentBackward.prev;
      }
    }
  
    // Insert at a specific index
    insertAt(data, index) {
      if (index > 0 && index > this.size) {
        return;
      }
  
      if (index === 0) {
        this.insertFirst(data);
        return;
      }
  
      const newNode = new Node(data);
      let current = this.head;
      let count = 0;
  
      while (count < index) {
        current = current.next;
        count++;
      }
  
      newNode.prev = current.prev;
      newNode.next = current;
      current.prev.next = newNode;
      current.prev = newNode;
  
      this.size++;
    }
  
    // Get data at a specific index
    getAt(index) {
      if (index >= 0 && index < this.size) {
        let current = this.head;
        let count = 0;
  
        while (count < index) {
          current = current.next;
          count++;
        }
  
        console.log(current.data);
      } else {
        console.log("Index out of bounds");
      }
    }
  
    // Remove at a specific index
    removeAt(index) {
      if (index >= 0 && index < this.size) {
        let current = this.head;
  
        if (index === 0) {
          this.head = current.next;
  
          if (this.head) {
            this.head.prev = null;
          } else {
            this.tail = null;
          }
        } else {
          let count = 0;
  
          while (count < index) {
            current = current.next;
            count++;
          }
  
          current.prev.next = current.next;
  
          if (current.next) {
            current.next.prev = current.prev;
          } else {
            this.tail = current.prev;
          }
        }
  
        this.size--;
      } else {
        console.log("Index out of bounds");
      }
    }
  
    // Clear the list
    clearList() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  }
  
  // Example usage
  const dll = new DoublyLinkedList();
  
  dll.insertFirst(100);
  dll.insertFirst(200);
  dll.insertFirst(300);
  dll.insertFirst(400);
  dll.insertLast(900);
  dll.insertAt(500, 2);
  dll.removeAt(2);
  
  dll.printListData();
  dll.getAt(0);
  