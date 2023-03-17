function sum(a) {
    return function g(b) {
        return a + b;
    }
}

console.log( sum(3)(8) );
console.log( sum(12)(-5) );