// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example 1:

// Input: nums = [2,7,11,15], target = 9     
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

let nums = [2,7,11,15];
 
let target = 9;
let j = 0;

var twoSum = function(nums, target) {
    while(j === target){
        for (let i = 0; i<=nums.length; i++){
            let temp = i;
            let j = temp + j
        }
    }
    
};
console.log(twoSum);


const array = [2, 9, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
array.indexOf(9, 2); // 2
console.log(array.indexOf(2, -1)); // -1
console.log(array.indexOf(2, -3)); // 0