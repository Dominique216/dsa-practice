 # The question for this problem can be found here: 
 # https://leetcode.com/problems/transpose-matrix/
 

 # Time Complexity: O(n*m) 
 # Space Complexity: O(m*n)
 # creates a new placeholder matrix with row and cols swapped
 # iterates over the matrix
 # swaps the row/col and inputs into the new matrix

class Solution(object):
    def transpose(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: List[List[int]]
        """
        new_matrix = [[0 for row in range(len(matrix))] for col in range(len(matrix[0]))]
        # iterate over the matrix 
        # nested loop: O(n*m)
        for i in range(len(matrix)):
            for j in range(len(matrix[i])):
                new_matrix[j][i] = matrix[i][j]
        return new_matrix