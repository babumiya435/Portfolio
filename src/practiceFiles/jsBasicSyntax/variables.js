// "-----------Variables------------"


// Why Variabes are needed?
// Different data types of data we can store in a memory and can be accessed or modified by using a name called variable
// salary ---> 5000 : 5000 is stored in memory and this memory location can be access/pointed through salary variable.

// use case1 : want to use emloyee salary component 20000 value in my code at 100000000 places.

// traditional/basic way is : use 123456789 where ever it is required by directly copying.
console.log("Employee Salary per month :",20000);
console.log("Employee Salary per quarter :",20000 * 4);
console.log("Employee Salary per year:",20000 * 12);
console.log("Employee net salary after deduction per year:",20000 *12 - 15000);
// ..........
// ......100000000 lines of usage

//solution:

var salary = 20000;
console.log("Employee Salary per month :",salary); // we can call or update the value with its variable name whenever we want to.

//Drawbacks(Without variable name):
//with variable name system only allocate datatybes of memoery once
//without variabe name whenever we access manual values (for eachaccess new memory space will be accessed) ------> More Memory Usage
// "No Data Storage: Without variables, there would be no way to store and reference data values. Every piece of data would need to be hardcoded directly into the code, leading to repetitive and less maintainable code.",
//     "Limited Reusability: Variables enable code reusability by storing values that can be used multiple times within a program. Without variables, code duplication would increase, as developers would need to repeat values and expressions throughout the codebase.",
//     "Difficulty in Managing State: Variables are essential for managing the state of an application. State management becomes challenging without variables, making it difficult to track and update the state of data throughout the application.",
//     "Inability to Perform Computations: Variables are crucial for performing computations and calculations in programs. Without variables, mathematical operations, data transformations, and other computations would be cumbersome and error-prone.",
//     "Limited Flexibility: Variables provide flexibility in programming by allowing values to be assigned, reassigned, and modified as needed. Without variables, developers would have limited flexibility in manipulating data and controlling program flow.",
//     "Lack of Dynamic Behavior: Variables enable dynamic behavior in programs by allowing values to change based on conditions and user input. Without variables, programs would have static and predictable behavior, lacking the ability to adapt to changing circumstances.",
//     "Debugging Challenges: Variables help in debugging by providing named references to data values. Without variables, it would be more challenging to identify and trace the flow of data within a program, leading to increased debugging complexity."

// Usages(With variable name):
// 1. less memory usge
// 2. Easy access of stored data in memory through their address pointer/variables names
// "Data Storage: Variables allow you to store and reference data values. This is fundamental to programming as it enables you to work with data throughout your code.",
//     "Code Reusability: Variables enable you to reuse values and expressions multiple times within a program. This reduces redundancy and makes your code more maintainable.",
//     "State Management: Variables are crucial for managing the state of an application. They allow you to track and update the state of data throughout the application's lifecycle.",
//     "Performing Computations: Variables are essential for performing computations and calculations in programs. They enable you to store intermediate values and manipulate data efficiently.",
//     "Flexibility: Variables provide flexibility in programming by allowing values to be assigned, reassigned, and modified as needed. This allows you to control program flow and adapt to changing requirements.",
//     "Dynamic Behavior: Variables enable dynamic behavior in programs by allowing values to change based on conditions and user input. This makes your programs interactive and responsive.",
//     "Scope Management: Variables have scope, which defines where they are accessible in your code. This helps in organizing and managing the flow of your program and prevents naming conflicts.",
//     "Debugging: Variables provide named references to data values, which aids in debugging. They help you identify and trace the flow of data within your program, making it easier to diagnose and fix issues."
// ----------------------------------------------------------------


