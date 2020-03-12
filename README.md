[![Generic badge](https://img.shields.io/badge/npm-v1.0.0-blue.svg)](https://shields.io/) [![EO principles respected here](http://www.elegantobjects.org/badge.svg)](http://www.elegantobjects.org) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# some utils. May be useful!

## Laughing Funicular

To use:

```
const { acronym, randomNumber, costDisplay } = require('laughing-funicular');

console.log(randomNumber(NaN, NaN)); // outputs a random number between 1 and 0 if not given real min or max

console.log(costDisplay(200011166)); // outputs $ USD 2,000,111.66


acronym('for your information', (err, resp) => {
  if (err) {
    console.log(err);
  }
  console.log(resp);
});
// outputs 'fyi'
```

## Joshua Skootsky, 2020
