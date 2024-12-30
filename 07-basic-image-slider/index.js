let currentIndex = 0;
const slides = document.querySelector(".slider-wrapper").children;
const totalSlides = slides.length;

function changeSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    updateSlider();
}

function updateSlider() {
    const newTransformValue = -currentIndex * 100 + "%";
    document.querySelector(".slider-wrapper").style.transform =
        "translateX(" + newTransformValue + ")";
}

// Optionally, you can add automatic sliding by uncommenting the line below:
// setInterval(() => changeSlide(1), 3000);
