class MaxHeap {
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

        // Base case: if we've reached the root or if the parent is greater than the current element
        if (parentIndex >= 0 && this.heap[parentIndex] < this.heap[index]) {
            // Swap the current element with its parent
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];

            // Recursively bubble up the element until it reaches its correct position
            this.bubbleUp(parentIndex);
        }
    }

    removeMax() {
        if (this.heap.length === 0) {
            return null; // Heap is empty
        }

        // Swap the root (max element) with the last element
        [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];

        // Remove the last element (previously the root)
        const max = this.heap.pop();

        // Heapify down from the root to maintain the heap property
        this.heapifyDown(0);

        return max;
    }

    heapifyDown(index) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let largestIndex = index;

        // Compare the current node with its left child
        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largestIndex]) {
            largestIndex = leftChildIndex;
        }

        // Compare the current node with its right child
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largestIndex]) {
            largestIndex = rightChildIndex;
        }

        // If the largest element is not the current node, swap them and continue heapifying down
        if (largestIndex !== index) {
            [this.heap[index], this.heap[largestIndex]] = [this.heap[largestIndex], this.heap[index]];
            this.heapifyDown(largestIndex);
        }
    }
    remove(value) {
        const index = this.heap.indexOf(value);
        if (index === -1) return false;
        [this.heap[index], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[index]];
        const removedElement = this.heap.pop();
        if (index < this.heap.length) this.heapify(index);
        return removedElement;
    }
    
}


// Creating a new MaxHeap instance
const maxHeap = new MaxHeap();

// Inserting elements into the heap
maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(15);
maxHeap.insert(20);
maxHeap.insert(7);

// Printing the heap after insertion
console.log("Heap after insertion:", maxHeap. heap);

// Removing the maximum element (root) from the heap
const removedMax = maxHeap.removeMax();
console.log("Removed max element:", removedMax);
console.log("Heap after removing max element:", maxHeap.heap);
