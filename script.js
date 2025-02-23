//  Create a matrix of 16 x 16
n = 16

// Go into the game-container div
const gameContainer = document.querySelector(".game-container");

for (let i = 0; i < n; i++){
    for (let j = 0; j < n; j++){
        // Create div
        const div = document.createElement("div");
        div.classList.add("pixel")
       // div.setAttribute("style", "border: 1px solid grey; box-sizing: border-box; background-color: white");
        div.style.width = "40px";
        div.style.height = "40px";
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
