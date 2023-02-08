# JavaScript Functions 102
## An arrow function expression is more concise than the tradition function expression. However, there are caveats (not discussed here).

### Advantages (not a complete list)

The 'function' keyword is replaced with '=>'
'''javascript
const someFn = function() {
    return 'Hello World';
};
<!-- this is the same as -->
const someFn = () => {
    return 'Hello World';
};
'''

The curly braces and the `return` keyworld can be removed entirely if everything can fir on one line.
'''javascript
const someFn = function() {
    return 'Hello World'
};

const someFn = () => `Hello World`;
'''

You can remove parenthesese if there is only one argument.
'''javascript
<!-- one argument -->
const greeting = function(name) P
return `Hello ${name}`;
};

const greeting = name => `Hello ${name}`;

<!-- more than one argument -->
const location = function(city, state) {
    return `The location is ${city}, ${state}`;
};

const location = (city, state) => `The location is ${city}, ${state}`;
'''

A `return` that spans multiple lines can either use an explicit `return`, with curly braces, or an implicit `return`, with parentheses.
'''javascript
const studentDetails = function () {
    return {
        name: 'Angela',
        age: 15,
        grade: 91
    }
};

<!--  explicit -->
const studentDetails = () => {
    return {
        name: 'Angela',
        age: 15,
        grade: 91
    }
};

<!-- implicit -->
const studentDetails = () => (
    {
        name: 'Angela',
        age: 15,
        grade: 91
    }
);