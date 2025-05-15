function performCodeSplitting() {
    const inputCode = document.getElementById("inputCode").value;

    if (!inputCode.trim()) {
        alert("Please enter JavaScript code for code splitting.");
        return;
    }

    try {
        const splitFiles = splitCode(inputCode);
        displayResult(splitFiles);
    } catch (error) {
        alert(`Error during code splitting: ${error.message}`);
    }
}

function splitCode(code) {
    // Placeholder for code splitting logic
    // In a real-world scenario, you would use a build tool like Webpack to handle code splitting.
    // Here, we'll use a simplified logic to illustrate the concept.

    const splitFiles = code.split("\n\n"); // Split the code into files based on double line breaks

    if (splitFiles.length > 1) {
        return splitFiles;
    } else {
        throw new Error("Failed to perform code splitting.");
    }
}

function displayResult(files) {
    const outputFiles = document.getElementById("outputFiles");
    outputFiles.innerHTML = "<strong>Split Files:</strong>";

    files.forEach((file, index) => {
        outputFiles.innerHTML += `<div><strong>File ${
            index + 1
        }:</strong><pre>${file}</pre></div>`;
    });
}
