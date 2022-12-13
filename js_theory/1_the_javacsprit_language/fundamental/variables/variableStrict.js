// num = 5
// console.log(num)

/**
 * As we are not using the strict mode, the js will creates a variable called "num" even if it doesnt exists.
 * Above, we'll use this strict mode in order to prevent this type of breach in js
 */

"use strict"

/**
 * As using the strict mode, we get an error as: 
 * ReferenceError: message is not defined
 */

// message = 'teste'
// console.log(message)

/**
 * So, in order to fix that, we really need to declare a variable with let, var or const reserved words. For instance:
 */

let message = 'Hello, World';
console.log(message)