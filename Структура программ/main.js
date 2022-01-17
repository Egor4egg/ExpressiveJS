//1 task

/*var i;
var containStar = ' ';
var star = '#'
for (i=0; i < 7; i +=1){
    containStar +=star
    console.log(containStar)
}
*/
//2 task

/*
var i;
for (i=1;i<=100;i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log('FizzBuzz');
        continue;
    }
   else if (i % 3 == 0){
        console.log('Fizz');
        continue;
    }
    else if (i % 5 == 0){
        console.log('Buzz');
        continue;
    }
    console.log(i);
}
*/

//3 task

var i;
var j;
var size = prompt("Введите размер доски")
var container = ' ';
for (i=0; i<size; i++){
    for (j=0; j<size; j++){
        if ((i+j) % 2 !=0){
            container += "#";
        }
        else{
            container += " ";
        }
    }
    container+= '\n';
}
console.log(container);