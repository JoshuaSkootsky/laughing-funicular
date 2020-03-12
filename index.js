'use strict';

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

const costDisplay = (costInt, display = '$ USD ') => {
  const formattedCost = costInt
    ? Number((costInt / 100).toFixed(2)).toLocaleString()
    : 0;
  return display + formattedCost;
};

module.exports = {
  acronym,
  randomNumber,
  costDisplay,
};
