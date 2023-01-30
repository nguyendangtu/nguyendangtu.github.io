//assignment 1
/* var count = {
    counter: 0,
    add: (function () {
        return function () {
            return this.counter += 1;
        }
    })(),
    reset: (function () {
        return function () {
            return this.counter -= 1;
        }
    })()
}
console.log(count.add());
console.log(count.reset());
 */


//assignment 2
//free variable is counter
//free variable: A variable referred to by a function that is not one of its parameters or local variables.

//assignment 3

/* var count = {
    counter: 0,
    add: (function () {
        return function (x) {
            if(x==undefined) x = 1;
            return this.counter += x;
        }
    })(),
    reset: (function () {
        return function (x) {
            if(x==undefined) x = 1;
            return this.counter -= x;
        }
    })()
}

 function make_adder(x){
    return function add(){
        return count.add(x);
    }
}

/* var add5 = make_adder(5);
add5();add5();console.log(add5());  */
//var add7 = make_adder(7);
//add7();add7();console.log(add7()); 

//Assignment 4
/* var a = (function(){
    //file content
})(); */

//Assignment 5

/* var employee = (function () {
    var name;
    var age;
    var salary;
    function getName() {
        return name;
    }
    function getAge() {
        return age;
    }
    function getSalary() {
        return salary;
    }
    function setName(n) {
        name = n
    }
    function setAge(a) {
        age = a;
    }
    function setSalary(s) {
        salary = s;
    }
    function increaseSalary(percentage) {
        salary = getSalary() + getSalary() * percentage;
    }
    function increaseAge() {
        console.log(getAge())
        age = getAge() + 1;
    }

    return {
        setName: setName,
        setAge: setAge,
        setSalary: setSalary,
        increaseSalary: increaseSalary,
        increaseAge: increaseAge
    };

})();


employee.setAge(10);
employee.setName("john");
console.log(employee.age);

employee.increaseAge();
console.log(employee.age);

employee.address = "805 North 10th Street";
employee.setAddress = function(a){
    employee.address = a;
}
employee.getAddress = function(){
    return employee.address;
}
console.log(employee); */




