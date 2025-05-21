/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rows = [] , cols = [] , n = 0 , m = 0;
    for (let i = 0 ; i < matrix.length ; i++) {
        for (let j = 0 ; j < matrix[0].length ; j++) {
            if (matrix[i][j] === 0) {
               rows[n] = i;
               cols[m] = j;
               n++ , m++;
            }
        }
    }
    for (let row = 0 ; row < rows.length ; row++) {
        for (let j = 0 ; j < matrix[0].length ;j++) {
            matrix[rows[row]][j] = 0;
        }
    }
    for (let col = 0 ; col < cols.length ; col++) {
        for (let i = 0 ; i < matrix.length ;i++) {
            matrix[i][cols[col]] = 0;
        }
    }
    return matrix;
};