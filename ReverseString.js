function reverseString(arr){
    let n =arr.length;
    let  j=Math.floor(n/2);
    for(let i = 0; i < j; i++){
        let temp = arr[i];
        arr[i] = arr[n-1-i];
        arr[n-1-i] = temp;
    }
    return arr;
}

let nums = [2,5,7,3,4,8,4,4];
let result = reverseString(nums);
console.log(result);