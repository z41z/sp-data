// const _ = require('lodash');
const boolean = require('../parse/boolean');
module.exports = function (arr = [{}], keyName = false, ) {
  // return isDeep ? _.uniqWith(arr,  _.isEqual) : _.uniqBy(arr, keyName);
  let result = [];
  let filterData = arr.filter(item => {
    if (!(keyName in item)) {
      result.push(item)
    } else {
      return item
    }
  })

  //a part of repeat remove
  if (boolean(keyName)) {
    let tmp = filterData;
    filterData.forEach((item, index) => {
      filterData.forEach((i, ind) => {
        if (item[keyName] === i[keyName] && index !== ind) {
          tmp.splice(ind, 1)
        }
      })
    })
    result = result.concat(tmp)
  }

  //all repeat remove
  else {
    let tmp = arr;
    arr.forEach((item, index) => {
      let keys = Object.keys(item).sort().join()
      let values = Object.values(item).sort().join()
      arr.forEach((i, ind) => {
        if (Object.keys(i).sort().join() === keys && Object.values(i).sort().join() === values && index !== ind) {
          tmp.splice(index, 1)
        }
      })
    })
    result = tmp
  }
  return result
}