score = 0;
cross = true;
let scorecont = document.querySelector(".scorecont");
document.onkeydown = function (e) {
    console.log("key code is:", e.keyCode);
    if (e.keyCode == 38) {
        dino = document.querySelector(".dino");
        dino.classList.add("animatedino")
        setTimeout(() => {
            dino.classList.remove('animatedino');
        }, 700);
    }

    if (e.keyCode == 39) {
        dino = document.querySelector(".dino");
        dx = parseInt(window.getComputedStyle(dino).getPropertyValue("left"));
        dino.style.left = (dx + 112) + "px"

    }

    if (e.keyCode == 37) {
        dino = document.querySelector(".dino");
        dx = parseInt(window.getComputedStyle(dino).getPropertyValue("left"));
        dino.style.left = (dx - 112) + "px"

    }
}
setInterval(() => {
    // Fetching elements
    const dino = document.querySelector(".dino");
    const gameover = document.querySelector(".gameover");
    const obstacle = document.querySelector(".obstacle");

    // Getting positions
    const dx = parseInt(window.getComputedStyle(dino).getPropertyValue("left"));
    const dy = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    const ox = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    const oy = parseInt(window.getComputedStyle(obstacle).getPropertyValue("top"));

    // Calculating offsets
    const offsetx = Math.abs(dx - ox);
    const offsety = Math.abs(dy - oy);

    // console.log(offsetx, offsety);

    // Collision detection
    if (offsetx < 73 && offsety < 52) {
        gameover.innerHTML = "Game Over - Play Again";
        gameover.style.color = "red";
        // Remove obstacle animation class (adjust class name if needed)
        obstacle.classList.remove("obstacleani");
    }
    else if (offsetx < 145 && cross) {
        score += 5;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            anidur = parseFloat(window.getComputedStyle(obstacle
            ).getPropertyValue("animation-duration"));
            newdur = anidur - 0.1;
            obstacle.style.animationDuration = newdur + "s";
            console.log("new animation duration:", newdur)
        }, 500);
    }
}, 100);

function updateScore(score) {
    scorecont.innerHTML = "Your Scroe is : " + score;
}