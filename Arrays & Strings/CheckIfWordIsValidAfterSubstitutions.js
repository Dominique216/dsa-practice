/** 
 * The question for this problem can be found here: 
 * https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/
 */


/**
 * - Time Complexity: O(n) 
 * - Space Complexity: O(n)
 * - create a stack
 * - iterate over s and add each letter to the stack
 * - If "abc" are the last three letters on the stack, remove them
 * - return true if the stack is empty or false otherwise
 */
const isValid = (s) => {
    let stack = [];
    for(let i = 0; i < s.length; i++){
        stack.push(s[i])
        if(stack.length > 2){
            let lastThreeLetters = `${stack[stack.length-1]}${stack[stack.length-2]}${stack[stack.length-3]}`
            if(lastThreeLetters === "cba"){
                stack.pop();
                stack.pop();
                stack.pop();
            }
        }
    }
    return stack.length === 0
};