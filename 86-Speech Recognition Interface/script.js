document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("startBtn");
    const output = document.getElementById("output");

    // Check if the browser supports the Web Speech API
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
        const recognition = new (window.SpeechRecognition ||
            window.webkitSpeechRecognition)();

        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onstart = () => {
            startBtn.innerText = "Listening...";
        };

        recognition.onresult = (event) => {
            const transcript = Array.from(event.results)
                .map((result) => result[0].transcript)
                .join("");

            output.innerText = transcript;
        };

        recognition.onend = () => {
            startBtn.innerText = "Start Listening";
        };

        recognition.onerror = (event) => {
            console.error("Speech recognition error:", event.error);
        };

        startBtn.addEventListener("click", () => {
            if (recognition.running) {
                recognition.stop();
            } else {
                recognition.start();
            }
        });
    } else {
        output.innerText =
            "Speech recognition is not supported in this browser.";
        startBtn.disabled = true;
    }
});
