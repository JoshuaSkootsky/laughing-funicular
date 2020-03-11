const { acronym, randomNumber } = require('./'); // require the `index.js` file from the same directory.

acronym('for your information', (err, resp) => {
  if (err) {
    console.log(err);
  }
  console.log(resp);
});

console.log(randomNumber(NaN, NaN));
console.log(randomNumber(2, 0));
console.log(randomNumber(10, 2));
console.log(randomNumber(NaN, 2));
console.log(randomNumber(10, NaN));
