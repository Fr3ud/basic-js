const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  const dreamName = [];

  members.forEach((elem) => {
    if (typeof elem === 'string') {
      dreamName.push(elem.trim()[0].toUpperCase());
    }
  });

  return dreamName.sort().join('');
};
