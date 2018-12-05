module.exports = function (arrObj = [{}], indexName = '', valueName = '', length = arrObj.length, defaultValue = 0) {
  // default length is arr's length if Not Set length
  let arr = Array(length).fill(defaultValue);
  arrObj.forEach(item => {
    if (item[indexName] !== 'undefined' && item[valueName] !== 'undefined' && item[indexName] < length) {
      arr[item[indexName]] = item[valueName];
    }
  })
  return arr;
}