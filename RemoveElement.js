function remove_element(nums, val){
    for(let i=0; i<nums.length; i++){
        if(nums[i] == val){
            let remove = nums.splice(i,1);
        }
    }
    return nums;
}

let nums = [2,5,7,3,4,8];
let val = 4;
let result = remove_element(nums, val);
console.log(result);