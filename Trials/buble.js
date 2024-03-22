// function quickSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }
//     let pivot = arr[0];
//     let right = [];
//     let left = [];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }
//     return quickSort(left).concat(pivot, quickSort(right));
// }

// let arr = [64, 34, 25, 12, 22, 11, 90];
// console.log(quickSort(arr));

// function mergeSort(arr) {
//     if (arr.length<=1) {
//         return arr
//     }
//     let middle=Math.floor(arr.length/2);
//     let left=arr.slice(0,middle);
//     let right=arr.slice(middle)

//     return merge (mergeSort(left),mergeSort(right))
// }

// function merge(left,right) {
//     let result=[];
//     let leftIndex=0;
//     let rightIndex=0

//     while (leftIndex<left.length && rightIndex<right.length) {
//         if (left[leftIndex]<right[rightIndex]) {
//             result.push(left[leftIndex])
//             leftIndex++;
//         } else {
//             result.push(right[rightIndex])
//             rightIndex++;
//         }
//     }
//     return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
// }

// let mergeSortedArray = mergeSort([64, 34, 25, 12, 22, 11, 90]);
// console.log("Merge Sort:", mergeSortedArray);

// class Node{
//   constructor(element){
//     this.element=element;
//     this.next=null
//   }
// }
// class Stack{
//   constructor(){
//     this.top=null;
//     this.size=0
//   }
//   push(element){
//     let newNode=new Node(element);
//     newNode.next=this.top;
//     this.top=newNode;
//     this.size++;
//   }
//   pop(){
//     let temp=this.top.element
//     this.top=this.top.next
//     this.size--
//     return temp
//   }
// print(){
//   let current=this.top
//   while (current) {
//     console.log(current.element);
//     current=current.next
//   }
// }

// }

// let stack=new Stack;
// stack.push(1)
// stack.push(2)

// stack.push(3)
// stack.pop()
// stack.print()

class Node {
    constructor(data) {
        this.data = data;
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
        if (this.rear == null) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }
    //  F =============== R
    Qpop() {
        let temp = this.front.data;
        this.front = this.front.next;
        this.size--;
        return temp;
    }
    print() {
        let current = this.front;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

let queue = new Queue();
queue.Qpush(6);
queue.Qpush(2);
queue.Qpush(2);
queue.Qpush(2);
queue.Qpush(2);

console.log("queue.Qpop()", queue.Qpop());
queue.Qpop();
queue.print();
