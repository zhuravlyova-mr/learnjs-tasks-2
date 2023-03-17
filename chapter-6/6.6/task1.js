function makeCounter() {
    

    function counter() {
        return counter.count++;
    }
     
    counter.set = function(value) {
        counter.count = value;
    }
   
    counter.decrease = function() {
        --counter.count;
    }
    
    counter.count = 0;
    return counter;
  }

let counter = makeCounter();

console.log( counter() ); // 0
counter.set(15);
console.log( counter() ); 
counter.decrease();
counter.decrease();
console.log( counter() ); 