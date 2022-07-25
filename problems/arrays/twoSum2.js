/*
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.



Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
*/


var twoSum = function(nums, target) {
  let left = 0;
  let right = nums.length-1;

  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === target) {
        return [left+1, right+1];
    }
    if (sum > target) {
        right--;
    } else {
        left++;
    }
  }



}


var arrayEquality = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  var equal = true
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      equal = false;
    }
  }

  return equal;
}




numbers = [2,7,11,15]
target = 9

console.log(arrayEquality(twoSum(numbers, target), [1, 2]));