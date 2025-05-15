document.addEventListener("DOMContentLoaded", function () {
    const pianoKeys = document.querySelectorAll(".white-key, .black-key");
    const audioFiles = {
        C: new Audio("path_to_audio_files/C.mp3"),
        "C#": new Audio("path_to_audio_files/C#.mp3"),
        D: new Audio("path_to_audio_files/D.mp3"),
        "D#": new Audio("path_to_audio_files/D#.mp3"),
        E: new Audio("path_to_audio_files/E.mp3"),
        F: new Audio("path_to_audio_files/F.mp3"),
        "F#": new Audio("path_to_audio_files/F#.mp3"),
        G: new Audio("path_to_audio_files/G.mp3"),
        "G#": new Audio("path_to_audio_files/G#.mp3"),
        A: new Audio("path_to_audio_files/A.mp3"),
        "A#": new Audio("path_to_audio_files/A#.mp3"),
        B: new Audio("path_to_audio_files/B.mp3"),
    };

    pianoKeys.forEach((key) => {
        key.addEventListener("mousedown", () => playSound(key));
        key.addEventListener("mouseup", () => stopSound(key));
        key.addEventListener("mouseleave", () => stopSound(key));
    });

    function playSound(key) {
        const note = key.getAttribute("data-note");
        key.classList.add("active");
        if (audioFiles[note]) {
            audioFiles[note].currentTime = 0;
            audioFiles[note].play();
        }
    }

    function stopSound(key) {
        key.classList.remove("active");
    }
});
