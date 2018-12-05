module.exports = function (arr = [], isASC = true) {
  arr.sort((a, b) => {
    return isASC ? a - b : b - a;
  })
  return arr;
}