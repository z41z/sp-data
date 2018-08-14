module.exports = function (arrObj = [{}], indexName = '', valueName = '', length = arrObj.length, defaultValue = 0) {
  let arr = Array(length).fill(defaultValue);
  arrObj.forEach(item => {
    if (item[indexName] !== 'undefined' && item[valueName] !== 'undefined' && item[indexName] < length) {
      arr[item[indexName]] = item[valueName];
    }
  })
  return arr;
}