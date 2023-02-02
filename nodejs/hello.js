const { get } = require('http');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

 readline.question('What is your name', name =>{
    console.log(`welcome ${name}`);
    readline.question('what is your age ', age => {
        if(age < 16){
            console.log("You’re not allowed to drive in Iowa");
        }else{
            console.log("You’re allowed to get a drivers license in Iowa");
        }
        readline.close;
    });
    readline.close;
});
 

//question 2
let sum = 0;

function getNumber(){
    readline.question('Please enter a number or "stop" to quit: ', answer =>{
        if(answer == 'stop'){
            console.log(`The sum of all numbers entered is ${sum}`);
        }else{
            sum += parseInt(answer);
            getNumber();
        }
    });
}

getNumber();
