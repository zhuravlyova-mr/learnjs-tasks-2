function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; ++i) {
        sum += i;
    }
    return sum;
}

function sumToRecursive(n) {
    if (n == 1) return n;
    else {
        return n + sumToRecursive(n-1);
    }
}

function sumToArifmetic(n) {
    return (n + 1) * n / 2;
}

console.log( sumTo(100000) );
console.log( sumToRecursive(10000) ); //Maximum call stack size exceeded for 100000
console.log( sumToArifmetic(100000) );