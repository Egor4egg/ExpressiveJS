//1 диапозон в массиве
/*function range(start,end,step){
    let array =[]
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
    let sum = 0;
    let i;
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
let array = [1,2,3,4,5];

function reverseArray(array){
    array1 = []
    for (i=array.length-1; i >=0; i --){
        array1.push(array[i])
    }
    return array1;
}

function reverseArrayInPlace(array){
    for (let i = array.length;i--;){
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
    let result = null;
    for (i = array.length - 1; i >= 0; i --){
        result ={
            value: array[i],
            rest: result
        }
    }
    return result;
}

function listToArray(list){
    let result = [];
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

//глубокое сравнение 
function deepEqual(value1, value2){
    if (value1 === value2){
        return true;
    }
    if ((typeof value1 !="object" || value1 == null || typeof value2 !="object" || value2 == null)){
        return false;
    }

    let properties1 = 0;
    let properties2 = 0;
    for (let prop in value1){
        properties1++;
    }
    for (let prop in value2){
        properties2++;
        if (!(prop in value1 ) || !deepEqual(value1[prop],value2[prop])){
            return false;
        }
    }
    return properties1 == properties2;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
