/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    //   let node = new TreeNode();
    //   let sum = 0;
    if (!this.root){
        return 0;
    }
    let sum = this.root.val;
    // get helper function here so that it helps to use TreeNode
    function helper(node){
      for(let item of node.children){
          // get all the values
          sum += item.val;
          //if a child has its child
          if(child.children.length > 0){
              // do a recursive func call
              helper(item)
          }
      }
    }
    helper(this.root);
    return sum;
    // instantiate TreeNode
    //   const node = new TreeNode()
    
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root){
        return 0;
    }
    let count = this.root.val % 2 === 0 ? 1 : 0;

    function helper(node){
        for(let child of node.children){
            if(child.val % 2 === 0){
                count += count;
            }
            if(child.children.length > 0){
                helper(child);
            }
        }
    }
    helper(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
      if(!this.root){
          return 0;
      }
      let count = this.root.val > lowerBound ? 1 : 0;

      function helper(node){
          for(let child of node.children){
              if(child.val > lowerBound){
                  count += count;
              }
              if(child.children.length > 0){
                  helper(child);
              }
          }
      }
      helper(this.root);
      return count;

  }
}

module.exports = { Tree, TreeNode };
