
/** 
 * The question for this problem can be found here: 
 * https://leetcode.com/problems/house-robber/
 */


/**
 * - Time Complexity: O(n) 
 * - Space Complexity: O(n)
 * - Use a pointer to keep track of which num is being processed
 * - Uses memoization to prevent redundant checks
 * - Either add the current number or skip it
 * - Return the max of the two options.
 */
const rob = (nums, pointer = 0, memo = new Array(nums.length).fill(-1)) => {
    if(pointer > nums.length-1) return 0
    if(memo[pointer] !== -1) return memo[pointer];
  
    let addCurrNum = nums[pointer] + rob(nums, pointer+2, memo);
    let skipCurrNum = 0 + rob(nums, pointer+1, memo);
  
    memo[pointer] = Math.max(addCurrNum, skipCurrNum);
    return memo[pointer]
};