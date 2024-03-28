
//=============== Min Heap ============
////===== Max heap is the condition is just less Than ===
// if (parentIndex >= 0 && this.heap[parentIndex] > this.heap[index]) {
class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        // Add the new element to the end of the array
        this.heap.push(value);

        // Bubble up the new element to its correct position
        this.bubbleUp(this.heap.length - 1);
    }

    bubbleUp(index) {
        // Get the parent index of the current element
        const parentIndex = Math.floor((index - 1) / 2);

        // Base case: if we've reached the root or if the parent is less than the current element
        if (parentIndex >= 0 && this.heap[parentIndex] > this.heap[index]) {
            // Swap the current element with its parent
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];

            // Recursively bubble up the element until it reaches its correct position
            this.bubbleUp(parentIndex);
        }
    }                                                                     

}

// Example usage:
const heap = new MinHeap();
heap.insert(5);
heap.insert(3);
heap.insert(10);
heap.insert(15);
heap.insert(100);
heap.insert(425);
heap.insert(43);
heap.insert(1);
// heap.print()
console.log(heap.heap)
// console.log(heap.heap[heap.heap.length-1]); // Output: [1, 3, 10, 5]


