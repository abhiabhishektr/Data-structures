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

    delete(value) {
      this.root = this.deleteNode(this.root, value);
    }
  
    deleteNode(node, value) {
      if (!node) {
        return null;
      }
  
      if (value < node.value) {
        node.left = this.deleteNode(node.left, value);
      } else if (value > node.value) {
        node.right = this.deleteNode(node.right, value);
      } else {
        if (!node.left && !node.right) {
          return null;
        } else if (!node.left) {
          return node.right;
        } else if (!node.right) {
          return node.left;
        } else {
          let minRightNode = this.findMinNode(node.right);
          node.value = minRightNode.value;
          node.right = this.deleteNode(node.right, minRightNode.value);
        }
      }
      return node;
    }
  
    findMinNode(node) {
      while (node.left) {
        node = node.left;
      }
      return node;
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
  console.log("Inorder traversal before deletion:");
  bst.inorder();
  
  // Delete node with value 3
  bst.delete(3);
  
  // Perform inorder traversal after deletion
  console.log("Inorder traversal after deletion:");
  bst.inorder();
  