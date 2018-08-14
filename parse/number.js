module.exports = function (num = 0, fixedLength = 0) {
  if (num && !isNaN(+num)) {
    return +((+num).toFixed(fixedLength)); //toFixed return String
  } else {
    return +((0).toFixed(fixedLength));
  }
}