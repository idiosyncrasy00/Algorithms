class TreeNode {
  public key = null;
  public left: any;
  public right: any;
  constructor(value: any) {
    this.key = value;
    this.left = null;
    this.right = null;
  }
}

let root = new TreeNode(3);
root.left = new TreeNode(4);
root.left.left = new TreeNode(5);

