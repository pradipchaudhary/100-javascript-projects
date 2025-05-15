document.addEventListener("DOMContentLoaded", function () {
    const fontSizeInput = document.getElementById("fontSize");
    const textToResize = document.getElementById("textToResize");

    fontSizeInput.addEventListener("input", function () {
        const newSize = fontSizeInput.value + "px";
        textToResize.style.fontSize = newSize;
    });
});
