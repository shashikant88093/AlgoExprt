// competitions = [
//     ["HTML","C#"],
//     ["C#","python"],
//     ["Python","HTML"]
// ]

// results = [0,0,1]

// two teams 
//    0 = away team won
//    1 = home team won

// win team get 3 as rewards


function tournamentWinner(competitions, results) {
    let obj = {};
    
    for (let i = 0; i < competitions.length; i++) {
        let [a, b] = competitions[i];
        let winner = results[i] === 0 ? b : a;

        // Initialize the winner's score if not already present
        if (!obj[winner]) {
            obj[winner] = 0;
        }

        // Increment the winner's score by 3
        obj[winner] += 3;
    }
    // Find the team with the maximum score
    let maxScore = 0;
    let winner = "";

    for (let team in obj) {
        if (obj[team] > maxScore) {
            maxScore = obj[team];
            winner = team;
        }
    }

    return winner;
}

let competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
];

let results = [0, 0, 1];

console.log(tournamentWinner(competitions, results)); // Expected output: "Python"
