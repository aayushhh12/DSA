// Iterative Approach also called Easy approach
function fibonacchi_Number(n){
    let arr = new Array(n+1);
    for(let i = 0; i<=n; i++){
        if(i === 0){
            arr[i] = 0;
        } else if(i === 1){
            arr[i] = 1;
        }else{
            arr[i] = arr[i-1] + arr[i-2];
        }
    }
    return arr[n];
}

console.log(fibonacchi_Number(4));