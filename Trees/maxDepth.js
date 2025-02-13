/** 
 * The question for this problem can be found here: 
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 */


/**
 * - Time Complexity: O(n) 
 * - Space Complexity: O(n)
 * - uses recursion to return the max path
 *   of the right vs. left subtree
 */

const maxDepth = (root) => {
    if(root === null) return 0;
 
    let left =1 + maxDepth(root.left);
    let right = 1 + maxDepth(root.right);
 
    return Math.max(left, right);
 };