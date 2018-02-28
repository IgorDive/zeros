module.exports = function getZerosCount(number) {
  let counterZero = 0;
  let i = 1;

  while ( number / Math.pow(5, i) >= 1 ) {
  counterZero += Math.floor( number / Math.pow(5, i) );
  i += 1;
  }

  return counterZero;
}
