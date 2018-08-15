const boolean = require('../parse/boolean');
const parseNum = require('../parse/number');
module.exports = function (arr = [], isDeep = false) {
  let result;
  if (!isDeep) {
    if (!boolean(arr)) {
      result = 0;
    } else if (arr instanceof Array) { // arr like [1,2,3,4]  //Array.isArray(arr)
      return arr.reduce((a, b) => {
        return parseNum(a) + parseNum(b);
      })
    } else {
      result = arr;
    }
  } else {
    if (arr instanceof Array) { //Array.isArray(arr)
      result = (arr[0] instanceof Array) ? [] : [{}]; //Array.isArray(arr)
      arr.forEach((item) => {
        if (item instanceof Array) { //arr like [[1,2,3],[4,5,6],[7,8]] //Array.isArray(arr)
          item.forEach((i, index) => {
            result[index] = parseNum(result[index]) + parseNum(i);
          })
        } else { //arr like [{a:1,b:2,c:3},{a:4,b:5,c:6},{a:7,b:8}]
          let resultKeys = Object.keys(item);
          resultKeys.forEach(k => {
            result[0][k] = parseNum(result[0][k]) + parseNum(item[k]);
          })
        }
      })
    }
  }
  return result;
}