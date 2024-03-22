class Stack{
    constructor(){
        this.items=[]
    }
    push(ele){
this.items.push(ele)
    }
    print(){
        console.log(this.items);
    }
}
let stack=new Stack

stack.push(1)
stack.push(3)
stack.push(2)
stack.push(7)
stack.print()