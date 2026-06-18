function remove_duplicate(arr){
    let x = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > arr[x]){
            x = x+1;
            arr[x]=arr[i];
        }
    }
    return x+1;
}

let arr = [1,2,2,3,4,4,5];
let result = remove_duplicate(arr);
console.log(result);