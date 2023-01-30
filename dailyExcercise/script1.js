
/* let add = (function(){
    let counter = 0;
    return function(){
        return counter +=1;
    }
})();

console.log(add());
console.log(add()); */

/* var add = (function(){
    var counter = 0;
    return function(){
        return counter +=1;
    }
})();

console.log(add());//1
console.log(add());//2 */


/* var funcs = [];
for (var i = 0; i < 5; i++) {
    funcs[i] = function () {
        return i;
    };
}
console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());
console.log(funcs[3]());
console.log(funcs[4]());
 */
/* var helper = function (n) {
    return function () { return n; }
}
var funcs = [];
for (var i = 0; i < 5; i++) {
    console.log("i="+i);
    funcs[i] = helper(i);
};
console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());
console.log(funcs[3]());
console.log(funcs[4]()); */

/* var funcs = [];
for (var i = 0; i < 5; i++) {
    funcs[i] = function () {
        console.log("i= "+i);
        return i;
    };
}
console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());
console.log(funcs[3]());
console.log(funcs[4]()); */

/* const x = 1;
function f() {
    let y = 2;
    const sum = function () {
        const z = 3;
        console.log(x + y + z);//14
    }
    y = 10;
    return sum;
} //end of f
const g = f();
g(); */

/* closure: A first-class function that binds to free variables that are defined in its
execution environment.
• free variable: A variable referred to by a function that is not one of its
parameters or local variables.
• bound variable: A free variable that is given a fixed value when "closed over" by a function's
environment. */

/* function makeFunc() {
    const name = "Mozilla"; //local to makeFunc
    function displayName() {
        console.log(name);
    }
    return displayName;
}
const myFunc = makeFunc();
myFunc(); */

/* 
function init() { //function declaration
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    displayName();
}
init(); */

/* 
var x = 10;
function main() {
    console.log("x1 is:" + x);
    x = 20;
    console.log("x2 is:" + x);
    if (x > 0) {
        var x = 30;
        console.log("x3 is:" + x);
    }
    console.log("x4 is:" + x);
    var x = 40;
    var f = function (x) {
        console.log("x5 is:" + x);
    };
    f(50);
    console.log("x6 is:" + x);
}

main();
console.log("x7 is:" + x); */


/* function f() {
    var a = 1, b = 20, c;
    console.log(a + " " + b + " " + c);
    function g() {
        var b = 300, c = 4000;
        console.log(a + " " + b + " " + c);
        a = a + b + c;
        console.log(a + " " + b + " " + c);
    }
    console.log(a + " " + b + " " + c);
    g();
    console.log(a + " " + b + " " + c);
}
f(); */

/* 
function b(){
    function a(){
        console.log(x);
    }
    var x=10;
    a();
}
var x = 20;
b(); */



/* x = 5;
var x;
console.log(x); */


/* const myFunc = function(a,b){
    return a*b;
}

function apply (a,b,applyFunc){
    const y = applyFunc(a,b);
    return y;
}

const x = apply(2,3,myFunc);
console.log(x); */

/* function sum(){
    let sum = 0;
    for(let i=0;i<arguments.length;i++){
        sum += arguments[i];
    }
    return sum;
}

console.log(sum(1,2,3,4)); */
/* function sum(x, y, ...some){
    let total = 0;
    total = total + x + y;
    for(let i=0;i<some.length; i++){
        total += some[i];
    }
    return total;
}
console.log(sum(2,3));
console.log(sum(2,3,4,5,6)); */