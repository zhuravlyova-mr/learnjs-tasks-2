function f(x) {
  console.log(x);
}

function debounce(func, timeout) {
   
    let passedTime;

    return function around(...args) {   
        if (Date.now() - passedTime < timeout) {
            return;
        }
        func.apply(this, args);
        passedTime = Date.now();
    }
}

function debounceOther(func, timeout) {
   
    let isPassed = true;

    return function around(...args) {   
        if (!isPassed) {
            return;
        }
        func.apply(this, args);
        isPassed = false;
        setTimeout(() => isPassed = true, timeout);
    }
}

f = debounceOther(f, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // 