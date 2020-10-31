const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let max = 1;

    arr.map((el) => {
      let depth = 1;
      depth += Array.isArray(el) ? this.calculateDepth(el) : 0;
      max = Math.max(max, depth);
    });

    return max;
  }
};