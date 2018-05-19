I use [this reference](https://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/) on JavaScript scope to walk through these concepts.


A variable's scope can be either _global_ or _local_. First, let's talk about `var`. 

A variable declared using `var` _outside of a function_ has global scope. This means that you can reference the variable anywhere in your code.

    // I can use this anywhere
    var x = 3;

A variable declared with `var` _within_ a function is accessible only within that function, and any nested functions.

For a very long time, this was the only way we could scope variables in JavaScript. But [ES6 changed that](https://www.sitepoint.com/es6-let-const/).

[`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) and `const` introduce a notion of block scope. Block scope allows the use of a variable only within the "block" in which it was defined. Anything between the `{` and `}` in JavaScript is a block. So functions are still blocks, but conditional statements are also blocks. Let's look at [`scope.js`](scope.js) to see some examples of this behavior.
