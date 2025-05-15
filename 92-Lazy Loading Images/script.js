document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img[data-src]");

    // Intersection Observer API to load images when they come into the viewport
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute("data-src");

                    // Load the image
                    img.setAttribute("src", src);
                    img.removeAttribute("data-src");

                    // Stop observing once the image is loaded
                    observer.unobserve(img);
                }
            });
        },
        { rootMargin: "0px 0px 50px 0px" }
    );

    // Start observing each image
    images.forEach((image) => {
        observer.observe(image);
    });
});
