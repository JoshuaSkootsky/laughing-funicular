const { randomNumber, costDisplay } = require('./'); // require the `index.js` file from the same directory.

console.log(randomNumber(NaN, NaN));
console.log(randomNumber(2, 0));
console.log(randomNumber(10, 2));
console.log(randomNumber(NaN, 2));
console.log(randomNumber(10, NaN));

console.log(costDisplay(200011166));
