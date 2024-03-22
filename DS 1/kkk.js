class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

//pre=null //
//   <-- (pre) 0 ===  (curent)(next) 2 === 1 === 4 === null

function reverse(head) {
    let current = head;
    let pre = null;
    let next;
    while (current != null) {
        next = current.next;
        current.next = pre;
        pre = current;
        current = next;
    }
    return pre;
}

function print(head) {
    let node = head;
    while (node != null) {
        console.log(node.data);
        node = node.next;
    }
}

const list = new Node("1", new Node("2", new Node("3", new Node("4", new Node("5", new Node("6"))))));

// print(list)
// console.log(palindrome(list));
// print(list)
// console.log('====================');
print(reverse(list));

// function palindrome(head) {
//     let node = head;
//     let s1=s2=''
//     while (node!=null) {
//         s1=`${s1}${node.data}`
//         s2=`${node.data}${s2}`
//         node=node.next
//     }
//     console.log("s1",s1);
//     console.log("s2",s2);

//     if ( s1.toLowerCase()==s2.toLowerCase()) {
//         return 'true'
//     }
//     return 'false'
// }
