module.exports = function (obj, keyName) {
  if (!keyName) { // reverse All keys and values
    if (obj instanceof Array) { // obj = [{a: 1}, {a: 2}]
      if (obj.length) {
        let results = [];
        obj.forEach(item => {
          let arrkeys = Object.keys(item);
          let arrvalues = Object.values(item);
          let result = {};
          if (arrkeys.length) { //obj !== [{}]
            arrkeys.forEach((i, index) => {
              result[arrvalues[index]] = i;
            })
            results.push(result);
          };
        });
        return results;
      }
    } else if ((obj instanceof Object)) { //obj !== {}
      let keys = Object.keys(obj);
      let values = Object.values(obj);
      let result = {};
      if (keys.length) {
        keys.forEach((item, index) => {
          result[values[index]] = item;
        })
        return result;
      } else { //obj = {}
        return {};
      }
    } else {
      return {};
    }
  } else { //reverse one of keys and values
    if (obj instanceof Array) {
      if (obj.length) {
        obj.forEach(item => {
          if (item[keyName]) { //item.keyName is not undefined
            item[item[keyName]] = keyName;
            delete item[keyName];
          }
        })
        return obj;
      }
    } else if (obj instanceof Object) {
      if (obj[keyName]) { //item.keyName is not undefined
        obj[obj[keyName]] = keyName;
        delete obj[keyName];
      }
      return obj;
    } else {
      return {};
    }
  }
}