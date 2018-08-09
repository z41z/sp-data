const _ = require('lodash');
module.exports = function (arr = [{}], keyName = '', isDeep = false) {
  return isDeep ? _.uniqWith(arr,  _.isEqual) : _.uniqBy(arr, keyName);
}