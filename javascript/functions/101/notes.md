# JavaScript Functions 101
## A general overview

### Terms

**argument**
A hardcoded value passed into a function when it is executed. For example, greeting('John')
In the example below `'John'` in between the parenthesis is the argument.
'''
greeting('John')
'''
**anonymous function**
A function that is not named (see also function expression).
In this function expression, the function part is considered anonymous.
'''
const greeting = function.) {
    return 'Hello ${name}';
}
'''

**call**
An action which exectures (or fires) the function. 


**callback function**
Executes within the function to which it is passed as an argument.
'''
const cb = function() {
    console.log('I am the callback.');
}

function greeting(name, fn) {
    fn();
    return 'Hello ${name}';
}
'''


**function**
There are two contexts. One is the function definition itself. Another is the code within the definition which executes when called and which sometimes returns a value. For example, greeting(name), because it's a pass-through. It doesn't hold an actual value.


**function body**
Contains the code of the function itself within a set of curly braces.


**function declaration**
Uses the _function_ keyword to declare a named function. The name of the function immediately follows the _function_ keyword.
'''
function greeting() {
    return 'Hello, you sure look nice today.';
}
'''

**function expression**
A function that is the initialization of a variable declaration. The variable, which is named, stores the function but the function itself is considered anonymous or unnamed.
'''
const greeting = function() {
    return 'Hello, you sure look nice today.';
}
'''


**hoisting**
Allows a function declaration to be used in code before it is declared.


**IIFE**
An _immediately invoked function expression_ is a function that is executed directly by the JavaScript engine and not by other code.
'''
(function () {
    return 'Hello';
})();
'''
IIFEs can also have arguments and parameters.
'''
(function (name) {
    return 'Hello, ${name}.';
    }}
})('Carlos')
'''


**named function**
See function declaration.


**parameter**
A parameter is a placeholder whose value equals the argument passed into the funciton when it was called. This value is accessed only within the function itself. 
In the example 'name' inside of the parenthesis is the parameter. 
'''
function greeting(name) {
    return 'Hello ${name), you sure look nice today.';
}
'''


**parenthesis**
The parentheses have two purposes. One is to execute a function. Another is part of the syntax to define a function. In the former (to execute), it may contain arguments. In the latter, it may contain parameters. 


**return**
If implemented, it executes the last line of a function's code. It precedes a data type or a collection to be returned. We say that a function closes or exits when the code that follows _return_ executes which also means that any lines beneath it are ignored.


**scope**
Refers to what values are available in memory at a given time during the execution of code. If you use example 2, and type "console.log(name)" or "name", it'll say undefined because there's no value for name. It's _outside_ of the scope of the function. 



**Example in VSC/editor:**
'''
function greeting () {
    return 'Hello, you sure look nice today.';
}
'''
greeting()
'''
greeting() (in terminal will execute the function)
greeting (in terminal, without parenthesis will define the function)

**Example 2 in VSC/editor:**
'''
function greeting(name) {
    return 'Hello ${name), you sure look nice today.';
}
'''
greeting(name) - this is considered a parameter, because it's in the definition of the function.
greeting('John') - this would be an argument, because it's in the execution of the function. You're making changes that affects the dynamic parameter.

In this case, putting greeting(inSert) will show 'Hello, John, you sure look nice today.

**Example 3 (function declaration vs. function expression)**
Function declaration:
'''
greeting();

function greeting() {
    return 'Hello';
}
'''
This will return 'Hello'. This executes because as long as a function is declared, it will _hoist_ the function up and is therefore executable.

Function expression:
'''
greeting();

const greeting = function() {
    return 'Hello';
}
'''
This will return a syntax error. This reads top-down. In other words, it won't run unless the execution comes _after_ the expression.

**Example 4 (IIFE)**
'''
(function () {
    return 'Hello';
})();
'''

'''
(function (name) {
    return 'Hello, ${name}.';
    }}
})('Carlos')
'''

**Node Notes**

node - enter node mode
.exit - exit node mode
.editor (in node mode) - allows you to insert multiple lines of code



