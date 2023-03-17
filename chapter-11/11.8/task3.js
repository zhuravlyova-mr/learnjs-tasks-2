async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 10;
  }
  
function f() {
    (async() => { 
       console.log( await wait() );     
    })();
}

f();