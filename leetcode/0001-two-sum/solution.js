/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const newMap = new Map();
    for (const [index, value] of nums.entries()) {
        let diff = target - value;
        if (newMap.has(diff)) {
            return [newMap.get(diff), index];
        } else {
            newMap.set(value, index);
        }
    }
};
