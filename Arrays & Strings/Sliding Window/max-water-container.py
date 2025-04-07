 # The question for this problem can be found here: 
 # https://neetcode.io/problems/max-water-container

 # Time Complexity: O(n) 
 # Space Complexity: O(1)
 # start i at 0 and j at the end of numbers
 # calculate the water 
 # resize widow based on which height is smaller
def maxArea(heights):        
        i, j = 0, len(heights)-1
        max_water = 0

        while i < j:
            curr_water = (j - i) * min(heights[i], heights[j])
            max_water = max(max_water, curr_water)

            if heights[i] < heights[j]:
                i += 1
            else:
                j -= 1
        return max_water