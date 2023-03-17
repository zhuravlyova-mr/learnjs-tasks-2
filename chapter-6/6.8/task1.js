function printNumbers(from, to) {
    let i = 0;

    let timer = setInterval(() => {
        console.log(from + i++);
        if (to - from == i - 1) {
            clearInterval(timer);
        }
    }, 1000);
}

function printNumbersOther(from, to) {
    let i = 0;

    let timer = setTimeout(function showFromToTo() {
        
        if (to - from == i - 1) {
            clearInterval(timer);
            return;
        }

        console.log(from + i++);
        setTimeout(showFromToTo, 1000);
    }, 1000);
}

printNumbers(10, 15);
printNumbersOther(20, 25);