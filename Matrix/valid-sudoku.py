 # The question for this problem can be found here: 
 # https://neetcode.io/problems/valid-sudoku

class Solution:
    def isValidSudoku(self, board):
        # 1) through the row
        # 2) through the col
        # 3) thought the 3x3 grid 
        # we would have some overlap between the spaces

        for row in range(9):
            seen = set()
            for i in range(9):
                if board[row][i] == '.':
                    continue
                if board[row][i] in seen:
                    return False
                seen.add(board[row][i])
        for col in range(9):
            seen = set()
            for i in range(9):
                if board[i][col] == '.':
                    continue
                if board[i][col] in seen:
                    return False
                seen.add(board[i][col])
        for row in range(0, len(board), 3):
            for col in range(0, len(board), 3): 
                seen = set()
                for i in range(3):
                    for j in range(3):
                        if board[row + i][col + j] == '.':
                            continue
                        if board[row + i][col + j] in seen:
                            return False
                        seen.add(board[row + i][col + j])
        return True 