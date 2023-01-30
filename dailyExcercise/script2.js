
/* 
//assignment 1
x=1;
var a=5;
var b=10;
var c= function(a,b,c){
    console.log(x);//undefined
    console.log(a); //8
    var f = function(a,b,c){
        b = a;
        console.log(b); //8
        b = c; //b=10
        var x=5;

    }
    f(a,b,c);
    console.log(b); //10
    var x=10;
}
c(8,9,10);
console.log(b);//10
console.log(x);//1 */

//Assignment 3
//SCOPE A

/* function xFunc(){
    //SCOPE B
    function yFunc(){
        //SCOPE C
    }
}  */
/*
a. Do statements in Scope A have access to variables defined in Scope B and C? False
b. Do statements in Scope B have access to variables defined in Scope A? True
c. Do statements in Scope B have access to variables defined in Scope C? False
d. Do statements in Scope C have access to variables defined in Scope A? True
e. Do statements in Scope C have access to variables defined in Scope B? true
*/


//Assignment 4
/* var x=9;
function myFunction(){
    return x*x;
}
console.log(myFunction()); //81
x=5; 
console.log(myFunction()); //25 */

//Assignment 5
/*  var foo = 1;
function bar(){
    if(!foo){
        var foo = 10;
    }
    alert(foo);//10
}
bar();
 */
//PASS 1 compiler
//1. var foo
//2. foo = 1
//3. bar
    //3.1 var foo (luc nay foo = undefined)

//PASS 2 compiler
//4. bar()
//5. (!foo) tuong duong (!undedined) => true => foo = 10 



//*************************************************************************************************************** */
/**implement the returnHiddenValue function which returns
 * the value of the hiddenHTML element with the id "val".
*/
function returnHiddenValue(){
    return document.getElementById("val").value;

}
/* ------------------------------------------------- */

/* Use the map function on testArray 
(which is an array of strings) to get an array
of numbers representing their lengths */ 
let testArray = ["a","bb","ccc","DDDD"];
let map = testArray.map(x=>x.length);
console.log(map);

/* ------------------------------------------------- */

/* Use the filter function on testArray 
(which is an array of strings) to get an array
of strings representing the value of the elements
which start with an uppsercase character */ 
let filter = testArray.filter(x=> /^[A-Z]./.test(x));
console.log(filter);
/* ------------------------------------------------- */

/* Use the reduce function on testArray 
(which is an array of strings) to get a string
combining all of the elements in testArray */ 
let reduce = testArray.reduce((x,sum) => x+sum);
console.log(reduce);
/* ------------------------------------------------- */

/* Implement the sumNumbers method to return
the sum of any number of inputs using a rest parameter */
function sumNumbersArray(...x){
    return x.reduce((a,b)=> a+b, 0);
}
console.log(sumNumbersArray(1,2,3));

/* ------------------------------------------------- */

/* Implement the combineArrays method which
takes two arrays as inputs and returns an
array with all of the elements of the two input
arrays - (Hint: use spread)*/
function combineArrays(x, y){
    return [...x, ...y];
}
console.log(combineArrays(["a","b"],["c"]));

/* ------------------------------------------------- */

/*Implement the addNumber method to return a function
which is a closure to its input (x) which adds that input
to its own input (y) and returns the value of their sum*/
function addNumber(x){
    return function(y){
        return x + y;
    }
}
console.log(addNumber(1,2));

/*-------------------------------------------------*/

function currying(x, z){
    return x + this.y + z;
}

/* ------------------------------------------------- */

/*Create an object called myObject which has two
parameters:
x which has the value of 5
y which has the value of 10
*/
let myObject = {
    x:5,
    y:10
}

/* ------------------------------------------------- */

/*Use bind on the function "currying" to bind myObject
with 1 , 2 as input values*/
let bindTest = currying.bind(myObject,1,2);

/* ------------------------------------------------- */

/*Use call on the function "currying" to bind myObject
with 6 , 7 as input values*/
let callTest = currying.call(myObject,1,2);

/* ------------------------------------------------- */

/*Use apply on the function "currying" to bind myObject
with 5 , 45 as input values*/
let applyTest = currying.apply(myObject,[5,45]);

/* ------------------------------------------------- */

/*Use an IIFFE in order to take two inputs x , y
and return x * y, use 7 and 6 as test values*/
 let usingiIffe = (function (x,y){
    return x*y;
})(6,7);
console.log(usingiIffe); 

/* ------------------------------------------------- */

/*Use a revealing module pattern where you will declare
let x = 5, let y = 8 and a function called doMath to return
the sum of x + y. return an object with a function named
math which exposes the doMath function*/
/* let usingModule = (function(){
    let x = 5;
    let y = 8;
    function doMath(){
        return x+y;
    }
    return{
        math : doMath
    }
})();
console.log(usingModule.math()); */

/*----------------------------------------------------*/

/*Use any inheritance strategy you see fit to create a 
person object, the person object will have a name and
a function called speak which simply returns the
value of name.

Create an object called dave which inherits from 
person and uses "Dave Smith" to set the property of name
inside the parent object.

Create an object called charlie which inherits from 
person and uses "Charlez Brown" to set the property of name
inside the parent object.
Add a function named eat to charlie which simply returns
"eating...."*/
/* var Person = function(name){
    this.name = name;
}
Person.prototype.speak = function(){
    return this.name;
}
var Dave = function(){

}
Dave.prototype.__proto__ = Person.prototype;
Dave.prototype.__proto__.name = "Dave Smith";

var Charlie = function(){

}
Charlie.prototype.__proto__ = Person.prototype;
Charlie.prototype.__proto__.name = "Charlez Brown";
Charlie.prototype.eat = function(){
    return "Eating...";
}

var person = new Person("John");
var dave = new Dave();
var charlie = new Charlie();
console.log("person");
console.log(person);
console.log(person.name);
console.log(person.speak());
console.log("dave");
console.log(dave);
console.log(dave.name);
console.log(dave.speak());
console.log("charlie");
console.log(charlie);
console.log(charlie.name);
console.log(charlie.eat());
console.log(charlie.speak());
console.log(person.speak()); */

function dog(){
    print("abc");
}
dog.name = "aaa";




