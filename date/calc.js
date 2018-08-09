module.exports = function (startDate = new Date(), endDate = new Date()) {
  let calc = Math.abs(Math.floor(endDate - startDate) / 1000);
  let seconds = Math.floor(calc % 60);
  let minutes = Math.floor(calc / 60) % 60;
  let hours = Math.floor(calc / 3600) % 24;
  let days = Math.floor(calc / (3600 * 24));
  return {
    seconds,
    minutes,
    hours,
    days
  }
}