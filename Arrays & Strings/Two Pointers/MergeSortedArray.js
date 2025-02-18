/** 
 * The question for this problem can be found here: 
 * https://leetcode.com/problems/merge-sorted-array/
 */


/**
 * - O(m+n) time complexity
 * - O(1) space complexity
 * - uses three pointers to keep track of last zero, nums1, and nums2
 * - modifies nums1 depending on which pointer has the largest number 
 */

const merge = (nums1, m, nums2, n) => {
    let i = m-1;
    let j = n-1;
    let k = m+n-1;

    while(j >= 0){
    if(nums1[i] > nums2[j]){
        nums1[k] = nums1[i]
        nums1[i] = 0;
        i--
    }else {
        nums1[k] = nums2[j]
        j--
    }
    k--
    }
};