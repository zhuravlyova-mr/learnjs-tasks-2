Function.prototype.defer = function(ms) {
    return (...args) => {
        setTimeout(() => this.call(this, ...args), ms);
    }    
}

function f(a, b) {
    console.log( a + b );
}
  
f.defer(1000)(1, 2); 