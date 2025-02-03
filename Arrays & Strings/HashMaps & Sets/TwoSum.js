/** 
 * The question for this problem can be found here: 
 * https://neetcode.io/problems/two-integer-sum
 */

/**
 * Optimized solution: O(n) time complexity
 * - Uses a hashmap to store the compliment num index.
 * - If a number already exists in the map, return indexes.
 * - Otherwise, continue looping.
 */
const twoSum = (nums, target) => {
    let map = {};

    for(let i = 0; i < nums.length; i++){
        let compliment = target-nums[i];
        if(compliment in map) return [i, map[compliment]];
            map[nums[i]] = i;
    }
    return [];
}

/**
 * Brute force solution: O(n^2) time complexity
 * - Uses nested loops to add numbers
 */
 const bruteForcetwoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];  // Found a duplicate
            }
        }
    }
    return [];  // No duplicates found
};
