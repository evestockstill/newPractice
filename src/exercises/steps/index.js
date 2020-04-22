// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// form 0 to n (iterate through rows)
// / create an empty string, 'stair
// / from 0 to n (iterate through columns)
// / if the current column is equal to or less than the current row
// / add a '#' to 'stair'
// / else
// / add a pace to 'stair'
// / console log 'stair'

// const steps = (n) => {
//   for(let row = 0; row < n; row++) {
//     let stair = '';
//     for(let column = 0; column < n; column++) {
//       if(column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     // console.log(stair);
//   }
// };

// with recursion

// DO NOT FORGET A BASE CASE!!!!!!
// if(row === n) then we have hit the end of our problem
// / if the 'star string has a length === n then we are at the end of a row
// / if the length of the stair string is less than or equal to the row number we're working on we add a '# otherwise add a space

const steps = (n, row = 0, stair = '') => {
  if(n === row) {
    return;
  }
  if(n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }
  if(stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  steps(n, row, stair);
};

//  MINE DID NOT WORK
// const steps = (n) => {
//   let stair = '';
//   let rows;
//   rows.forEach((row) => {
//     row++;
//     let columns;
//     columns.forEach((column) => {
//       column++;
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     });
//   });
//   console.log(stair);
// };
module.exports = steps;
