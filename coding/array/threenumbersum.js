// sample input array = [12,3,1,2,-6,5,-8,6]  targetsum = 0
// sample output [[-8,2,6],[-8,3,5],[-6,1,5]]


// function threeNumberSum(array, targetsum) {
//     const arr = [];
//     // Sort the array to use the two-pointer technique
//     array.sort((a, b) => a - b);

//     for (let i = 0; i < array.length - 2; i++) {
//         let j = i + 1;
//         let k = array.length - 1;

//         while (j < k) {
//             const threesum = array[i] + array[j] + array[k];

//             if (threesum === targetsum) {
//                 arr.push([array[i], array[j], array[k]]);
//                 j++;
//                 k--;

//                 // Avoid duplicates: skip the same values for j and k
//                 while (j < k && array[j] === array[j - 1]) j++;
//                 while (j < k && array[k] === array[k + 1]) k--;
//             } else if (threesum < targetsum) {
//                 j++; // Increase the sum by moving the left pointer
//             } else {
//                 k--; // Decrease the sum by moving the right pointer
//             }
//         }

//         // Avoid duplicates for i
//         while (i < array.length - 2 && array[i] === array[i + 1]) i++;
//     }
    
//     return arr;
// }


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


