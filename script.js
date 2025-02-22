// Somehow create 256 divs
// For loop?
//  Create a matrix of 16 x 16

// Go into the game-container div
const gameContainer = document.querySelector("game-container")

for (let i = 0; i < n; i++){
    for (let j = 0; j < n; j++){
        // Create div
        const div = document.createElement("div")
        gameContainer.appendChild(div)
    }
}