// let list2 = new Node(1000, new Node(1001, new Node(1002, new Node(1003, new Node(1004)))));
// let a = 2;
// let b = 5;
// let data = 6;

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// Example linked list: 1 -> 2 -> -3 -> 3 -> 1
let list1 = new Node(-1, new Node(-3, new Node(2, new Node(3, new Node(1)))));

function print(head) {
    while (head) {
        console.log(head.data);89
        head = head.next;
    }
}

var removeZeroSumSublists = function (head) {
    let current = head;
    let now,flag=1,pNow;
    let previous = null;
    while (current.next != null) {

        if (flag==0) {
            break
        }
        now = current;
        pNow=null
        while (now.next != null) {
            
            let temp = now.data + current.data;
            if (temp == 0) {
                previous.next = previous.next.next
                 pNow.next= pNow.next.next;
                // return head;
                flag=0;
                break
            }
            pNow=now
            now = now.next;
        }
        previous = current;
        current = current.next;
    }
 
return head
};

// Print the modified linked list
print(removeZeroSumSublists(list1));
// print(list1)












// var removeElements = function (head, data) {
//     let current = head;
//     while (current && current.next) {
//         if (current.next.data === data) {
//             current.next = current.next.next;
//         } else {
//             current = current.next;
//         }
//     }

//     return head;
// };

// var removeElements = function (head, data) {
//     let current = head;
//     while (current) {
//         if (current.data === data) {
//             let previous
//             current.next = current.next.next;
//         } else {
//             current = current.next;
//         }
//     }

//     return head;
// };

// // removeElements(list1, data);
// print(removeElements(list1, data));

// function join(list1, a, b, list2) {
//     let dummy = new Node();
//     dummy.next = list1;
//     print(dummy)
//     let nodeBeforeA = dummy;
//     for (let i = 0; i < a; i++) {
//         nodeBeforeA = nodeBeforeA.next;
//     }
//     console.log('nodeBeforeA',nodeBeforeA.data);

//     let nodeAfterB = nodeBeforeA;
//     for (let i = 0; i < b - a + 1; i++) {
//         nodeAfterB = nodeAfterB.next;
//     }
// console.log('nodeAfterB',nodeAfterB.data);
//     nodeBeforeA.next = list2;

//     while (list2.next) {
//         list2 = list2.next;
//     }

//     list2.next = nodeAfterB.next;

//     return dummy.next;

// }

// join(list1, a, b, list2);
// print(list1);
