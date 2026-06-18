function palindrome_number(a){
    let str = a.toString().split('').reverse().join('')
    let result = Number(str);
    if(result == a) {
        return true;
    }
    else {
        return false;
    }
}

let a = 1212121;
let result = palindrome_number(a);
console.log(result);