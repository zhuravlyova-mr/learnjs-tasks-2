function f(x) {
  console.log(x);
}

function delay(func, timeout) {
   
    return function around(...args) {
        setTimeout(() => func.call(this, ...args), timeout); 
    }

}


let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); 
f1500("task"); 