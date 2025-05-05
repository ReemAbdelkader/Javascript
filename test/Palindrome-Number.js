/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    else {
        let str = x.toString();
        let result = str.split('').reverse().join('');
        
        return result === str;
    }
};