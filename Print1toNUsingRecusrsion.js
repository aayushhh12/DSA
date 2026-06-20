function print1toN(nums, a){
    if(a > nums) return;
    console.log(a);
    a= a + 1;
    print1toN(nums, a);
}
let nums = 5;
let a = 1;
print1toN(nums, a);

// Time Complexity becomes 0(n)