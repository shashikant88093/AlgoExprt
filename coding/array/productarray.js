// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]


let productExceptSelf = (nums) => {
    const n = nums.length;
    const output = new Array(n).fill(1);

    // Compute left products
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        output[i] = leftProduct;
        leftProduct *= nums[i];
    }

    // Compute right products and update output array
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        output[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return output;

}


let nums = [1, 2, 8, 4]


console.log(productExceptSelf(nums))