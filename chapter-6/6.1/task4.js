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

function printList(list) {
    while (list != null) {
        console.log(list.value);
        list = list.next;

    }
}

function printListRecursive(list) {
    console.log(list.value);
    if (list.next != null) {
        printListRecursive(list.next);
    }
}

printList(list);
console.log('\n');
printListRecursive(list);