// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// const reverse = (str) => {
//   const arr = str.split('');
//   arr.reverse();
//   return arr.join('');
// };

// tun string into an array
// call reverse method on the array
// join the array back into a string
// return the result

// cleaner solution with reverse method
// const reverse = (str) => {
//   return str.split('').reverse().join('');
// };

// alternative manual work with for loop
// function reverse(str) {
//   let reversed = '';
//   for(let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

// for of syntax
// const reverse = (str) => {
//   let reversed = '';
//   for(let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// };

// with a reduce method
const reverse = (str) => {
  return str
    .split('')
    .reduce((reversed, character) => character + reversed, '');
};


// recursion
// function reverse(str) {
//   if(str === '') {
//     return str;
//   } else {
//     return reverse(str.substr(1)) + str[0];
//   }
// }

// recursion ternary operator
// const reverse = (str) => {
//   return str ? reverse(str.substr(1)) + str[0] : str;
// };
// creat an empty string called 'reversed'
// for each character in the provided String
// take the character and add it to the start of 'reversed
// return the variable reversed'

module.exports = reverse;
