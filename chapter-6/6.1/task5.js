let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

function printListBack(list) {
    let values = []
    while (list != null) {
        values.push(list.value);
        list = list.next;
    }
    
    do {
       console.log(values.pop());
    }
    while (values.length != 0);
}

function printListBackRecursive(list) {
    if (list.next != null) {
        printListBackRecursive(list.next);
    }
    console.log(list.value);
}

printListBack(list);
console.log('\n');
printListBackRecursive(list);