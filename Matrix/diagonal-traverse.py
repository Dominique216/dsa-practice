 # The question for this problem can be found here: 
 # https://leetcode.com/problems/diagonal-traverse/
 

 # Time Complexity: O(n*m) 
 # Space Complexity: O(m*n)
 # group the element based on i + j (this means they are on the same diagonal)
 # if i+j is even the add element backwards, if i + j is odd add elements as is
class Solution(object):
    def findDiagonalOrder(self, mat):
        """
        :type mat: List[List[int]]
        :rtype: List[int]
        """
        grouped_ele = {}
        for i in range(len(mat)):
            for j in range(len(mat[i])):
                grouped_ele[i+j] = grouped_ele.get(i+j, [])
                grouped_ele[i+j].append(mat[i][j])
        
        res = []
        for key in grouped_ele:
            if not key % 2:
                for i in range(len(grouped_ele[key])-1, -1, -1):
                    res.append(grouped_ele[key][i])
            else:
                for i in range(len(grouped_ele[key])):
                    res.append(grouped_ele[key][i])
        return res


         
