// 1 задание 
function camelize(str){
    let words = str.split('-').map((words,index) => index == 0 ? words : words[0].toUpperCase()+ words.slice(1));
    return words.join('')
}
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

// 2 задание
function filterRange(arr, a, b){
    let filterArray = arr.filter(item =>(a<=item && b>=item));
    return filterArray
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered);
console.log(arr);

// 3 задание
function filterRangeInPlace(arr,a,b){
    for (let i = 0; i < arr.length; i++){
        if (arr[i]<a || arr[i] > b){
            arr.splice(i,1)
        }
    }
    console.log(arr)
}

filterRangeInPlace(arr,1,4)
// 4 задание
arr = [5, 2, 1, -10, 8];

arr.sort((a,b) => b - a);
console.log(arr);
//5 задание
function copySorted(arr){
    let copy = []
    return copy = arr.map(item => item).sort()
}
arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
console.log(sorted)
console.log(arr)

//6 задание

function Calculator(){
    this.methods = {
        "-": (a,b) => a - b,
        "+": (a,b) => a + b,
    };
    this.calculator = function(str){
        let expression = str.split(' '),
        a = expression[0]
        operation = expression[1]
        b = expression[2]

             if(!this.methods[operation] || isNaN(a) || isNaN(b)){
                 return NaN;
             }
             return this.methods[operation](a,b);
        }

    this.addMethod = function(name,operation){
        this.methods[name] = operation;
    };
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculator("2 ** 3");
console.log( result ); // 8


// 7 задание
/*
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name)

console.log( names ); // Вася, Петя, Маша
*/
//8 задание
/*
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
    fullName: (`${user.name} ${user.surname}`),
    id:user.id,
}));


usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]

console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // Вася Пупкин
*/
// 9 задание
/*
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

 arr = [ vasya, petya, masha ];
function sortByAge(arr){
    arr.sort((a,b)=>a.age > b.age ? 1 : -1)
}

sortByAge(arr);

// теперь: [vasya, masha, petya]
console.log(arr[0].name); // Вася
console.log(arr[1].name); // Маша
console.log(arr[2].name); // Петя
*/
// 10 задание
 arr = [1, 2, 3];

 function shuffle(array){
    for (let i = 0; i < array.length; i++){
        let j = Math.floor(Math.random() * (i + 1));
        [array[i],array[j]]=[array[j],array[i]]
    }
    console.log(array)
 }

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// 11 задание

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

 arr = [ vasya, petya, masha ];

function getAverageAge(users){
    return users.reduce((sum,user)=> sum + user.age, 0 ) / users.length

}

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

// 12 задание

function unique(arr) {
    let arrayUniqueName = [];

    for (let name of arr){
        if (!arrayUniqueName.includes(name)){
            arrayUniqueName.push(name);
        }
    }
    return arrayUniqueName;
}
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  console.log( unique(strings) ); // кришна, харе, :-O