const power = 12;
const max = Math.pow(10, 6);

export const transform = value =>
  Math.round((Math.exp(power * value / max) - 1) / (Math.exp(power) - 1) * max);

export const reverse = value =>
  1 / power * Math.log((Math.exp(power) - 1) * value / max + 1) * max;
