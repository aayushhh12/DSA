function SecondLargest(arr){
    let arr2 = arr.sort((a, b) => a-b);
    if(arr2[arr2.length-2] < arr2[arr2.length-1]){
        return arr2[arr2.length-2];
    }else{
        return arr2[arr2.length-3];
    }
}

let arr = [10, 5, 12, 3, 1, 25, 25];
let result = SecondLargest(arr);
console.log(result);