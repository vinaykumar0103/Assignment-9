"use strict"

/*1) Carefully observe this example.
a) Is the InnerFunction() a closure?
b) What is output of this program

function OuterFunction()
{ var outerVariable = 100;
function InnerFunction() {
alert(outerVariable);
}
return InnerFunction;
}
var innerFunc = OuterFunction();
innerFunc(); */


//a) a) Yes, the InnerFunction() is a closure because it references a variable outerVariable declared in the outer scope of OuterFunction().

// b) function OuterFunction() {

function OuterFunction() {
  let outerVariable = 100;

  function InnerFunction() {
    console.log(outerVariable);
  }

  return InnerFunction;
}

let innerFunc = OuterFunction();
innerFunc();



/*2) What is the difference between a closure and a scope ?
*/

//closure

/*
 [A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment)
 . As we know what lexical scoping is, this definition is explanatory. But we will define Closures in Javascript as simply as possible]*/
function outerFunc() {
  let outerVar = 'I am outside!';
  function innerFunc() {
    console.log(outerVar);
  }
  innerFunc();
}
outerFunc();

//scope

/*In JavaScript, a variable has two types of scope:

1)Global Scope
2)Local Scope

1)A variable declared at the top of a program or outside of a function is considered a global scope variable.
let a = "hello";*/

function greet () {
    console.log(a);
}

greet();

//2)local scope

/*A variable can also have a local scope, i.e it can only be accessed within a function.*/

// program showing local scope of a variable
let a = "hello";

function greet() {
    let b = "World"
    console.log(a + b);
}

greet();
console.log(a + b);


/* 3. What is a lexical scope and how is it related to closure?*/

// In JavaScript, lexical scope is the scope determined by the placement of variables and functions in the code.
//  In other words, the scope of a variable or function is determined by where it is declared in the code,
//   and it is accessible within the block of code where it is declared and any nested blocks of code.
//  Closures are closely related to lexical scope in JavaScript. A closure is a function that has access to variables in its outer (enclosing) lexical scope, 
//  even after the outer function has returned. This means that a closure can access variables and functions that were defined outside of its own scope,
//   including variables that were declared in the parent function's scope.

function outerFunction() {
  let outerVariable = 'hello';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const innerFunction = outerFunction();
innerFunction();


/*4. Output of following closure ?
for (var i = 0; i < 3; i++) {
setTimeout(function log() {
console.log(i); // What is logged?
}, 1000);
} */

// The output of the closure in this code will be 3, printed three times, each time with a delay of one second.

// This happens because the var keyword is used to declare the i variable, which has function scope rather than block scope. As a result, the i variable is shared by all three iterations of the loop and its value is incremented to 3 at the end of the loop.

// When the setTimeout function runs after a delay of one second, it executes the log function, which references the shared value of i in its outer lexical scope. At this point, the value of i is 3, because the loop has already completed, and this is the value that is printed to the console.

// Therefore, the closure created by the log function will log 3 to the console three times, each time with a delay of one second.