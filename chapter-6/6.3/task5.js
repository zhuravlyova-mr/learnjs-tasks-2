function inBetween(a, b) {
    return (value) => value >= a && value <= b;
}

function inArray(argArray) {
    return (value) => argArray.includes(value);
}

let arr = [3, 4, 5, 6];

console.log( arr.filter( inBetween(4, 6) ) );
console.log( arr.filter( inArray([1, 5, 4]) ) );