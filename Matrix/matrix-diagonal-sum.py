 # The question for this problem can be found here: 
 # https://leetcode.com/problems/matrix-diagonal-sum/
 

 # Time Complexity: O(n) 
 # Space Complexity: O(1)
 # iterate over row twice one for primary and one for secondary calculations
 # if matrix is odd subtract middle since it would have been double counted
class Solution(object):
    def diagonalSum(self, mat):
        """
        :type mat: List[List[int]]
        :rtype: int
        """
        count = 0
        n = len(mat)
        for i in range(n):
            count += mat[i][i]
        j = len(mat[0])-1
        for i in range(n):
            count += mat[i][j]
            j -= 1
        if n % 2:
            count -= mat[n // 2][n // 2]
        return count