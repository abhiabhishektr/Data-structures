class TreeNode{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}


class BST{
    constructor(){
        this.root=null;
    }

    insert(value){
        const newNode=new TreeNode(value);
        if (!this.root) {
            this.root=newNode;
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(node,newNode){
        if (newNode.value<node.value) {
            if (!node.left) {
                node.left=newNode
            } else {
                this.insertNode(node.left,newNode)
            }
        } else {
            if (!node.right) {
                node.right=newNode;
            } else {
                this.insertNode(node.right,newNode)
            }
        }
    }
    inorder(node=this.root){
        if(!node) return;
        this.inorder(node.left)
        console.log(node.value);
        this.inorder(node.right);
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