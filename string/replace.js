const setRegx = (obj) => {
  let str = ''
  let arr = Object.keys(obj)
  arr.forEach((item, index) => {
    str += (index < arr.length - 1 ? `(${item})|` : `(${item})`)
  })
  return new RegExp(str, 'ig')
}
module.exports = (str = '', replaceObj = {}) => {
  let result = str.replace(setRegx(replaceObj), (arg) => {
    return replaceObj[arg]
  })
  return result;
}