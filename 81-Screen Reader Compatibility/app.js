document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const content = document.getElementById("content");

    toggleButton.addEventListener("click", function () {
        const isVisible = content.style.display === "block";
        content.style.display = isVisible ? "none" : "block";
        const buttonText = isVisible ? "Show Content" : "Hide Content";
        toggleButton.innerHTML = buttonText;

        // Update ARIA attributes
        content.setAttribute("aria-hidden", isVisible ? "true" : "false");
        toggleButton.setAttribute(
            "aria-expanded",
            isVisible ? "false" : "true"
        );
    });
});
