class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}


class Linkedlist{
    constructor(){
        this.head=null
        this.size=0
        this.tail=null
    }

    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }
        else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }

    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }
        else{

            this.tail.next=node
            node.prev=this.tail
            this.tail=node

        }

        this.size++
    }
    isEmpty(){
        return this.size===0
        }
    print(){
        if(this.isEmpty()){
            return null
        }
        let cur=this.head
        let listvalues=''
        while(cur){
            listvalues+= `${cur.value} `
            cur=cur.next
        }
        console.log(listvalues)
    }
    removefront(){
        if(this.isEmpty()){
            console.log('the list is empty')
            return null
        }
        else{
            this.head=this.head.next
            this.head.prev=null
            this.size--
        }
        
    }
    removeend(){
        if(this.isEmpty()){
            console.log('the list is empty')
            return null
        }
        else if(this.size===1){
            this.head=null
            this.tail=null
            this.size--
        }
        else{
            this.tail=this.tail.prev
            this.tail.next=null
            this.size--
        }
    }
    reverse(){
        if(this.isEmpty()){
            return null
        }
        else{
            let prev=null
            let cur=this.head
            this.tail=cur
            while(cur.next){
                let next=cur.next
                cur.next=prev
                prev=cur
                cur=next
                
            }
            this.head=prev
        }

    }
}

const list=new Linkedlist()

list.prepend(1)
list.prepend(2)
list.prepend(3)
list.prepend(4)
list.append(0)

list.reverse()
list.print()