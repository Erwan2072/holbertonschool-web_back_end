/**
 * Function that rounds two numbers and returns their sum
 * @param {Number} a - First number to round
 * @param {Number} b - Second number to round
 * @returns {Number} Sum of rounded a and b
 */
function calculateNumber(type, a, b) {
  const roundA = Math.round(a);
  const roundB = Math.round(b);

  if (type === 'SUM') {
    return roundA + roundB;
  }
  if (type === 'SUBTRACT') {
    return roundA - roundB;
  }
  if (type === 'DIVIDE') {
    if (roundB === 0) {
      return 'Error';
    }
    return roundA / roundB;
  }
  return 'Error';
}

module.exports = calculateNumber;
