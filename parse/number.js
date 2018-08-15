module.exports = function (num = 0, fixedLength = 0) {
  if (num && !isNaN(+num)) {
    return fixedLength ? +((+num).toFixed(fixedLength)) : +num; //toFixed return String
  } else {
    return +((0).toFixed(fixedLength));
  }
}