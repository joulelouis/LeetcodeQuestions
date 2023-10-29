console.log('Hello World!');

function twoSum(nums, target) {
    const numToIndex = new Map(); // Create a Map to store numbersand their indices

    for (let i = 0; i < nums.length; i++) { // iterate through the nums array
        const complement = target - nums[i]; // 

        if (numToIndex.has(complement)) {
            return [numToIndex.get(complement), i];
        }

        numToIndex.set(nums[i], i); // Store the current number and its index in the Map

    }

    throw new Error('No solution found');
}

const array = [15, 11, 2, 7];
const target = 9;
console.log(twoSum(array, target));