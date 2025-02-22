const gameContainer = document.querySelector(".game-container");
n = 16*16;

function createBoxes (n) {
    for (let i = 0; i < n; i++) {
        gameContainer.appendChild(document.createElement("div"));
    }
}