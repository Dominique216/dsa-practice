
/** 
 * The question for this problem can be found here: 
 * https://leetcode.com/problems/sum-of-distances/
 */


/**
 * - O(n^2) time complexity
 * - O(n) space complexity
 * - creates a hashmap to keep track of the indexes of matching numbers
 * - calculates  the result by iterating over the indexes for each number in the key
 */
const distance = (nums) => {
    let map = {};
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]]){
            map[nums[i]].push(i)
        }else {
            map[nums[i]] = [i]
        }
    }

    let res = [];
    for(let i = 0; i < nums.length; i++){
        let currSum = 0;
        for(let j = 0; j < map[nums[i]].length; j++){
            currSum += Math.abs(i - map[nums[i]][j])
        }
        res.push(currSum)
    }

    return res;
};

/**
 * - O(n) time complexity
 * - O(n) space complexity
 * - creates a hashmap to keep track of the indexes of matching numbers
 * - uses the prefix sum method to optimize performing the calculations
 */
 const distanceOptimized = (nums) => {
    let map = {};
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]]){
            map[nums[i]].push(i)
        }else {
            map[nums[i]] = [i]
        }
    }

    let res = [];
    for(let key in map){
        let indices = map[key]
        let prefixSum = 0;
        /// TODO
    }

    return res;
};