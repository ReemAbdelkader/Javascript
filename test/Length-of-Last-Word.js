/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let counter = 0;
    let str = s.trim();
    if (str.length == 1) return 1;
    for (let i = str.length - 1; i >= 0 ; i--) {
        if (str[i] !== " ") {
            counter++;
        }
        else {
            break;
        }
    }
    return counter;
};