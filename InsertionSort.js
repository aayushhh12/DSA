function InsertionSort(arr){
    let n = arr.length
    for(let i=1; i<n; i++){
        let curr = arr[i];
        let p = i-1;
        while(arr[p] > curr && p>=0){
            arr[p+1] = arr[p];
            p--;
        }
        arr[p+1] = curr;
    }
    return arr;
}
let arr = [7,1,5,4,3,2,0];
console.log(InsertionSort(arr))