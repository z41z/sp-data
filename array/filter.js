module.exports = function (arr = [], func = function (item) {}) {
  return arr.filter(item => {
    return func(item);
  })
}