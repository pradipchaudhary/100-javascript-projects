document.addEventListener("DOMContentLoaded", function () {
    const colorPicker = document.getElementById("colorPicker");
    const protanopia = document.getElementById("protanopia");
    const deuteranopia = document.getElementById("deuteranopia");
    const tritanopia = document.getElementById("tritanopia");

    colorPicker.addEventListener("input", updateSimulatedColors);

    function updateSimulatedColors() {
        const originalColor = colorPicker.value;
        const simulatedProtanopia = simulateColorBlindness(
            originalColor,
            "protanopia"
        );
        const simulatedDeuteranopia = simulateColorBlindness(
            originalColor,
            "deuteranopia"
        );
        const simulatedTritanopia = simulateColorBlindness(
            originalColor,
            "tritanopia"
        );

        setSimulatedColor(protanopia, simulatedProtanopia);
        setSimulatedColor(deuteranopia, simulatedDeuteranopia);
        setSimulatedColor(tritanopia, simulatedTritanopia);
    }

    function setSimulatedColor(element, color) {
        element.style.backgroundColor = color;
        element.textContent = `Simulated Color: ${color}`;
    }

    function simulateColorBlindness(originalColor, type) {
        const color = parseHexColor(originalColor);

        switch (type) {
            case "protanopia":
                return rgbToHex(simulateProtanopia(color.r, color.g, color.b));
            case "deuteranopia":
                return rgbToHex(
                    simulateDeuteranopia(color.r, color.g, color.b)
                );
            case "tritanopia":
                return rgbToHex(simulateTritanopia(color.r, color.g, color.b));
            default:
                return originalColor;
        }
    }

    function parseHexColor(hex) {
        const bigint = parseInt(hex.substring(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;

        return { r, g, b };
    }

    function simulateProtanopia(r, g, b) {
        const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
        const newR = 0;
        const newG = 0.9922 * g + 0.0078 * b;
        const newB = 0.9922 * b;

        return blendColors(luminance, newR, newG, newB);
    }

    function simulateDeuteranopia(r, g, b) {
        const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
        const newR = 0.625 * r + 0.375 * b;
        const newG = 0.7 * g + 0.3 * b;
        const newB = 0;

        return blendColors(luminance, newR, newG, newB);
    }

    function simulateTritanopia(r, g, b) {
        const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
        const newR = 0.9672 * r;
        const newG = 0.048 * r + 0.953 * g;
        const newB = 0.953 * b;

        return blendColors(luminance, newR, newG, newB);
    }

    function blendColors(luminance, newR, newG, newB) {
        const blendFactor = 0.7; // Adjust this value for blending intensity
        const resultR = Math.round(
            blendFactor * newR + (1 - blendFactor) * luminance
        );
        const resultG = Math.round(
            blendFactor * newG + (1 - blendFactor) * luminance
        );
        const resultB = Math.round(
            blendFactor * newB + (1 - blendFactor) * luminance
        );

        return `rgb(${resultR}, ${resultG}, ${resultB})`;
    }

    function rgbToHex(r, g, b) {
        return `#${((1 << 24) | (r << 16) | (g << 8) | b)
            .toString(16)
            .slice(1)}`;
    }
});
