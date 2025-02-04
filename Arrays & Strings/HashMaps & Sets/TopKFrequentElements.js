/** 
 * The question for this problem can be found here: 
 * https://neetcode.io/problems/top-k-elements-in-list
 */


/**
 * - O(n) time complexity
 * - O(n) space complexity
 * - Uses map to count frequency
 * - Uses an array (bucket sort) to group elements based on the frequency
 * -  iterates over the sorted array to get the elements with the highest frequency
 */
const topKFrequentElements = () => {
    let map = {};
    let freqArr = Array.from({length: nums.length + 1}, () => []);

    for(let num of nums){
      map[num] = (map[num] || 0) + 1;
    }

    for(let key in map){
        freqArr[map[key]].push(key);
    }

    let res = [];

    for(let i = freqArr.length-1; i >= 0; i--){
        for(let num of freqArr[i]){
         res.push(num);
         if(res.length === k){
             return res
         }
        }
    }
    return [];
}