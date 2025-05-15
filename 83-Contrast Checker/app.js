import React, { useState } from "react";
import ReactDOM from "react-dom";

function ContrastChecker() {
    const [foreground, setForeground] = useState("#000000");
    const [background, setBackground] = useState("#ffffff");

    const checkContrast = () => {
        const contrastRatio = getContrastRatio(foreground, background);
        return contrastRatio >= 4.5 ? "pass" : "fail";
    };

    const handleForegroundChange = (event) => {
        setForeground(event.target.value);
    };

    const handleBackgroundChange = (event) => {
        setBackground(event.target.value);
    };

    return (
        <div id="app">
            <h1>Contrast Checker</h1>
            <label htmlFor="foreground" className="colorInput">
                Foreground Color:
                <input
                    type="color"
                    id="foreground"
                    value={foreground}
                    onChange={handleForegroundChange}
                />
            </label>

            <label htmlFor="background" className="colorInput">
                Background Color:
                <input
                    type="color"
                    id="background"
                    value={background}
                    onChange={handleBackgroundChange}
                />
            </label>

            <div id="result" className={checkContrast()}>
                {checkContrast() === "pass" ? "Pass" : "Fail"}
            </div>
        </div>
    );
}

function getContrastRatio(foreground, background) {
    const lum1 = getRelativeLuminance(parseHexColor(foreground));
    const lum2 = getRelativeLuminance(parseHexColor(background));

    return (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05);
}

function parseHexColor(hex) {
    const bigint = parseInt(hex.substring(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return { r, g, b };
}

function getRelativeLuminance(color) {
    const { r, g, b } = color;

    const rsrgb = r / 255;
    const gsrgb = g / 255;
    const bsrgb = b / 255;

    const rlinear =
        rsrgb <= 0.03928 ? rsrgb / 12.92 : ((rsrgb + 0.055) / 1.055) ** 2.4;
    const glinear =
        gsrgb <= 0.03928 ? gsrgb / 12.92 : ((gsrgb + 0.055) / 1.055) ** 2.4;
    const blinear =
        bsrgb <= 0.03928 ? bsrgb / 12.92 : ((bsrgb + 0.055) / 1.055) ** 2.4;

    return 0.2126 * rlinear + 0.7152 * glinear + 0.0722 * blinear;
}

ReactDOM.render(<ContrastChecker />, document.getElementById("app"));
