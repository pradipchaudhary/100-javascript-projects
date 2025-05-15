Creating a fully-featured screen reader compatibility web app involves a combination of HTML, CSS, and JavaScript, along with proper semantic markup and ARIA (Accessible Rich Internet Applications) attributes. Here's a basic example to get you started:

### HTML (index.html):

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="styles.css" />
        <title>Screen Reader Compatibility</title>
    </head>
    <body>
        <div id="app">
            <h1>Screen Reader Compatibility Test</h1>
            <p id="info">
                This is a simple web app to test screen reader compatibility.
            </p>
            <button id="toggleButton" aria-live="assertive" aria-atomic="true">
                Toggle Content
            </button>
            <div id="content" aria-hidden="true">
                <p>This is the content that will be toggled.</p>
            </div>
        </div>

        <script src="app.js"></script>
    </body>
</html>
```

### CSS (styles.css):

```css
body {
    font-family: Arial, sans-serif;
}

#app {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
}

button {
    padding: 10px;
    font-size: 16px;
}

#content {
    display: none;
    margin-top: 20px;
}
```

### JavaScript (app.js):

```javascript
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
```

In this example:

-   A button is provided to toggle the visibility of content.
-   ARIA attributes such as `aria-live`, `aria-atomic`, `aria-hidden`, and `aria-expanded` are used to enhance screen reader compatibility.
-   Proper semantic HTML elements and attributes are used for better accessibility.

This is a basic example, and depending on your specific requirements, you may need to implement more features and enhancements. Additionally, testing with real screen readers like NVDA, JAWS, or VoiceOver is crucial to ensure the compatibility of your web app.
