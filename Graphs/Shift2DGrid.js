/** 
 * The question for this problem can be found here: 
 * https://leetcode.com/problems/shift-2d-grid/
 */
/**
 * Time Complexity: O(nmk)
 * Space Complexity: O(1)
 * Shifts each element in the grid by 1 k amount of times
 */
 var shiftGrid = (grid, k) => {
    for(let i = 0; i < k; i++){
        modifyGrid(grid)
    }
    return grid;
};
const modifyGrid = (grid) => {
    let prev = grid[grid.length-1][grid[0].length-1];
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            let temp = grid[i][j];
            grid[i][j] = prev;
            prev = temp;
        }
    }
}

/**
 * Time Complexity: O(nm)
 * Space Complexity: O(mn)
 * create a new grid
 * Uses a nested loop to iterate over the grid
 * Calculates the new indexes for the element by getting the flattened index
 * returns new grid
 */
const shiftGridOptimized = (grid, k)=> {
    let m = grid.length;
    let n = grid[0].length;
    let newGrid = Array(m).fill(null).map(() => Array(n).fill(0));
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
           let originalIndex = i * n + j;
           let newIndex = (originalIndex + k) % (m*n);
           let newRow = Math.floor(newIndex / n);
           let newCol = newIndex % n;
           newGrid[newRow][newCol] = grid[i][j];
        }
    }
    return newGrid;
}