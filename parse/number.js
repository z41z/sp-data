module.exports = function (num = 0, fixedLength = 0) {
  if (num && !isNaN(+num)) {
    return Boolean(fixedLength) ? (+num).toFixed(fixedLength) : +num; //toFixed return String
  } else {
    return Boolean(fixedLength) ? (0).toFixed(fixedLength) : 0;
  }
}