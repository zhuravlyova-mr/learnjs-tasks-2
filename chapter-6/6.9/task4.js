function throttle(func, timeout) {
   
    let isPassed = true;
    let lastArgs = null;
    let lastContext = null;

    return function around(...args) {   
        if (!isPassed) {
            lastArgs = arguments;
            lastContext = this;
            return;
        }
        func.apply(this, args);
        isPassed = false;
        setTimeout(() => {
            isPassed = true;
            if (lastArgs) {
                around.call(lastContext, ...lastArgs);
                lastContext = null;
                lastArgs = null;
            }
        }, timeout);
    }
}


function f(a) {
    console.log(a);
}
  
  // f1000 передаёт вызовы f максимум раз в 1000 мс
  let f1000 = throttle(f, 1000);
  
  f1000(1); // показывает 1
  f1000(2); // (ограничение, 1000 мс ещё нет)
  f1000(3); // (ограничение, 1000 мс ещё нет)