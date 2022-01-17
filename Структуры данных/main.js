//1 диапозон в массиве
/*function range(start,end,step){
    var array =[]
    if (arguments.length == 2){
        step = 1;
    }
    if (step < 0){
        for (start; start >= end; start += step){
            array.push(start);
        }
    }
    else{
        for (start;start<=end;start += step){
            array.push(start);
        }
    }

return array    
}

function sum(array){
    var sum = 0;
    var i;
    for (i = 0; i < array.length; i++){
         sum += array[i];
    }
    return sum
}

console.log(range(5,2,-1))
console.log(sum(range(1,10)))
*/

//Вспять массив
/*
var array = [1,2,3,4,5];

function reverseArray(array){
    array1 = []
    for (i=array.length-1; i >=0; i --){
        array1.push(array[i])
    }
    return array1;
}

function reverseArrayInPlace(array){
    for (var i = array.length;i--;){
        array.push(array[i])
    }
    return array;
}
console.log(reverseArray(array))
console.log(reverseArrayInPlace(array))

*/

//Список
/*
function arrayToList(array){
    var result = null;
    for (i = array.length - 1; i >= 0; i --){
        result ={
            value: array[i],
            rest: result
        }
    }
    return result;
}

function listToArray(list){
    var result = [];
    do{
        result.push(list.value);
        list = list.rest;
    }while(list!== null)
    return result;
}

function prepend (list, el){
    return{
        value: list,
        rest: el
    }
}

function nth (list,index){
    if(!list){
        return undefined;
    }
    else if (index == 0){
        return list.value;
    }
    else{
        return nth(list.rest,index - 1);
    }
}

console.log(arrayToList([10,20]))
console.log(listToArray(arrayToList([10,20,30])))
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
*/

//глубокое сравнение ???

