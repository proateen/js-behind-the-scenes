
// Lecture: Hoisting

// Function hoisting: Function declarations can be hoisted, but function expressions can not. See the 2 examples below. The first is a function declaration.

calculateAge(2000);

function calculateAge(year) {
    console.log(2020 - year);
};


retirement(2000); // Running this code will return an error in the console.

var retirement = function(year) {
    console.log(65 - (2020 - year));
};

// variables

console.log(age); // Running this will return "undefined", because the variable has been logged to the console because it was defined afterwards.
var age = 23; // This 'age' variable is stored in the global execution context object.
console.log(age); // This will log "23" to the console.

function foo() {
    var age = 65; // This 'age' variable gets stored in the function's execution context object, not in the global.
    console.log(age); 
}

foo(); // This will log the 'age' variable that was defined in the variable object of the execution context object of the 'foo' function.
console.log(age); // This will log the 'age' variable that was defined in the global execution context object.


// Lecture: Scoping


// First scoping example, which will return "Hello!Hi!Hey!" because of lexical scoping.

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

// Example to show the differece between execution stack and scope chain

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    //console.log(c); // Will return undefined
    console.log(a+d);
}

// Lecture: the 'this' keyword

// console.log(this); // The 'this' keyword in the global execution context object is simply the window object.

calculateAge(2000);

function calculateAge(year) {
    console.log(2020 - year);
    console.log(this); // In a regular function call, the 'this' keyword will refer to the window object.
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this); // The 'this' keyword is now the 'john' object because it will refer to the object that called the method.
    }
}