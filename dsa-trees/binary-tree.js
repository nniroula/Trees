/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    //   const binaryNode = new BinaryTree();
    if (!this.root){
        return 0;
    }
    // create a helper function to use BinaryTreeNode
    function helper(node){
        if(node.left === null && node.right === null){
            return 1;
        }
        if(node.left === null){
            return helper(node.right) + 1;
        }
        if(node.right === null){
            return helper(node.left) + 1;
        }
        return Math.min(helper(node.left), helper(node.right) + 1);
    }
    return helper(this.root);

  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
      if (!this.root){
          return 0;
      }

      function helper(node){
          if(node.left === null && node.right === null){
              return 1;
          }
          if(node.left === null){
              return helper(node.right) + 1;
          }
          if(node.right === null){
              return helper(node.left) + 1;
          }
          return Math.max(helper(node.left), helper(node.right)) + 1;
      }
      return helper(this.root);

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
      let result = 0;

      function helper(node){
          if(node === null){
              return 0;
          }
          let left_sum = helper(node.left);
          let right_sum = helper(node.right);
          result = Math.max(result, node.val + left_sum + right_sum);
          return Math.max(0, left_sum + node.val, right_sum + node.val);
      }
      helper(this.root);
      return result;

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {
      let val = [];

      function traverse(node){
          if(node){
              val.push(node.val);
              traverse(node.left);
              traverse(node.right);
          }
          else{
              val.push("#");
          }
      }
      traverse(tree.root);
      return val.join(" ");

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
