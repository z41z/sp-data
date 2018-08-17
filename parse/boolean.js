module.exports = function (val) {
  if (val instanceof Object) {
    if (val instanceof Array) {
      return val.length ? true : false; //val = []
    } else {
      return Object.keys(val).length ? true : false; //val = {}
    }
  } else if (typeof val === 'string') { //val = ' '
    return Boolean(val.trim());
  } else {
    return Boolean(val);
  }
}