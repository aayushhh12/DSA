function CountOfNegative(arr) {
    let count = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]<0){
            count++;
        }
    }
    return count;
}
let arr = [1,2,-5,3,-4,6,-8];
let result = CountOfNegative(arr);
console.log(result);