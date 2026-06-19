function SingleNumber(nums){
    let hash = {};

    for(let i=0; i<nums.length; i++){
        if(!hash[nums[i]]){
            hash[nums[i]] = 1;
        }else{
            hash[nums[i]]++;
        }
    }
    for(let i=0; i<nums.length; i++){
        if(hash[nums[i]]==1){
            return nums[i];
        }
    }
}

let nums = [2,5,2,3,8,3,8,4,4];
let result = SingleNumber(nums);
console.log(result);