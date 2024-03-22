class Node{
    constructor(data,next=null){
this.data=data;
this.next=next
    }
}


// 24 20 7

function print(head) {
    let current=head
    while (current) {
        console.log(current.data);
        current=current.next
    }
    
}

function palindrome(list) {
let current=list
let s1=s2=''
while (current!=null) {
    s1=`${current.data}${s1}`
    s2=`${s2}${current.data}`
    current=current.next
}
console.log(s1);
console.log(s2);
return s1 ==s2 ?console.log("yes"):console.log("No")
    
}

let list = new Node(4,new Node(20,new Node(4)))
// print(list);
palindrome(list)

