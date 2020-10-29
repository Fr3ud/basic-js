const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || !parseInt(sampleActivity) ||
      parseFloat(sampleActivity) > 15 || parseInt(sampleActivity) < 1) {
    return false;
  }

  return Math.ceil(MODERN_ACTIVITY / parseInt(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD);
};
