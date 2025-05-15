document.addEventListener("DOMContentLoaded", function () {
    const codeInput = document.getElementById("codeInput");
    const charCount = document.getElementById("charCount");
    const optimizeBtn = document.getElementById("optimizeBtn");
    const optimizedCode = document.getElementById("optimizedCode");

    // Update character count on input
    codeInput.addEventListener("input", function () {
        const code = codeInput.value;
        charCount.textContent = code.length;
    });

    // Optimize code on button click
    optimizeBtn.addEventListener("click", function () {
        const code = codeInput.value;

        // Basic optimization example: remove extra whitespaces
        const optimized = code.replace(/\s+/g, " ");

        optimizedCode.textContent = optimized;
    });
});
