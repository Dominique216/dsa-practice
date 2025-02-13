/** 
 * The question for this problem can be found here: 
 * https://leetcode.com/problems/maximum-average-subarray-i
 */


/**
 * - O(n) time complexity
 * - O(1) space complexity
 * - iterates up to k to get an initial sum value
 * - create a window of size k and update the sum accordingly
 * - updates the max avg within the loop
 */
 var findMaxAverage = function(nums, k) {
    let currSum = 0;
    for(let i = 0; i < k; i++){
        currSum += nums[i];
    }

    let maxAvg = currSum / k; 
    let i = 1;
    let j = i + k-1;

    while(j < nums.length){
        currSum = currSum - nums[i-1] + nums[j];
        maxAvg = Math.max(currSum/k, maxAvg);
        i++
        j++
    }

    return maxAvg; 
};