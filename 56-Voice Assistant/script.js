let recognition;

function startListening() {
    recognition = new webkitSpeechRecognition() || new SpeechRecognition();

    recognition.onstart = function () {
        document.getElementById("output").innerText = "Listening...";
    };

    recognition.onresult = function (event) {
        const transcript = event.results[0][0].transcript;
        document.getElementById("output").innerText = "You said: " + transcript;
        processCommand(transcript);
    };

    recognition.onerror = function (event) {
        document.getElementById("output").innerText =
            "Error occurred: " + event.error;
    };

    recognition.onend = function () {
        document.getElementById("output").innerText =
            "Speech recognition ended.";
    };

    recognition.start();
}

function stopListening() {
    recognition.stop();
}

function processCommand(command) {
    // You can implement logic here to interpret and respond to different commands.
    // For a more advanced voice assistant, you might integrate with a natural language processing API.
}
