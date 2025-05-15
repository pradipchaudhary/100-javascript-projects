document.addEventListener("DOMContentLoaded", function () {
    new Vue({
        el: "#keyboardApp",
        methods: {
            focusNext() {
                const focusableElements = document.querySelectorAll(
                    "#keyboardApp [tabindex]"
                );
                const currentIndex = Array.from(focusableElements).indexOf(
                    document.activeElement
                );
                const nextIndex = (currentIndex + 1) % focusableElements.length;
                focusableElements[nextIndex].focus();
            },
            focusPrev() {
                const focusableElements = document.querySelectorAll(
                    "#keyboardApp [tabindex]"
                );
                const currentIndex = Array.from(focusableElements).indexOf(
                    document.activeElement
                );
                const prevIndex =
                    (currentIndex - 1 + focusableElements.length) %
                    focusableElements.length;
                focusableElements[prevIndex].focus();
            },
            handleKeyPress(event) {
                if (event.key === "Enter") {
                    alert(
                        "Enter key pressed! You can perform additional actions here."
                    );
                }
            },
        },
    });
});
