/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let n = nums.length - 1, sum = Infinity;
    nums.sort((a,b) => a - b);
    
    for (let i = 0 ; i < n ; i++) {
        let left = i + 1 , right = n;

        while(left < right) {
            let current = nums[i] + nums[left] + nums[right];
            if (current === target){
                return current;
            }
            if (Math.abs(current - target) < Math.abs(sum - target)) {
                sum = current;
            }
            if (current > target) {
                right--;
            }
            else {
                left++;
            }
        }
    }
    return sum;
};