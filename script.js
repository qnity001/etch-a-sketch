// Somehow create 256 divs
// For loop?
//  Create a matrix of 16 x 16
n = 16
// Go into the game-container div
const gameContainer = document.querySelector(".game-container");

for (let i = 0; i < n; i++){
    for (let j = 0; j < n; j++){
        // Create div
        const div = document.createElement("div");
        div.setAttribute("style", "width: 60px; height: 60px; border: 1px solid grey; box-sizing: border-box");
        gameContainer.appendChild(div);
    }
}