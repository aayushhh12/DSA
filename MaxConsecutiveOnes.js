function MaxConsecutiveOnes(nums){
    let curr_count = 0;
    let max_count = 0;
    for(let i = 0; i<nums.length; i++){
        if(nums[i] === 1){
            curr_count++;
        }else{
            curr_count = 0;
        }
        if(curr_count > max_count){
            max_count = curr_count;
        }
    }
    return max_count;
}

let a = [1,1,0,1,0,1,1,1,0,1];
let result = MaxConsecutiveOnes(a);
console.log(result);