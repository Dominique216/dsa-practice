/** 
 * The question for this problem can be found here: 
 * https://neetcode.io/problems/anagram-groups
 */


/**
 *   O(m*n) time complexity where m = length of strs and n = length of word
 * - Uses a array to create a key of all 26 letters in the alphabet for each word
 * - Stores that key in a hashmap
 * - If key already exists in the hashmap, adds the word to the value array
 * - Iterates over the hashmap to generate the answer
 */
const groupAnagrams = (strs) => {
    let map = {};

    for(let word of strs){
     let alphbetKey = Array(26).fill();
     for(let i = 0; i < 27; i++){
          alphbetKey[i] = 0;
     }
     for(let i = 0; i < word.length; i++){
         let position = word[i].charCodeAt() - 'a'.charCodeAt();
         alphbetKey[position] += 1;
     }
     if(map[alphbetKey]){
         map[alphbetKey].push(word)
     }else{
        map[alphbetKey] = [word]
     }
    }
  let answer = [];
  for(let key in map){
     answer.push(map[key]);
  }
    return answer
}