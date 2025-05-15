document.addEventListener("DOMContentLoaded", () => {
    const player = document.getElementById("player");
    const platforms = document.querySelectorAll(".platform");
    const gameContainer = document.getElementById("game-container");

    let isJumping = false;
    let gravity = 0.9;
    let jumpCount = 0;

    function jump() {
        if (!isJumping && jumpCount < 2) {
            isJumping = true;
            jumpCount++;
            let jumpHeight = 0;
            const jumpInterval = setInterval(() => {
                if (jumpHeight >= 150) {
                    clearInterval(jumpInterval);
                    isJumping = false;
                    jumpCount = 0;
                } else {
                    jumpHeight += 5;
                    player.style.bottom = jumpHeight + "px";
                }
            }, 20);
        }
    }

    function applyGravity() {
        let fallHeight = 0;
        const fallInterval = setInterval(() => {
            if (fallHeight <= 0) {
                clearInterval(fallInterval);
                player.style.bottom = "0";
            } else {
                fallHeight -= gravity;
                player.style.bottom = fallHeight + "px";
            }

            checkCollision();
        }, 20);
    }

    function checkCollision() {
        const playerRect = player.getBoundingClientRect();

        platforms.forEach((platform) => {
            const platformRect = platform.getBoundingClientRect();

            if (
                playerRect.bottom >= platformRect.top &&
                playerRect.top <= platformRect.bottom &&
                playerRect.right >= platformRect.left &&
                playerRect.left <= platformRect.right
            ) {
                isJumping = false;
                jumpCount = 0;
                player.style.bottom = platformRect.top + "px";
            }
        });

        if (playerRect.bottom <= 0) {
            isJumping = false;
            jumpCount = 0;
            player.style.bottom = "0";
        }
    }

    document.addEventListener("keydown", (event) => {
        if (event.code === "Space") {
            jump();
        }
    });

    document.addEventListener("keyup", (event) => {
        if (event.code === "Space") {
            applyGravity();
        }
    });

    setInterval(() => {
        checkCollision();
    }, 20);
});
