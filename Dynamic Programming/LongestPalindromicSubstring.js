/** 
 * The question for this problem can be found here: 
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 */


/**
 * - Time Complexity: O(n^2) 
 * - Space Complexity: O(n)
 * - Expand around the center approach
 * - iterate over s for both the possibility of even and odd length palindromes
 * - expand search outwards
 * - use max length logic to update the longest palindrome
 */
 const longestPalindrome = (s) => {
     if(s.length < 2) return s;
 
     const findPalindrome = (s, left, right) => {
         while(left >= 0 && right < s.length && s[left] === s[right]){
             left--
             right++
         }
         return s.substring(left + 1, right)
     }
     let longest = "";
     for(let i = 0; i < s.length; i++){
            let odd = findPalindrome(s, i, i);
            if(odd.length > longest.length){
             longest = odd;
            }
 
            let even = findPalindrome(s, i, i+1);
            if(even.length > longest.length){
             longest = even;
            }
     }
    return longest;
 };