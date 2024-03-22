class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next
    }
}

function print(head) {
    let current=head
    while (current) {
        console.log(current.data);
        current=current.next
        
    }
    return head
}

function del(head) {
    let slow=head;
    let fast=head

    while (fast && fast.next ) {
        slow=slow.next;
        fast=fast.next.next;
    }
  slow.next=slow.next.next
  return slow
}

function reverse(slow) {
    
let current=slow;
let prev=null
// 1 2 3 4 5
while (current) {
    let temp=current.next
    current.next=prev;
    prev=current
    current=temp
}
return prev
}

function insertFirst(list,ele){

let node=new Node(ele)
node.next=list
    return node
}

function insertAt(list, index, ele) {


if (index==0) {
let node =new Node(ele,list);
return node
}


    let current=list
    for (let i = 1; i < index; i++) {

        current=current.next
    }

let node=new Node(ele,current.next);
current.next=node

return list
}


let list  = new Node(1,new Node(2,new Node(3,new Node(4,new Node(5,new Node(6,new Node(7)))))))
// print(reverse(list))
// print(list)
// insertFirst(list,2)
// print(insertFirst(list,2))

print(insertAt(list, 3, 500) )