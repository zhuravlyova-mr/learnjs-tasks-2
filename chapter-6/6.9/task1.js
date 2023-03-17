function work(a, b) {
  console.log( a + b ); 
}

function spy(func) {
  
    function around(...args) {        
      around.calls.push(args);
      return func.call(this, ...args);
    }

    around.calls = [];
    return around;
}
  
work = spy(work);
 
work(1, 3); 
work(5, 15); 
  
for (let args of work.calls) {
  console.log( 'call:' + args.join() );
}