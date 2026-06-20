function sumofNnumbers(n){
    if(n==0) return 0; 
    return n + sumofNnumbers(n-1);
}
let n = 5;
console.log(sumofNnumbers(n));