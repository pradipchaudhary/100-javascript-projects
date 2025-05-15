function convert() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const selectUnit = document.getElementById("selectUnit");
    const resultElement = document.getElementById("result");

    if (isNaN(inputValue)) {
        alert("Please enter a valid number.");
        return;
    }

    const selectedUnit = selectUnit.value;
    let result;

    if (selectedUnit === "km") {
        result = convertKilometersToMiles(inputValue);
        resultElement.innerText = `${inputValue} Kilometers is approximately ${result.toFixed(
            2
        )} Miles.`;
    } else if (selectedUnit === "mi") {
        result = convertMilesToKilometers(inputValue);
        resultElement.innerText = `${inputValue} Miles is approximately ${result.toFixed(
            2
        )} Kilometers.`;
    }
}

function convertKilometersToMiles(kilometers) {
    return kilometers * 0.621371;
}

function convertMilesToKilometers(miles) {
    return miles / 0.621371;
}
