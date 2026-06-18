function index_removed_element(nums, val){
    let x = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== val){
            nums[x]=nums[i];
            x = x+1;
        }
    }
    return x;
}


let nums = [2,5,7,3,4,8];
let val = 4;
let result = index_removed_element(nums, val);
console.log(result);