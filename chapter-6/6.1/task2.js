//считает факториал не только натурального, но и 0
function factorial(n) {  
    return n < 0 ? NaN : n == 0 ?
        1 : (n == 1) ?
        1 : n * factorial(n-1);
}

console.log( factorial(-10) );
console.log( factorial(0) );
console.log( factorial(1) );
console.log( factorial(8) );