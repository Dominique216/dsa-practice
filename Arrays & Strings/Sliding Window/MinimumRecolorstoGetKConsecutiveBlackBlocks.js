/** 
 * The question for this problem can be found here: 
 * https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/
 */


/**
 * - O(n) time complexity
 * - O(n) space complexity
 * - gets the number of operations and W indexes from first loop
 * - shifts the window and recalculates first and last values in the window
 * - returns the minimum
 */

 const minimumRecolors = (blocks, k) => {

    let wIndex = new Set();
    let minOps = 0;
    let currOps = 0;

    for(let i = 0; i < k; i++){
        if(blocks[i] === "W"){
            wIndex.add(i);
            currOps += 1;
        }
    }
    minOps = currOps; 

    let i = 1;
    let j = k;

    while(j < blocks.length){
        if(wIndex.has(i-1)) currOps -= 1;

        if(blocks[j] === 'W'){
            wIndex.add(j);
            currOps += 1;
        }

        minOps = Math.min(minOps, currOps)
        i++
        j++
    } 

    return minOps;
};