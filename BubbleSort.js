function BubbleSort(arr){
    let n = arr.length-1
    for(let i=0; i<n; i++){
        let isSwapped = false;
        for(let j=0; j<n-i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;

                isSwapped = true;
            }
        }
        if(!isSwapped) break;
    }
    return arr;
}
let arr = [5,2,7,1,8,0];
console.log(BubbleSort(arr));