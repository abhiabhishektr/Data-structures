// Define a Node for the BST
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
        this.root = newNode; // If tree is empty, make new node the root
      } else {
        this.insertNode(this.root, newNode); // Otherwise, call helper function
      }
    }
  
    // Helper function for insertion
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (!node.left) {
          node.left = newNode; // If no left child, insert here
        } else {
          this.insertNode(node.left, newNode); // Else, recursively insert left
        }
      } else {
        if (!node.right) {
          node.right = newNode; // If no right child, insert here
        } else {
          this.insertNode(node.right, newNode); // Else, recursively insert right
        }
      }
    }
  
    // Inorder traversal
    inorder(node = this.root) {
      if (!node) return; // Base case: if node is null, return
      this.inorder(node.left); // Recursively traverse left subtree
      console.log(node.value); // Print value of current node
      this.inorder(node.right); // Recursively traverse right subtree
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
  
  // Perform inorder traversal (prints values in sorted order)
  console.log("Inorder traversal:");
  bst.inorder();
  