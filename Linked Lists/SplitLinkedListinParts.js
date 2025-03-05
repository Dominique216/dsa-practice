import {ListNode} from './ListNode';


/** 
 * The question for this problem can be found here: 
 * https://leetcode.com/problems/split-linked-list-in-parts/
 */


/**
 * - Time Complexity: O(n) 
 * - Space Complexity: O(k)
 * - gets the length of the list
 * - divided the length by k and rounds down to get the number nodes in each group
 * - gets the remainder to keep track of how many groups should have one extra node
 * - loops over the list splits it based on the remainder and the number of nodes that should go in each node
 * - fills in any missing k values with null
 * - returns the result
 */
const splitListToParts = (head, k) => {
  let length = 0;
  let pointer = head;

  while (pointer) {
    length += 1;
    pointer = pointer.next;
  }

  let groupAmount = Math.floor(length / k);
  let remainder = length % k;
  let noRemainder = groupAmount;
  let withRemainder = groupAmount + 1;

  let res = [];
  let currPointer = null;

  pointer = head;
  while (pointer) {
    let temp = pointer.next || null;
    if (remainder > 0) {
      if (withRemainder > 0 && currPointer === null) {
        currPointer = pointer;
      }
      withRemainder -= 1;
      if (withRemainder === 0) {
        pointer.next = null;
        res.push(currPointer);
        withRemainder = groupAmount + 1;
        remainder -= 1;
        currPointer = null;
      }
    } else {
      if (noRemainder > 0 && currPointer === null) {
        currPointer = pointer;
      }
      noRemainder -= 1;
      if (noRemainder === 0) {
        pointer.next = null;
        res.push(currPointer);
        currPointer = null;
        noRemainder = groupAmount;
      }
    }
    pointer = temp;
  }
  while (res.length < k) {
    res.push(null);
  }
  return res;
};
