module.exports = function (val) {
  if (val instanceof Object) {
    if (val instanceof Array) {
      return val.length ? true : false; //空数组
    } else {
      return Object.keys(val).length ? true : false; //空对象
    }
  } else if (typeof val === 'string') { //转换' '为false
    return Boolean(val.trim());
  } else {
    return Boolean(val);
  }
}