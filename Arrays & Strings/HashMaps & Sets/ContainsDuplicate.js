/** 
 * The question for this problem can be found here: 
 * https://neetcode.io/problems/duplicate-integer
 */

/**
 * Brute force solution: O(n^2) time complexity
 * - Uses nested loops to compare each pair of numbers.
 * - If a duplicate is found, return true.
 * - Otherwise, return false after checking all pairs.
 */
 const bruteForceContainsDuplicate = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;  // Found a duplicate
            }
        }
    }
    return false;  // No duplicates found
};

/**
 * Optimized solution: O(n) time complexity
 * - Uses a Set to store unique numbers.
 * - If a number already exists in the Set, return true.
 * - Otherwise, add it to the Set and continue.
 */
const optimizedContainsDuplicate = (nums) => {
    let found = new Set();  // Stores seen numbers
    for (let num of nums) {
        if (found.has(num)) {
            return true;  // Duplicate found
        }
        found.add(num);  // Add number to the Set
    }
    return false;  // No duplicates found
};