/** 
 * The question for this problem can be found here: 
 * https://neetcode.io/problems/longest-substring-without-duplicates
 */


/**
 * - O(n) time complexity
 * - O(n) space complexity
 * - create set to hold letters seen
 * - if letter in set shrink widow
 * - if not grow window
 * - return max length seen
 */
const lengthOfLongestSubstring = (s) => {
    let i = 0
    let j = 0
    let seen =  new Set()
    let maxLength = 0
    while(j < s.length){
        while(seen.has(s[j]) && i < j){
            seen.delete(s[i]);
            i++
        }
        maxLength = Math.max(maxLength, j-i+1)
        seen.add(s[j])
        j++
    }
    return maxLength
}