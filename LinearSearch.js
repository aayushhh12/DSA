let arr = [5,8,2,6,0,1];
let tar = 0;
function LinearSearch(arr, tar){
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === tar) return i;
    }
    return -1;
}
console.log(LinearSearch(arr,tar));