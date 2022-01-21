//1 задание
let user = { name: "John", years: 30 };

let {name, years:age, isAdmin = false} = user

console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false

//2 задание

function topSalary(salaries){
    let max = 0;
    let nameMax
    if (typeof salaries == 'null'){
        return null;
    }
    for (const [name,salary] of Object.entries(salaries)){

        if (max < salary){
            max = salary;
            nameMax = name;
        }
    }
    return nameMax
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
 console.log(topSalary(salaries));