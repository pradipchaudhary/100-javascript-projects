document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("drawingCanvas");
    const ctx = canvas.getContext("2d");
    let isDrawing = false;

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);

    function startDrawing(e) {
        isDrawing = true;
        draw(e); // To start drawing from the current position immediately
    }

    function draw(e) {
        if (!isDrawing) return;

        ctx.lineWidth = 5;
        ctx.lineCap = "round";
        ctx.strokeStyle = "#000";

        ctx.lineTo(
            e.clientX - canvas.getBoundingClientRect().left,
            e.clientY - canvas.getBoundingClientRect().top
        );
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(
            e.clientX - canvas.getBoundingClientRect().left,
            e.clientY - canvas.getBoundingClientRect().top
        );
    }

    function stopDrawing() {
        isDrawing = false;
        ctx.beginPath(); // To start a new path when the user resumes drawing
    }
});
