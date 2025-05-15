document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggleBtn");
    const body = document.body;

    toggleBtn.addEventListener("click", toggleHighContrast);

    function toggleHighContrast() {
        body.classList.toggle("high-contrast");
    }
});
