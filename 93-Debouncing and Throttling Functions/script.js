document.addEventListener("DOMContentLoaded", function () {
    const delaySlider = document.getElementById("delaySlider");
    const delayValue = document.getElementById("delayValue");
    const textInput = document.getElementById("textInput");
    const resultContent = document.getElementById("resultContent");

    let debouncedRequest;
    let throttledRequest;

    function debounce(func, delay) {
        let timeoutId;

        return function () {
            const context = this;
            const args = arguments;

            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(context, args);
            }, delay);
        };
    }

    function throttle(func, limit) {
        let inThrottle;

        return function () {
            const context = this;
            const args = arguments;

            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);
            }
        };
    }

    function simulateApiRequest(value) {
        // Simulate an API request (replace this with your actual API request logic)
        resultContent.textContent = `API Request: ${value}`;
    }

    function handleInput() {
        const value = textInput.value;

        // Debounce the API request
        debouncedRequest(value);

        // Throttle the API request
        throttledRequest(value);
    }

    // Update delay value display
    delaySlider.addEventListener("input", function () {
        delayValue.textContent = delaySlider.value;
    });

    // Set up debouncing and throttling functions
    const delay = parseInt(delaySlider.value, 10);
    debouncedRequest = debounce(simulateApiRequest, delay);
    throttledRequest = throttle(simulateApiRequest, delay);

    // Add input event listener
    textInput.addEventListener("input", handleInput);
});
