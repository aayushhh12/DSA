function printNto1(nums){
    if(nums === 0) return;
    console.log(nums);
    nums = nums - 1;
    printNto1(nums);
}
nums = 5;
printNto1(nums);