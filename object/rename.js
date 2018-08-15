const boolean = require('../parse/boolean')
module.exports = function (obj = {}, target, replacer) {
  if (!boolean(obj)) { //if obj = null, undefined, '', false, {}, [] return {}
    return {};
  } else if (obj instanceof Array) { //if obj is Array of Objects [{}] //Array.isArray(arr)
    obj.forEach(item => {
      if (item[target]) {
        if (replacer) {
          item[replacer] = item[target];
        }
        delete item[target];
      }
    })
    return obj;
  } else if (obj instanceof Object) { //obj is Object {a: 1}
    if (replacer) {
      obj[replacer] = obj[target];
    }
    delete obj[target];
    return obj;
  } else {
    return {};
  }
}