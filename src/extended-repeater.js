const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const { repeatTimes, separator = '+', addition = '', additionRepeatTimes, additionSeparator = '|' } = options;
  const additionStr = [...new Array(additionRepeatTimes)].map(() => `${addition}`).join(additionSeparator);
  const result = [...new Array(repeatTimes)].map(() => `${str}${additionStr}`).join(separator);

  return result;
};
  