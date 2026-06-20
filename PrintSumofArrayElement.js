let arr = [5,3,2,0,1];

function sumOfArrayEle(n){
    if(n == 0) return arr[0];
    return arr[n] + sumOfArrayEle(n-1);
}

console.log(sumOfArrayEle(arr.length-1));