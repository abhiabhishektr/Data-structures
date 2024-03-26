class FenwickTree {
    constructor(size) {
        this.size = size;
        this.tree = new Array(size + 1).fill(0);
    }

    // Add delta to element at index
    update(index, delta) {
        while (index <= this.size) {
            this.tree[index] += delta;
            index += index & -index; // Move to next higher index
        }
    }

    // Sum of elements in [1, index] range
    query(index) {
        let sum = 0;
        while (index > 0) {
            sum += this.tree[index];
            index -= index & -index; // Move to parent index
        }
        return sum;
    }
}

// Example usage:
const nums = [1, 3, 5, 7, 9, 11];
const fenwick = new FenwickTree(nums.length);

// Construct Fenwick Tree
for (let i = 0; i < nums.length; i++) {
    fenwick.update(i + 1, nums[i]);
}

// Query sum in [1, 3] range
console.log("Sum of elements in [1, 3]:", fenwick.query(3));

// Update element at index 2
const delta = 2;
fenwick.update(2, delta);

// Query sum in [1, 4] range after update
console.log("Sum of elements in [1, 4]:", fenwick.query(4));
