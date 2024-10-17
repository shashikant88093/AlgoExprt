// input = [[1,2],]

// output = [[1],[2]]

// input = [
// [1,2],
// [3,4],
// [5,6]
// ]

// output = [
//     [1,3,5],
//     [2,4,6]
// ]

function transposeMatrix(matrix) {
    return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}

let matrix = [[1,2]]
// let matrix = [[1]];

// let matrix =  [
// [1,2],
// [3,4],
// [5,6]
// ]

console.log(transposeMatrix(matrix));
