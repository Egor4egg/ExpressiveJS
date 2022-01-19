// Поиск минимума

const min = (number1, number2) =>(number1 < number2) ? number1 : number2  ;
console.log(`${min(5,3)} меньше`)


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
    let count = 0;
    for (let i = 0; i < str.length; i+=1){
        if (str.charAt(i)=='B'){
            count+=1;
        }
    }
    return count;
}
console.log(countBs("Bobs"))