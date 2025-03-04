/** 
 * The question for this problem can be found here: 
 * https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/
 */


/**
 * - O(n) time complexity
 * - O(n) space complexity
 * - iterates over s to create a map that keeps track the amount of each letter
 * - iterates over the map and checks if all values match
 */
const areOccurrencesEqual = (s) => {
    let lettersSeen = {};
    for(let char of s){
        lettersSeen[char] = (lettersSeen[char] || 0) + 1;
    }

    let num = lettersSeen[s[0]];
    for(let key in lettersSeen){
        if(lettersSeen[key] !== num){
            return false
        }
    }
    return true
};