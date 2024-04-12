class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function isValidBST(root, min = -Infinity, max = Infinity) {
    if (!root) return true;
    if (root.value <= min || root.value >= max) return false;
    return isValidBST(root.left, min, root.value) && isValidBST(root.right, root.value, max);
}


function findClosestValue(target,root) {
    let closest = root.value; // Initialize closest to root value
    let currentNode = root;

    while (currentNode) {
        // Update closest if the current node is closer to the target
        if (Math.abs(currentNode.value - target) < Math.abs(closest - target)) {
            closest = currentNode.value;
        }

        // Traverse left or right based on target value
        if (target < currentNode.value) {
            currentNode = currentNode.left;
        } else if (target > currentNode.value) {
            currentNode = currentNode.right;
        } else {
            break; // Found exact match, no need to continue
        }
    }

    return closest;
}

// Example usage:
const bst = new TreeNode(2);
bst.left = new TreeNode(1);
bst.right = new TreeNode(7);
console.log(findClosestValue(4,bst));

// console.log(isValidBST(bst)); // Output: true


// Search  

//sorted array to graph .
var searchBST = function(root, val) {
    if(!root || root.val == val) return root;
    if(val<root.val) return searchBST(root.left,val);
    return searchBST(root.right,val);
   };

   var sortedArrayToBST = function (nums) {
    if (nums.length === 0) {
        return null;
    }
    const midIndex = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[midIndex]);

    root.left = sortedArrayToBST(nums.slice(0, midIndex));
    root.right = sortedArrayToBST(nums.slice(midIndex + 1));

    return root;
}