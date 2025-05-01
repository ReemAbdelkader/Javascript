/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let s = Math.abs(x).toString();
    let result = '';
    for (let i = s.length - 1 ; i >= 0 ; i--) {
        result += s[i];
    }
    const reversedNumber = parseInt(result) * Math.sign(x);
    if (reversedNumber < -(2 ** 31) || reversedNumber > (2 ** 31) - 1) {
        return 0; 
    }
    return reversedNumber;
};