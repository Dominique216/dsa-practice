/** 
 * The question for this problem can be found here: 
 * https://leetcode.com/problems/intersection-of-two-linked-lists/
 */


/**
 * - Time Complexity: O(n) 
 * - Space Complexity: O(1)
 * - gets the length of the lists
 * - increases the pointer of the longest list
 *   util both lists are the same length
 * - checks if the nodes are the same
 */
const  getIntersectionNode = (headA, headB) => {

let listALength = findLength(headA);
let listBLength = findLength(headB);

let longestListPointer;
let shortestListPointer;
let difference = Math.max(listALength, listBLength) - Math.min(listALength, listBLength);

if(listALength > listBLength){
    longestListPointer = headA;
    shortestListPointer = headB;
} else {
    longestListPointer = headB;
    shortestListPointer = headA;
}

for(let i = 0; i < difference; i++){
    longestListPointer = longestListPointer.next;
}

while(shortestListPointer && longestListPointer){
    if(shortestListPointer === longestListPointer){
        return shortestListPointer;
    }
    shortestListPointer = shortestListPointer.next
    longestListPointer = longestListPointer.next
}
return null;
};

const findLength = (head) => {
 let length = 0;
 let pointer = head;
 while(pointer){
     length++
     pointer = pointer.next;
 }
 return length;
}