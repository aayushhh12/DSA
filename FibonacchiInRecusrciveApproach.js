/*
                                f(5)
                f(4)-------------|-------------f(3)
        f(3)-----|------f(2)             f(2)----|-----f(1)
    f(2)--|--f(1)    f(1)--|--f(0)    f(1)--|--f(0)
f(1)--|--f(0)
*/

function fib(n){
    if(n<=1){
        return n;
    }
    return fib(n-1) + fib(n-2);
}

console.log(fib(2));