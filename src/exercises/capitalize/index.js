// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// make an empty array 'words
// / split the input string by spaces to get an array
// / for each word in the array
// / uppercase the first letter of the word
// / join first letter with rest of the string
// / push result into 'words array
// / join 'words' into a string and return it

// with forEach
// const capitalize = (str) => {
//   let wordsArray = str.toLowerCase().split(' ');
//   let capsArray = [];
//   wordsArray.forEach((word) => {
//     capsArray.push(word[0].toUpperCase() + word.slice(1));
//   });
//   return capsArray.join(' ');
// };


// 3 solution from video 

const capitalize = (str) => {
    
}












// with for of

// const capitalize = (str) => {
//   const words = [];
//   for(let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//   return words.join(' ');
// };

// with map
// const capitalize = (str) => {
//   return str
//     .split(' ')
//     .map((w) => w[0].toUpperCase() + w.substr(1).toLowerCase())
//     .join(' ');
// };

module.exports = capitalize;

//   return str[0].toUpperCase() + str.slice(1);
