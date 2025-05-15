function generatePalette() {
    const colorInput = document.getElementById("colorInput").value;
    const colorPalette = document.getElementById("colorPalette");

    // Clear previous palette
    colorPalette.innerHTML = "";

    // Validate color input
    if (!isValidColor(colorInput)) {
        alert("Please enter a valid color code.");
        return;
    }

    // Generate and display color palette
    const colors = generateColors(colorInput);
    colors.forEach((color) => {
        const colorBox = document.createElement("div");
        colorBox.style.backgroundColor = color;
        colorBox.className = "colorBox";
        colorPalette.appendChild(colorBox);
    });
}

function isValidColor(color) {
    const colorRegex = /^#[0-9A-Fa-f]{6}$/;
    return colorRegex.test(color);
}

function generateColors(baseColor) {
    const colorPalette = [];
    const steps = 5; // You can adjust the number of steps

    for (let i = 0; i < steps; i++) {
        const shade = lightenDarkenColor(baseColor, i * 20);
        colorPalette.push(shade);
    }

    return colorPalette;
}

function lightenDarkenColor(col, amt) {
    let usePound = false;

    if (col[0] === "#") {
        col = col.slice(1);
        usePound = true;
    }

    const num = parseInt(col, 16);

    let r = (num >> 16) + amt;
    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    let b = ((num >> 8) & 0x00ff) + amt;
    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    let g = (num & 0x0000ff) + amt;
    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (
        (usePound ? "#" : "") +
        (g | (b << 8) | (r << 16)).toString(16).padStart(6, "0")
    );
}
