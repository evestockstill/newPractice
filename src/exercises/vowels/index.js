// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// const vowels = (str) =>
//   [...str.toLowerCase()].filter((char) => 'aeiou'.includes(char)).length;

// const vowels = (str) => str.replace(/[^aeiou]/gi, '').length;


// iterative
const vowels = (str) => {
  let counter = 0;
  const vowelCheck = 'aeiou';
  for(let char of str.toLowerCase()) {
    if(vowelCheck.includes(char)) {
      counter++;
    }
  }
  return counter;
};

module.exports = vowels;
