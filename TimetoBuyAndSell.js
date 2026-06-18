function timeToBuySell(arr){
    let min = arr[0]; //7
    let max_diff = 0;
    for(let i = 1; i<arr.length; i++){
        if(arr[i] - min > max_diff){ 
            max_diff = arr[i] - min;
        }
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return max_diff;
}

let p = [7,1,5,3,6,4];
let result = timeToBuySell(p);
console.log(result);