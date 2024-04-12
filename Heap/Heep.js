class MaxHeap {
    constructor() {
      // Initialize an empty array to store the elements of the heap
      this.heap = [];
    }
  
    // Function to swap two elements in the heap
    swap(index1, index2) {
      // ES6 destructuring assignment to swap elements at specified indices
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
  
    // Function to get the parent index of a given index
    getParentIndex(index) {
      // Parent index can be calculated using integer division
      return Math.floor((index - 1) / 2);
    }
  
    // Function to insert a new element into the heap
    insert(value) {
      // Add the new element to the end of the heap array
      this.heap.push(value);
      let currentIndex = this.heap.length - 1;
  
      // Bubble up the new element to its correct position
      while (currentIndex > 0 && this.heap[currentIndex] > this.heap[this.getParentIndex(currentIndex)]) {
        // Swap the current element with its parent if it's greater, and update the current index
        this.swap(currentIndex, this.getParentIndex(currentIndex));
        currentIndex = this.getParentIndex(currentIndex);
      } 
    }
  
    // Function to heapify a subtree rooted at a given index
    heapify(index) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let largest = index;
  
      // Check if left child exists and is greater than the current node
      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largest]) {
        largest = leftChildIndex;
      }
  
      // Check if right child exists and is greater than the current largest
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largest]) {
        largest = rightChildIndex;
      }
  
      // If the largest element is not the current node, swap them and continue heapifying
      if (largest !== index) {
        this.swap(index, largest);
        this.heapify(largest);
      }
    }
  
    // Function to remove and return the maximum element from the heap
    removeMax() {
      if (this.heap.length === 0) return null;
  
      // Swap the root (max element) with the last element
      this.swap(0, this.heap.length - 1);
      const max = this.heap.pop();
  
      // Heapify the root to maintain the heap property
      this.heapify(0);
  
      return max;
    }
  
    // Function to get the maximum element in the heap
    getMax() {
      // Return the root element of the heap (maximum element)
      return this.heap.length > 0 ? this.heap[0] : null;
    }
  
    // Function to visualize the heap as a tree
    visualize() {
        // Helper function to recursively print each level of the tree
        const printTree = (index, prefix, isLeft) => {
            if (index < this.heap.length) {
                // Print the current node along with appropriate prefix to visualize the tree structure
                console.log(prefix + (isLeft ? "├── " : "└── ") + this.heap[index]);
                // Recursively print the left subtree with appropriate prefix
                printTree(2 * index + 1, prefix + (isLeft ? "│   " : "    "), true);
                // Recursively print the right subtree with appropriate prefix
                printTree(2 * index + 2, prefix + (isLeft ? "│   " : "    "), false);
            }
        };
    
        // Start printing from the root (index 0) with an empty prefix
        printTree(0, "", true);
    }
    print(){
      console.log(this.heap);
    }
}

  
// Example usage:
const maxHeap = new MaxHeap();

// Insert elements into the heap
maxHeap.insert(5);            
maxHeap.insert(10);
maxHeap.insert(8);
maxHeap.insert(21);
maxHeap.insert(150);
maxHeap.insert(20);
maxHeap.print()
// console.log("Max heap after insertion:");
maxHeap.visualize(); 
// /* 
// Output: 
// 20 
// 15 10 
// 8 5 
// */

// // Remove the maximum element from the heap
// const maxElement = maxHeap.removeMax();
// console.log("Removed max element:", maxElement); // Output: 20

// console.log("Max heap after removing max element:");
// maxHeap.visualize(); 
// /* 
// Output after removal of max element:
// 15 
// 10 5 
// 8 
// */

// // Get the maximum element in the heap
const max = maxHeap.getMax();
console.log("Maximum element in the heap:", max); // Output: 15
