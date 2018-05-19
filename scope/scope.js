// Global scope - I can use x anywhere
var x = 3;

console.log('I can use x here:', x);

function testLocalScope() {
  // y is "scoped" to this function. I can't use it outside of this function
  var y = 2;
  console.log('I can use x here, as well:', x);
}

testLocalScope();

try {
  console.log(y);
} catch (err) {
  console.log('Error when trying to print y:', err);
}

// let - block scope

// let is defined with block scope here,
// it just happens to be the scope of the whole program.
// So we can use g anywhere below this particular point.
let g = 4;

function printVar(v) {
  console.log(v);
}

printVar(g);

// To see the real power of let, let's examine a piece of code
// that includes a "gotcha". We'll still use var here, and
// replace it with let later.

if (g > 3) {
  var thisShouldWorkOnlyWithinThisBlock = 7;
}

// I would not expect this to work in my program.
// I wanted to use thisShouldWorkOnlyWithinThisBlock
// only within the conditional statement above. Any
// use of thisShouldWorkOnlyWithinThisBlock outside of that
// is a mistake, even though it technically works.
// *These are the worst types of bugs, because they are silent*.
console.log(thisShouldWorkOnlyWithinThisBlock);

// let fixes this
if (g > 3) {
  let thisShouldAlsoWorkOnlyWithinThisBlock = 7;
}

try {
  console.log(thisShouldAlsoWorkOnlyWithinThisBlock);
} catch (err) {
  console.log('Error when trying to print variable:', err);
}
