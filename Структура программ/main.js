//1 task

/*
let containStar = ' ';
let star = '#'
for (let i=0; i < 7; i ++){
    containStar +=star
    console.log(containStar)
}
*/
//2 task

/*
for (let i=1;i<=100;i++){
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
let container = ' ';
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question("Enter the size chess board ",size=>{
    for (let i=0; i<size; i++){
        for (let j =0; j<size; j++){
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
    readline.close();
});