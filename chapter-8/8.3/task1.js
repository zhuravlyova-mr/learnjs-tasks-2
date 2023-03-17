Function.prototype.defer = function(ms) {
    setTimeout(() => this.apply(this, arguments), ms);
}

function f() {
    console.log("Hello!");
  }
  
  f.defer(1000); 