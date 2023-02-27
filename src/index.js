
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  if (Array.isArray(matrix) && matrix.length) { 
      return matrix.map((item, i) => (i % 2 !== 0) ? item.reverse() : item).flat();
   } else {
      return [];
   }
}
