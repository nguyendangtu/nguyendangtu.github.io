

//Exercise 1
function filter(input, bannedword){
    if (input == null) return null;
    let arr = input.split(" ").filter(word => !word.includes(bannedword));
    return arr.join(" ");
}

//Exercise 2
function bubbleSort(arr) {

    for (var i = 0; i < arr.length; i++) {

        // Last i elements are already in place 
        for (var j = 0; j < (arr.length - i - 1); j++) {

            // Checking if the item at present iteration
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {

                // If the condition is true then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
}

//Exercise 3
var Person = function () { };
Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.describe = function () {
    return this.name + ", " + this.age + " years old.";
}

var Student = function () { };
Student.prototype = new Person();
Student.prototype.learn = function (subject) {
    console.log(this.name + " just learned " + subject);
}

var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");

var Teacher = function(){}
Teacher.prototype.__proto__ = Person.prototype;
Teacher.prototype.teach = function(subject){
    return this.name+ " is now teaching " + subject;
}

var teacher = new Teacher();
teacher.initialize("John", 36);
console.log(teacher.teach("Information Technology"));


