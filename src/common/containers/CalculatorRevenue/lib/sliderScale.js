import { allPass, complement } from 'ramda';
const power = 12;
const max = Math.pow(10, 6);

const isCorrectPositiveNumber = allPass([
  n => typeof n === 'number',
  complement(isNaN),
  n => n > 0,
]);

export const transform = value =>
  Math.round((Math.exp(power * value / max) - 1) / (Math.exp(power) - 1) * max);

export const reverse = value =>
  !isCorrectPositiveNumber(value)
    ? 0
    : 1 / power * Math.log((Math.exp(power) - 1) * value / max + 1) * max;
