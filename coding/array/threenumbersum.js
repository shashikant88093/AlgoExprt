// sample input array = [12,3,1,2,-6,5,-8,6]  targetsum = 0
// sample output [[-8,2,6],[-8,3,5],[-6,1,5]]

function threeNumberSum(array, targetsum) {
  // console.log(array, "array sort")
  let i, j, k, threesum, arr;

  threesum = 0;
  arr = [];
  for (i = 0; i < array.length; i++) {
    // console.log(array[i], "i")
    for (j = i + 1; j < array.length; j++) {
      // console.log(array[j],"j")

      for (k = j + 1; k < array.length; k++) {
        // console.log(k,"k")
        threesum = array[i] + array[j] + array[k];

        if (threesum === targetsum) {
          arr.push([array[i], array[j], array[k]]);
        }
      }
    }
  }
  // console.log(arr,"arr")
  return arr;
}
let array = [12, 3, 1, 2, -6, 5, -8, 6];

let targetsum = 0;
console.log(threeNumberSum(array, targetsum));
