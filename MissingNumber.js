function MissingNumber(nums){
    let n = nums.length;
    let sum = (n*(n+1))/2;
    let act_sum = 0;
    for(let i=0; i<n; i++){
        act_sum = act_sum + nums[i];
    }
    return sum - act_sum;
}

let arr = [3,0,1];
let result = MissingNumber(arr);
console.log(result);