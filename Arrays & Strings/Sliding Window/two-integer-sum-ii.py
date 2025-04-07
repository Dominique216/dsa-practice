 # The question for this problem can be found here: 
 # https://neetcode.io/problems/two-integer-sum-ii

 # Time Complexity: O(n) 
 # Space Complexity: O(1)
 # start i at 0 and j at the end of numbers
 # change widow size depending on the the total is > or < the target
class Solution:
    def twoSum(self, numbers, target):
        i, j = 0, len(numbers)-1
        while i < j:
            total = numbers[i] + numbers[j]
            if total == target:
                return [i+1, j+1]
            if total > target:
                j -= 1
            if total < target:
                i += 1
        return []