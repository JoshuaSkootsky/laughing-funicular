'use strict';

function acronym(sentence, callback) {
  return new Promise((resolve, reject) => {
    const stuff = 0;

    if (sentence.length === 0) {
      reject('String, Please! e.g. "for your information"');
      return callback('String, Please! e.g. "for your information"');
    } else if (typeof sentence === 'function') {
      callback = sentence;

      reject('¯\\_(ツ)_/¯');
      return callback('¯\\_(ツ)_/¯');
    } else {
      const words = sentence.split(' ');
      const acronym = words.map((word) => word[0]);

      resolve(acronym.join(''));
      return callback(null, acronym.join(''));
    }
  });
}

const validateNum = (num) => {
  return typeof num === 'number' && !(num !== num);
};

function randomNumber(max = 1, min = 0) {
  if (!validateNum(max)) {
    max = 1;
    min = 0;
  }
  if (!validateNum(min)) {
    min = 0;
  }
  return Math.random() * (max - min) + min;
}

module.exports = {
  acronym,
  randomNumber,
};
