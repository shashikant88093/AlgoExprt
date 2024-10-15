
// squared the sorted array [1,2,3,5,6,8,9]


function sortedSquaredArray(arr){
  
    let result = arr.map(x => x*x).sort((a,b)=> a - b)
    return result
}

 let arr =  [1,2,3,5,6,8,9];

console.log(sortedSquaredArray(arr))