/** 
 * The question for this problem can be found here: 
 * https://neetcode.io/problems/is-anagram
 */

/**
 * - Time Complexity: O(n) 
 * - Space Complexity: O(n)
 * - Uses a hashmap to track letter frequency for s
 * - If letter from t found update hashmap
 * - Otherwise, return false
 */
 const isAnagram = (s, t) => {
    if(s.length !== t.length) return false;
    let map = {}
    for(let i = 0; i < s.length; i++){
        if(s[i] in map){
            map[s[i]] += 1;
        } else {
            map[s[i]] = 1;
        }     
    }

    for(let i = 0; i < t.length; i++){
      let curr = t[i];

      if((curr in map) && map[curr] > 0){
        map[curr] -= 1
      } else {
        return false
      }
    }

    return true
};

/**
 * - Time Complexity: O(n) 
 * - Space Complexity: O(n)
 * - Uses cleaner code for hashmap creation
 * - User for...of loops for slightly more modern approach
 */
const cleanerIsAnagram = (s, t) => {
    if(s.length !== t.length) return false;
    let map = {}
    for(let char of s){
        map[char] = (map[char] || 0) + 1;
    }
     
    for(let char of t){
        if(!map[char] || map[char] === 0) return false;
        map[char] -= 1
    }

    return true
}