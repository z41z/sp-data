module.exports = function (monthCount = 0, date = new Date()) {
  let month = date.getMonth();
  return new Date(date.setMonth(month + monthCount));
}