document.addEventListener("DOMContentLoaded", () => {
    const gameContainer = document.querySelector(".game-container");
    const snakeElement = document.getElementById("snake");
    const foodElement = document.getElementById("food");

    let snake = [{ x: 10, y: 10 }];
    let food = { x: 5, y: 5 };
    let direction = "right";

    function update() {
        moveSnake();
        checkCollision();
        checkFoodCollision();
        render();
    }

    function moveSnake() {
        const head = { ...snake[0] };

        switch (direction) {
            case "up":
                head.y -= 1;
                break;
            case "down":
                head.y += 1;
                break;
            case "left":
                head.x -= 1;
                break;
            case "right":
                head.x += 1;
                break;
        }

        snake.unshift(head);
        snake.pop();
    }

    function checkCollision() {
        const head = snake[0];

        if (head.x < 0 || head.x >= 15 || head.y < 0 || head.y >= 15) {
            resetGame();
        }

        for (let i = 1; i < snake.length; i++) {
            if (head.x === snake[i].x && head.y === snake[i].y) {
                resetGame();
            }
        }
    }

    function checkFoodCollision() {
        const head = snake[0];

        if (head.x === food.x && head.y === food.y) {
            snake.push({});
            generateFood();
        }
    }

    function generateFood() {
        food = {
            x: Math.floor(Math.random() * 15),
            y: Math.floor(Math.random() * 15),
        };
    }

    function render() {
        snakeElement.style.left = snake[0].x * 20 + "px";
        snakeElement.style.top = snake[0].y * 20 + "px";

        foodElement.style.left = food.x * 20 + "px";
        foodElement.style.top = food.y * 20 + "px";
    }

    function resetGame() {
        alert("Game Over! Press OK to restart.");
        snake = [{ x: 10, y: 10 }];
        direction = "right";
        generateFood();
    }

    document.addEventListener("keydown", (e) => {
        switch (e.key) {
            case "ArrowUp":
                direction = "up";
                break;
            case "ArrowDown":
                direction = "down";
                break;
            case "ArrowLeft":
                direction = "left";
                break;
            case "ArrowRight":
                direction = "right";
                break;
        }
    });

    setInterval(update, 150);
});
