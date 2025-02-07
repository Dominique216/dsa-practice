import {ListNode} from './ListNode';


/** 
 * The question for this problem can be found here: 
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 */


/**
 * - Time Complexity: O(n) 
 * - Space Complexity: O(n)
 * - turn list into an array
 * - find the target numbers in the array and make the swap
 * - generate a new list
 */
 const  swapNodes = (head, k) => {
    let pointer = head;
    let arr = [];
    while(pointer){
        arr.push(pointer.val);
        pointer = pointer.next;
    }
    
    let i = 0;
    let j = arr.length-1;
    while(i < k){
        if(k-1 === i){
           let temp = arr[j];
           arr[j] = arr[i];
           arr[i] = temp;
        }
        i++
        j--
    }
    let newList = new ListNode(0);
    let newListPointer = newList;
    for(let num of arr){
        newListPointer.next = new ListNode(num);
        newListPointer =  newListPointer.next;
    }
    return newList.next;
};