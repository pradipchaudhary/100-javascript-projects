function performTreeShaking() {
    const inputCode = document.getElementById("inputCode").value;

    if (!inputCode.trim()) {
        alert("Please enter JavaScript code for tree shaking.");
        return;
    }

    // In a real-world scenario, you would use a build tool like Webpack with Babel for tree shaking.
    // Here, we'll use a simplified example to illustrate the process.

    try {
        const treeShakenCode = treeShakeCode(inputCode);
        displayResult(treeShakenCode);
    } catch (error) {
        alert(`Error during tree shaking: ${error.message}`);
    }
}

function treeShakeCode(code) {
    // Placeholder for tree shaking logic using Babel
    // In practice, you'd need a build tool like Webpack with Babel and proper configuration for tree shaking.
    // Here, we'll use a simple logic to illustrate the concept.

    const { transform } = require("@babel/core");
    const presetEnv = require("@babel/preset-env");

    const result = transform(code, {
        presets: [
            [presetEnv, { modules: false }], // Set modules to false to enable tree shaking
        ],
    });

    if (result && result.code) {
        return result.code;
    } else {
        throw new Error("Failed to perform tree shaking.");
    }
}

function displayResult(result) {
    const outputCode = document.getElementById("outputCode");
    outputCode.textContent = result;
}
