function SmallestNumber(arr){
    let a = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i] < a){
            a = arr[i];
        }
    }
    return a;
}

let arr = [10, 5, 12, 3, 1, 25];
let result = SmallestNumber(arr);
console.log(result);