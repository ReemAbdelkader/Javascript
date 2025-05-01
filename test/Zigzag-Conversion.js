/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    
    if (numRows === 1) return s;

    let rows = new Array(numRows).fill("");
    let currentRow = 0 , direction = 1;

    for (let i = 0 ; i < s.length ; i++) {
        rows[currentRow] += s[i];
        currentRow += direction;

        if (currentRow === 0 || currentRow === numRows - 1) {
            direction *= -1;
        }
    }
    return rows.join("");
};