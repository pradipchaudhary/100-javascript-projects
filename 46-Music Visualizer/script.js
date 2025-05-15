document.addEventListener("DOMContentLoaded", function () {
    const audioInput = document.getElementById("audioInput");
    const visualizerCanvas = document.getElementById("visualizer");
    const ctx = visualizerCanvas.getContext("2d");
    let audioContext, analyser, source, dataArray, bufferLength;

    audioInput.addEventListener("change", handleFile);

    function handleFile() {
        const file = audioInput.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const audioData = e.target.result;
                initAudio(audioData);
            };

            reader.readAsArrayBuffer(file);
        }
    }

    function initAudio(audioData) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;
        bufferLength = analyser.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength);

        source = audioContext.createBufferSource();
        audioContext.decodeAudioData(audioData, function (buffer) {
            source.buffer = buffer;
            source.connect(analyser);
            analyser.connect(audioContext.destination);
            source.start(0);
            visualize();
        });
    }

    function visualize() {
        ctx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);

        analyser.getByteFrequencyData(dataArray);

        const barWidth = visualizerCanvas.width / bufferLength;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
            const barHeight = dataArray[i] * 2;

            ctx.fillStyle = `rgb(${barHeight + 100}, 50, 50)`;
            ctx.fillRect(
                x,
                visualizerCanvas.height - barHeight / 2,
                barWidth,
                barHeight
            );

            x += barWidth + 1;
        }

        requestAnimationFrame(visualize);
    }
});
