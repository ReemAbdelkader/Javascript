/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim();
    let sign = 1 , result = 0 , i = 0;
        if (s[i] === "-" || s[i] === "+") {
            sign = s[i] === "-" ? -1 : 1;
            i++;
        }
        
        while(i < s.length && s[i] >= '0' && s[i] <= '9') {
            result = result * 10 + (s[i] - '0');
            i++;
        }
        
        if (i === 0 || (i === 1 && (s[0] === "+" || s[0] === "-"))) {
            return 0;
        }
        
    result *= sign;
    
    const INT_MIN = -(2 ** 31);
    const INT_MAX = (2 ** 31) - 1;
    if (result < INT_MIN) return INT_MIN;
    if (result > INT_MAX) return INT_MAX;
    
    return result;

};