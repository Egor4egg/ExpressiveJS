function sumSalaries(salaries){
    let sum = 0;
        if (salaries == {}){
            return 0;
        }
        sum = Object.values(salaries).reduce((a,b)=> a + b)
return sum;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  console.log( sumSalaries(salaries) ); // 650

  function count(obj){
      return Object.keys(obj).length
  }

  let user = {
    name: 'John',
    age: 30
  };
  
  console.log( count(user) ); // 2