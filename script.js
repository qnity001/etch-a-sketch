let n = getUserChoice();
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

const resize = document.querySelector(".resize");
resize.addEventListener("click", () => {
    location.reload();
});


function getUserChoice() {
    let n = Number(prompt("Please enter size of canvas"));
    if (n > 100) {
        alert("Please enter size less than 100");
        return 16;
    }
    else if (n < 1) {
        alert("Please enter a positive number");
        return 16;
    }
    else if (n == NaN) {
        alert("Please enter a valid number");
        return 16;
    }
    else {
        return n;
    }
}