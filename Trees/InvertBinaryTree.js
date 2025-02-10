

/** 
 * The question for this problem can be found here: 
 * https://leetcode.com/problems/invert-binary-tree/description/
 */


/**
 * - Time Complexity: O(n) 
 * - Space Complexity: O(n)
 * - uses a helper function to modify the tree
 * - returns root
 */
var invertTree = function(root) {
    modifyTree(root);
    return root;
};

/**
 * - takes in the root
 * - if root is null then return 
 * - swaps left and right subtree
 */
const modifyTree = (root) => {
    if(root === null) return;
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    modifyTree(root.left);
    modifyTree(root.right);
    return;
}