/** 
 * The question for this problem can be found here: 
 * https://leetcode.com/problems/find-center-of-star-graph/
 */


/**
 * - Time Complexity: O(n) 
 * - Space Complexity: O(n)
 * - create a set to keep track of nodes seen
 * - iterate over edge list until node appears more than once
 */
const findCenter = (edges) => {

  let nodesSeen = new Set();
   for(let pair of edges){
       let [a, b] = pair;
       if(nodesSeen.has(a)) return a;
       if(nodesSeen.has(b)) return b;
       nodesSeen.add(a);
       nodesSeen.add(b)
   }
};

/**
 * - Time Complexity: O(1) 
 * - Space Complexity: O(1)
 * - get values of first two pairs
 * - compare the values to return the number that appears more than once.
 */
const findCenterOptimized = (edges) => {
    let  [u1, v1] = edges[0];
    let [u2, v2] = edges[1];

    return (u1 === u2) ? u2 : (u1 === v2) ? v2 : v1;
}