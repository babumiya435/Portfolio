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

console.log("------------ Functions ------------");

function add (a,b){
    return a+b;
}

const arrowFunction = ()=>{
    return a + b;   // can arraowFunctions can be considered as function variable ?
}

console.log("------------ Arrays ------------");

let arr = [1,"name",true];
arr.push("xyz");
arr.pop();
arr[0];

console.log("------------ Objects ------------");

let ob = {
    name : "Sameer",
    age: 30,
    add: function(){}   // can we create arraow function here ?
}

ob['age'];
ob.name;
ob.salary = 2000;
delete ob.add;

console.log("------------ Error Handling ------------");

try {
    // code block
} catch (err) {
    // handle error
} finally {
    // execute code regardless of error
}

console.log("------------ DOM Manipulation ------------");
// Selecting Elements:
document.getElementById('id');
document.getElementsByClassName('className');
document.querySelector('.class');
document.querySelectorAll('tag');

// Manipulating Elements:

let element = querySelector('id');
element.innerHtm = "new Html";
element.style.color = "red";
element.cassList.add("new-class");
element.setAttribute("attributeName", "value");

console.log("------------ Asynchronous JavaScript ------------");

// Promises:
const promise = new Promise((resolve,reject)=>{
    // async code
    if (res) {
        resolve("result");
    } else {
        reject("Error")
    }
})

promise.then((resp)=>{
    // handle success
}).catch((err)=>{
    // handle error
})

// Async/Await:

async function functionName() {
    try {
        const result = await asyncFunction();
        // handle result
    } catch (err) {
        // handle error
    }
}



