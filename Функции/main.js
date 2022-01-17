// Поиск минимума
/*
function min (number1, number2){
    if (number1 > number2){
        console.log(number2)
    }
    else if (number2 > number1){
        console.log(number1)
    }
    else{
        console.log("Number 1 is equal Number 2")
    }
}
min(10,10)
*/

//Проверка на чётность

/*function isEven(value){
    if (value < 0){
        value*= -1
    }
    if (value == 0){
        return true;
    }
    if (value == 1){
        return false;
    }
    return isEven(value%2);
}

console.log(isEven(-2));
*/

//Считаем бобы

function countBs(str){
    var count = 0;
    for (var i = 0; i < str.length; i+=1){
        if (str.charAt(i)=='B'){
            count+=1;
        }
    }
    return count;
}
console.log(countBs("Bobs"))