/** 
 * The question for this problem can be found here: 
 * https://leetcode.com/problems/valid-palindrome/description/
 */


/**
 * - O(n) time complexity
 * - O(n) space complexity
 * - Uses a regex to replace all non-letters
 * - Uses two pointers to compare letters
 */

const validPalindrome = (s) => {
    let newS = s.replace(/[^a-zA-Z0-9]/g, ""); // replace all non alphabetical chars
    if(newS.length <= 0) return true
    let i = 0
    let j = newS.length-1;

    while(i < j){
        if(newS[i].toLowerCase() !== newS[j].toLowerCase()){
        return false; // if not the same letter return false
        }
        i++
        j--
    }

  return true
};

/**
 * - O(n) time complexity
 * - O(1) space complexity
 * - Uses two pointers to compare letters
 * - Uses regex to test that each letter is valid
 * - returns false if any valid characters don't match
 */
const optimizedValidPalindrome = (s) => {
   let i = 0;
   let j = s.length-1;
   let regex = /[a-zA-Z0-9]/

   while(i < j){
    while(i < j && !regex.test(s[i])){
        i++
    }
    while(i < j && !regex.test(s[j])){
        j--
   }
   if(s[i].toLowerCase() !== s[j].toLowerCase()){
    return false; // if not the same letter return false
    }
    i++
    j--
   }

   return true;
}


