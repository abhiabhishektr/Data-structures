// Define the Node class for BST
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Define the Binary Search Tree class
class BST {
    constructor() {
        this.root = null;
    }

    // Insertion operation
    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            let current = this.root;
            while (true) {
                if (value < current.value) {
                    if (!current.left) {
                        current.left = newNode;
                        break;
                    }
                    current = current.left;
                } else if (value > current.value) {
                    if (!current.right) {
                        current.right = newNode;
                        break;
                    }
                    current = current.right;
                } else {
                    // Value already exists in the tree
                    break;
                }
            }
        }
    }

    // Search operation
    contains(value) {
        let current = this.root;
        while (current) {
            if (value === current.value) {
                return true;
            } else if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    // Deletion operation
    // Deletion operation
    delete(value) {
        this.root = this._deleteNode(this.root, value);
    }

    _deleteNode(root, value) {
        if (!root) return null;

        // Search for the node to delete
        if (value < root.value) {
            root.left = this._deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this._deleteNode(root.right, value);
        } else {
            // Case 1: No child or only one child
            if (!root.left) return root.right;
            if (!root.right) return root.left;

            // Case 2: Node with two children
            // Find the inorder successor (smallest in the right subtree)
            root.value = this._minValue(root.right);

            // Delete the inorder successor
            root.right = this._deleteNode(root.right, root.value);
        }

        return root;
    }

    _minValue(node) {
        let minValue = node.value;
        while (node.left) {
            minValue = node.left.value;
            node = node.left;
        }
        return minValue;
    }

    // Preorder traversal
    preorder(node = this.root) {
        if (!node) return;
        console.log(node.value);
        this.preorder(node.left);
        this.preorder(node.right);
    }

    // Inorder traversal
    inorder(node = this.root) {
        if (!node) return;
        this.inorder(node.left);
        console.log(node.value);
        this.inorder(node.right);
    }

    // Postorder traversal
    postorder(node = this.root) {
        if (!node) return;
        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.value);
    }

    // Closest value to a given number
    closestValue(target) {
        // TODO: Implement closest value search
        //       // Closest value to a given number
        // closestValue(target) {
        //   let closest = this.root.value;
        //   let current = this.root;
        //   while (current) {
        //       if (Math.abs(current.value - target) < Math.abs(closest - target)) {
        //           closest = current.value;
        //       }
        //       if (target < current.value) {
        //           current = current.left;
        //       } else if (target > current.value) {
        //           current = current.right;
        //       } else {
        //           break; // Found exact match
        //       }
        //   }
        //   return closest;
        // }
    }

    // Validation - Check if the tree is a BST
    isValidBST(node = this.root, min = null, max = null) {
        if (!node) return true;
        if ((min !== null && node.value <= min) || (max !== null && node.value >= max)) {
            return false;
        }
        return this.isValidBST(node.left, min, node.value) && this.isValidBST(node.right, node.value, max);
    }
}

// Create a sample BST
const bst = new BST();
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(4);
bst.insert(7);
bst.insert(14);
bst.insert(13);

// Perform operations
console.log("Preorder traversal:");
bst.preorder();
console.log("Inorder traversal:");
bst.inorder();
console.log("Postorder traversal:");
bst.postorder();
console.log("Does the tree contain 6?", bst.contains(6));
console.log("Is the tree a valid BST?", bst.isValidBST());

// function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
// }

// function inorderTraversal(root) {
//     if (!root) return [];

//     let result = [];

//     const traverse = function(node) {
//         if (node.left) traverse(node.left);
//         result.push(node.val);
//         if (node.right) traverse(node.right);
//     };

//     traverse(root);

//     return result;
// }

// function preorderTraversal(root) {
//     if (!root) return [];

//     let result = [];

//     const traverse = function(node) {
//         result.push(node.val);
//         if (node.left) traverse(node.left);
//         if (node.right) traverse(node.right);
//     };

//     traverse(root);

//     return result;
// }

// function postorderTraversal(root) {
//     if (!root) return [];

//     let result = [];

//     const traverse = function(node) {
//         if (node.left) traverse(node.left);
//         if (node.right) traverse(node.right);
//         result.push(node.val);
//     };

//     traverse(root);

//     return result;
// }

// // Creating a simple binary tree for testing
// let root = new TreeNode(5);
// root.left = new TreeNode(3);
// root.right = new TreeNode(8);
// root.left.left = new TreeNode(2);
// root.left.right = new TreeNode(4);
// root.right.left = new TreeNode(7);
// root.right.right = new TreeNode(9);

// // Test the traversals
// console.log("Inorder traversal:", inorderTraversal(root)); // Output should be [2, 3, 4, 5, 7, 8, 9]
// console.log("Preorder traversal:", preorderTraversal(root)); // Output should be [5, 3, 2, 4, 8, 7, 9]
// console.log("Postorder traversal:", postorderTraversal(root)); // Output should be [2, 4, 3, 7, 9, 8, 5]
