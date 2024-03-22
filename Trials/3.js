class MaxHeap{
    constructor(){
        this.heap=[];
    }


    insert (value){
        this.heap.push(value);
        this.bubble(this.heap.length-1);
    }

    bubble(index){
        const parent=Math.floor((index-1)/2);

        if (parent>=0 && this.heap[parent]<this.heap[index]) {
            
            [this.heap[parent],this.heap[index]]=[this.heap[index],this.heap[parent]]

            this.bubble(parent)
            
        }
        
    }


    removeMax(){
        if (this) {
            
        }
    }
}