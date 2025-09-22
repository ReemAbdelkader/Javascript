/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let stepOne = 1 , stepTwo = 2;
    if (n == 1)return stepOne;
    else if (n == 2) return stepTwo;

    let current = 0
    for (let i = 3 ; i <= n ; i++) {
         current = stepOne + stepTwo;
         stepOne = stepTwo;
         stepTwo = current;
    }
    return current;
};