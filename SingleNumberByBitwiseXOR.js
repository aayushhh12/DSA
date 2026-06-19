function SingleNumber(nums){
    let xor = 0;
    for(let i=0; i<nums.length; i++){
        xor = xor ^ nums[i];
    }
    return xor;
}

let nums = [2,5,2,3,8,3,8,4,4];
let result = SingleNumber(nums);
console.log(result);