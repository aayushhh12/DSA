function MoveZeroes(arr){
    let p1 = 0;
    let n = arr.length;
    for(let i = 0; i < n; i++){
        if(arr[i] !== 0){
            arr[p1] = arr[i];
            p1++;
        }   
    }
    for(let i = p1; i<n; i++){
        arr[i] = 0;
    }
    return arr;
}

let nums = [2,5,0,0,0,4,0,4,4];
let result = MoveZeroes(nums);
console.log(result);