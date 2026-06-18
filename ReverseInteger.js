function reverse_integer(a){
    let result = 0;
    let q = a;
    while(a>0){
        let last = a%10;
        result = result * 10 + last;
        a = Math.floor(a/10);
    }
    if(result === q){
        return true;
    }else{
        return false;
    }

}
// console.log(result);
let a = 34543;
let result2 = reverse_integer(a);
console.log(result2);