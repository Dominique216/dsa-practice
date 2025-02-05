/** 
 * The question for this problem can be found here: 
 * https://leetcode.com/problems/permutation-difference-between-two-strings/description/
 */


/**
 * - O(n) time complexity
 * - O(n) space complexity
 * - iterates over s to create a map that keeps track of the s index
 * - iterates over t and uses the map to do the calculation
 */
const findPermutationDifference = (s, t) => {
    let indexStore = {};
    let sum = 0;
 
    for(let i = 0; i < s.length; i++){
        indexStore[s[i]] = i;
    }
    for(let i = 0; i < t.length; i++){
        sum += Math.abs(i - indexStore[t[i]])
    }
 
    return sum;
};