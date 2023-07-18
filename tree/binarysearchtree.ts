import { TreeNode } from "./binarytree";

//https://www.youtube.com/watch?v=RZfIIsI9ckM

class BinarySearchTree {
  public head: TreeNode | null;
  constructor(head?: TreeNode) {
    this.head = head || null;
    //console.log("Data is ", this.head?.data);
  }

  public insert(node: TreeNode | null = this.head, value: number): TreeNode {
    if (node === null) {
      const root = new TreeNode(value);
      return root;
    } else {
      if (value < node.data) {
        node.left = this.insert(node.left, value);
      } else {
        node.right = this.insert(node.right, value);
      }
      return node;
    }
  }

  public inOrderTraversal(root: TreeNode | null = this.head): void {
    let temp = root;
    if (temp !== null) {
      this.inOrderTraversal(temp.left);
      console.log(temp.data);
      this.inOrderTraversal(temp.right);
    } else {
      return;
    }
  }

  public preOrderTraversal(root: TreeNode | null = this.head): void {
    let temp = root;
    if (temp !== null) {
      console.log(temp.data);
      this.inOrderTraversal(temp.left);
      this.inOrderTraversal(temp.right);
    } else {
      return;
    }
  }

  public postOrderTraversal(root: TreeNode | null = this.head): void {
    let temp = root;
    if (temp !== null) {
      this.inOrderTraversal(temp.left);
      this.inOrderTraversal(temp.right);
      console.log(temp.data);
    } else {
      return;
    }
  }
}

const rootNode = new TreeNode(30);

// rootNode.left = new TreeNode(20);
// rootNode.right = new TreeNode(40);
// rootNode.left.right = new TreeNode(45);

// rootNode.right = new TreeNode(60);
// rootNode.right.left = new TreeNode(70);
// rootNode.right.right = new TreeNode(65);

let bst = new BinarySearchTree(rootNode)
bst.insert(bst.head, 40);
bst.insert(bst.head, 50);
bst.insert(bst.head, 60);
bst.insert(bst.head, 25);
bst.insert(bst.head, 35);
bst.insert(bst.head, 20);
bst.insert(bst.head, 15);
bst.insert(bst.head, 37);
bst.insert(bst.head, 45);

console.log(JSON.stringify(rootNode, null, 2));

// console.log("Inorder traversal: ")
// bst.inOrderTraversal()
// console.log("Preorder traversal: ")
// bst.preOrderTraversal()
// console.log("Postorder traversal: ")
// bst.postOrderTraversal()
