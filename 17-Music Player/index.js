const audio = document.getElementById("audio");

function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function stop() {
    audio.pause();
    audio.currentTime = 0;
}
