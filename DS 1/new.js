// class Node {
//     constructor(data, next = null) {
//         this.data = data;
//         this.next = next;
//     }
// }
// class linkedlist {
//     constructor() {
//         this.head = this.head;
//         this.s;
//     }
// }

// let list = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
// let arr = [1, 5, 3, 4];

// function print(head) {
//     let current = head;
//     while (current) { 
//         console.log(current.data);
//         current = current.next;
//     }
// }

// function deleteMid(head) {
//     let fast = head;
//     let slow = head;

//     while (fast && fast.next) {
//         slow = slow.next;
//         fast = fast.next.next;
//     }

//     slow.next = slow.next.next;
//     return head;
// }

// function laod(arr) {
//     let prev = null;
//     let current;
//     for (let i = 0; i < arr.length; i++) {
//         current = new Node(arr[i], prev);
//         prev = current;
//     }
//     return current;
// }

// // print(deleteMid(list))

// print(laod(arr));



class Node{
    constructor(data){
        this.data=data;
        this.next =next ;        
    }
}

class Queue{
    constructor(){
        this.front=null;
        this.rear=null;
        this.size=0
    }

    Qpush(element){
        let newNode=new Node(element)
        if (this.rear==null) {
            this.rear=newNode;
            this.front=newNode
        }else{
            this.rear.next=newNode
            this.rear=newNode
        }
        this.size++
    }


    Qpop(){
        let temp=this.front.data;
        this.front=this.front.next;
        this.size--;
        return temp
    }
    
}