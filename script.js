//  Create a matrix of 16 x 16
n = 30
const size = 640 / n;

// Go into the game-container div
const gameContainer = document.querySelector(".game-container");

for (let i = 0; i < n; i++){
    for (let j = 0; j < n; j++){
        // Create div
        const div = document.createElement("div");
        div.classList.add("pixel")

        div.style.width = size+"px";
        div.style.height = size+"px";
        div.style.border = "1px solid grey";
        div.style.boxSizing = "border-box";
        div.style.backgroundColor = "white";

        gameContainer.appendChild(div);
    }
}

const pixels = document.querySelectorAll(".pixel");
pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', () => {
        pixel.style.backgroundColor = "pink";
    });
});
