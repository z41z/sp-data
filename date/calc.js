module.exports = function (startDate = new Date(), endDate = new Date()) {
  let calc = Math.abs(Math.floor(endDate - startDate) / 1000); //calc = new Date(Math.abs(Math.floor(endDate - startDate)))
  let seconds = Math.floor(calc % 60); //calc.getSeconds()
  let minutes = Math.floor(calc / 60) % 60; //calc.getMinutes()
  let hours = Math.floor(calc / 3600) % 24; //calc.getHours()
  let days = Math.floor(calc / (3600 * 24)); //calc.getFullYear() - 1970, calc.getDate()
  return {
    seconds,
    minutes,
    hours,
    days
  }
}