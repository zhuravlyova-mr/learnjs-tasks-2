function fib(n) {  
    if (n <= 0) {
        return NaN;
    }

    if (n == 1 || n == 2) {
        return 1;
    }
    let sum = 0;
    let prev = 1;
    let prevprev = 1;
    
    for (let i = 3; i <= n; ++i) {
        sum = prev + prevprev;
        prevprev = prev;
        prev = sum;
    }
    
    return sum;
}

console.log( fib(1) );

console.log( fib(2) );
console.log( fib(3) );

console.log( fib(6) );
console.log( fib(77) );