// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// this is a longer more indirect way with repeating with if
// const reverseInt = (n) => {
//   const reversed = n.toString().split('').reverse().join('');
//   if(n < 0) {
//     return parseInt(reversed) * -1;
//   }
//   return parseInt(reversed);
// };

// with the built in math property(math.sign will keep the right positive or neg)
const reverseInt = (num) => {
  const reversed = num.toString().split('').reverse().join('');
  return parseInt(reversed) * Math.sign(num);
};

module.exports = reverseInt;
