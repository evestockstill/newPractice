// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// most direct solution
// const palindrome = (str) => {
//   const reversed = str.split('').reverse().join('');
//   return str === reversed;
// };

// another array helper   .every()  this does twice as much work, but it is worth to do, to be able to explain. Must always return
const palindrome = (str) => {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
};

// const palindrome = (str) => {
//   str.split('').reduce((order, character) => character + order, '');
//   if () {
//     return true;
//   } else {
//     false;
//   }
// };

module.exports = palindrome;
