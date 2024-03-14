console.log("------------ variables ------------");

// variables are the container names for the data we want to store in a  memory and can easyly accessable.

var a = 1; // avoid using var (hoisting, global scope, redeclaraion, memory use)
let b = "one";
const c = true;

console.log("------------ data types ------------");

// data types are the different types of the the we can store in js variables according to requirements

let number = 2;
let string = "Sameer";
let boolean = false;
let array = [1,2,3,"x",[1,2,3]];
let object = {name : "Babu Miya", age: 30};
let functionVariable = function(){ a+b };

console.log("------------ Conditional Statements ------------");

if (2==2) {
    // code block
} else if (2!==3) {
    // code block
}else {
    // code block
}

console.log("------------ Loops ------------");

for (let i = 0; i< 10; i++) {
    // code block
}

while (number) {
    // code block
}

do {
    // code block
} while(number)

console.log("------------ Loops ------------");

function add (a,b){
    return a+b;
}

const arrowFunction = ()=>{
    return a + b;   // can arraowFunctions can be considered as function variable ?
}


