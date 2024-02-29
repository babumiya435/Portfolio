// "-----------Variables------------"


// Why Variabes are needed?
//Drawbacks(Without variable name):
// Usages(With variable):
// use case1 : Storing a value.
// use case2 : Reusability.
// use case3 : State Management.
// use case4 : Performing Computations.
// use case5 : Flexibility.
// use case6 : Dynamic Behavior.
// use case7 : Flexibility.
// use case8 : Scope Management.
// use case9 : Debugging.

// -----------------------------------------------
// use case1 : Storing a value.
let age = 30;
let name = "John";
let isStudent = false;
let salary = 2000;
// --------------------------------------------------
// use case2 : Reusability.
var quaterlySal = salary * 12;
// console.log("Employee Quaterly Salary per month :", quaterlySal);

var yearlySal = salary * 12;
// console.log("Employee Yearly Salary per month :", yearlySal);

function greet() {
    console.log("Hello, " + name1); // Output: "Hello, undefined"
}


let name1 = "John";
greet();

for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // Output: 3 3 3
    }, 1000);
}






