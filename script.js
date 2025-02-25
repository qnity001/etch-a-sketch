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
    let color = "";
    const white = document.querySelector(".white");
    white.addEventListener("click", () => {
        color = "white";
    });
    const black = document.querySelector(".black");
    black.addEventListener("click", () => {
        color = "black";
    });
    const brown = document.querySelector(".brown");
    brown.addEventListener("click", () => {
        color = "brown";
    });
    const purple = document.querySelector(".purple");
    purple.addEventListener("click", () => {
        color = "#4C00B0";
    });
    const darkBlue = document.querySelector(".dark-blue");
    darkBlue.addEventListener("click", () => {
        color = "#00008B";
    });
    const lightBlue = document.querySelector(".light-blue");
    lightBlue.addEventListener("click", () => {
        color = "lightblue";
    });
    const green = document.querySelector(".dark-green");
    green.addEventListener("click", () => {
        color = "green";
    });
    const lightGreen = document.querySelector(".light-green");
    lightGreen.addEventListener("click", () => {
        color = "lightgreen";
    });
    const orange = document.querySelector(".orange");
    orange.addEventListener("click", () => {
        color = "orange";
    });
    const yellow = document.querySelector(".yellow");
    yellow.addEventListener("click", () => {
        color = "yellow";
    });
    const red = document.querySelector(".red");
    red.addEventListener("click", () => {
        color = "#D1001F";
    });
    const pink = document.querySelector(".pink");
    pink.addEventListener("click", () => {
        color = "pink";
    });

    pixel.addEventListener('mouseover', () => {
        pixel.style.backgroundColor = color;
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