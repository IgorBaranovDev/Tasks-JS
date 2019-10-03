module.exports = function getZerosCount(number) {
  let counterZeros = 0;
  while (number > 0) {
    number = Math.floor(number / 5);
    counterZeros = counterZeros + number;
  }
  return counterZeros;
}