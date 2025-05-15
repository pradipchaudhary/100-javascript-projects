let timer;
let minutes = 25;
let seconds = 0;

function startTimer() {
    timer = setInterval(updateTimer, 1000);
}

function pauseTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    minutes = 25;
    seconds = 0;
    updateDisplay();
}

function updateTimer() {
    if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        alert("Pomodoro completed! Take a break.");
    } else if (seconds === 0) {
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }

    updateDisplay();
}

function updateDisplay() {
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    document.getElementById(
        "timer"
    ).textContent = `${formattedMinutes}:${formattedSeconds}`;
}
