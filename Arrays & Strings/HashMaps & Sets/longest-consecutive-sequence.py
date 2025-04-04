 # The question for this problem can be found here: 
 # https://neetcode.io/problems/longest-consecutive-sequence

 # Time Complexity: O(n) 
 # Space Complexity: O(n)
 # create a set of nums for constant loop up time
 # iterate over nums
 # while there are nums less/greater than num in the set increase count
 # use a seen set to prevent double checking numbers
class Solution:
    def longestConsecutive(self, nums):
        all_nums = set(nums) 
        seen = set()
        curr_count = 0
        max_count = 0
        for num in nums:
            if not num in seen:
                curr_count += 1
                i = num-1
                seen.add(num)
                while(i in all_nums):
                    curr_count += 1
                    seen.add(i)
                    i -= 1
                j = num+1
                while(j in all_nums):
                    curr_count += 1
                    seen.add(j)
                    j += 1  
                max_count = max(max_count, curr_count)
                curr_count = 0
        return max_count