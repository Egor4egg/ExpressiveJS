var arrays = [[1, 2, 3], [4, 5], [6]];
var array = arrays.reduce((a, b) => a.concat(b));
console.log(array);
// → [1, 2, 3, 4, 5, 6]


function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
  }
  
  var byName = {};
  ancestry.forEach(function(person) {
    byName[person.name] = person;
  });
  
  
  
  // → 31.2
  

  