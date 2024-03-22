class Node{
constructor(data,next=null){
    this.data = data;
    this.next = next;
}
}


function print(head) {
    let current=head;
    while (current) {
        console.log(current.data);
        current=current.next;
    }
}

 function palindrome  (head) {
    
    let fast=head;
    let slow=head
    while (fast && fast.next) {
        slow=slow.next;
        fast=fast.next.next;
    }

    let reversedList = reversed(slow);

    while (reversedList) {
        if (head.data!==reversedList.data) {
            return false
        }
    head=head.next;
    reversedList=reversedList.next;
    }

return true

}
// 1 2 3
// tcn cnp pc ct
function reversed(slow) {
    let prev=null
    let current=slow

    while (current) {
        let temp=current.next
        current.next=prev;
        prev=current;
        current=temp;
    }
    return prev
}

let List =new Node('A', new Node('B', new Node('C', new Node('D',new Node('D', new Node('C' ,new Node('B', new Node('A' ))))))))

console.log(palindrome(List));
console.log('===============');

print(List)