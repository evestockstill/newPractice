// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// create empty array to hold chunks called 'chunked'
// / for each element in the unchunked array
// / retrieve the las element in the 'chunked
// / IF last element does not exist, or if its length is equal to chunk size
// / push a new chunk into 'chunked' with the current element
// / else add the current element into the chunk

// solution with a forEach
// const chunk = (array, size) => {
//   let chunked = [];
//   array.forEach((element) => {
//     const last = chunked[chunked.length - 1];
//     if(!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   });
//   return chunked;
// };

//  create empty 'chunked array
// / create 'index start at 0
// / while index is less than array.length
// / push a slice of length 'size from array into 'chunked
// / add size to index

// solution with slice
// const chunk = (array, size) => {
//   let chunked = [];
//   let index = 0;
//   while(index < array.length) {
//     chunked.push(array.slice(index, index + size));
//     index += size;
//   }
//   return chunked;
// };

// solution with a forEach and ternary
const chunk = (array, size) => {
  let chunked = [];
  array.forEach((item, index) => {
    index % size === 0
      ? chunked.push([item])
      : chunked[chunked.length - 1].push(item);
  });
  return chunked;
};

module.exports = chunk;
