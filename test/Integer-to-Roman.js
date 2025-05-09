/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const arr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const str = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let finalResult = "";
    
    for (let i = 0 ; i < arr.length ; i++) {
        while (num >= arr[i]) {
            finalResult += str[i];
            num -= arr[i];
        }
    }
    return finalResult;
};