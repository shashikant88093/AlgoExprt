// sample input coins = [5,7,1,1,2,3,22]

// sample output  20 


function nonConstructibleChange(coins) {

    coins.sort((a, b) => a - b)

    let currentChange = 0

    for (let coin of coins) {
        if (coin > currentChange + 1) {
            return currentChange + 1
        }
        currentChange += coin

    }
    return currentChange + 1
}

let coins = [5, 7, 1, 1, 2, 3, 22]

console.log(nonConstructibleChange(coins))