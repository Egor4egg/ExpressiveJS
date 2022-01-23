//1 задание
function sumTo(n){
    if (n == 0){
        return n;
    }
    if (n > 0){
        return n + sumTo(n - 1);
    }
    else{
        return n + sumTo(n + 1);
    }
}

console.log(sumTo(100))

// 2 задание
function factorial(n){
    return n == 1 ? n : n * factorial(n - 1)
}
console.log(factorial(5))

// 3 задание
function fib(n){
    return n <= 1 ? n : fib(n - 1)+ fib(n - 2)
}
console.log(fib(7))

// 4 задание
function printList(list){
    console.log(list.value);
    if (list.next){
        printList(list.next);
    }
}

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

  printList(list)

// 5 задание

function printReverseList(list){
    if (list.next){
        printReverseList(list.next);
    }
    console.log(list.value)
}


  printReverseList(list)