// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// other common string questions; 1. what is the most common character in the string? 2. does string A have the same characters as string B(anagram)? 3. does the given string have any repeated characters in it?
//
// const maxChar = (str) => {
//   const charMap = {};
//   let max = 0;
//   let maxChar = '';
//   for(let char of str) {
//     if(charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   }
//   for(let char in charMap) {
//     if(charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }
//   return maxChar;
// };




function maxChar(myStr) {
  let charObj = {};
  return [...myStr].reduce((_, char) => {
    if(char in charObj) charObj[char]++;
    else if(char !== ' ') charObj[char] = 1;
    return Object.keys(charObj).reduce((a, b) => {
      return charObj[a] > charObj[b] ? a : b;
    });
  });
}





// function maxChar(str) {
//   //Create the output and the hashmap
//   let m = {},
//     ans;

//   //Loop through the str for each character
//   //Use reduce array helper because of the accumulator

//   str.split('').reduce((a, c) => {
//     //Increments Map at location c(character) unless it does not already exist

//     m[c] = m[c] + 1 || 1;

//     //This checks to see if the current passthrough of m[c] is greater than or equal to the accumulator, if it is, set the answer equal to the current character. If it's not keep the ans the same.

//     ans = m[c] >= a ? c : ans;

//     //Only increment the accumulator if Map at location c(character) is greater than the accumulator. Make sure to return it otherwise it won't increment.

//     return (a = m[c] > a ? a + 1 : a);
//   }, 1);

  //Lastly return the answer
//   return ans;
// }
module.exports = maxChar;
