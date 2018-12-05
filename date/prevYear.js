module.exports = function (yearCount = 0, date = new Date) {
  let year = date.getFullYear() - yearCount;
  return date.setFullYear(year);
}