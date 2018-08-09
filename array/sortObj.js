module.exports = function (arr = [{}], keyName = '', isASC = true) {
  arr.sort((a, b) => {
    return isASC ? a[keyName] - b[keyName] : b[keyName] - a[keyName];
  })
  return arr;
}