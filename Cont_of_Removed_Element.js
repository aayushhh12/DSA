function index_removed_element(nums, val){
    let count = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] == val){
            count++;
        }
    }
    return count;
}

let nums = [2,5,7,3,4,8,4,4];
let val = 4;
let result = index_removed_element(nums, val);
console.log(result);