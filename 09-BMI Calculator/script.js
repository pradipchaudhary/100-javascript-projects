function calculateBMI() {
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const resultDiv = document.getElementById("result");

    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultDiv.innerHTML =
            "Please enter valid values for height and weight.";
        return;
    }

    const bmi = calculateBMIValue(height, weight);
    const bmiCategory = getBMICategory(bmi);

    resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)} (${bmiCategory}).`;
}

function calculateBMIValue(height, weight) {
    // BMI formula: weight (kg) / (height (m) * height (m))
    const heightInMeters = height / 100; // convert height from cm to meters
    return weight / (heightInMeters * heightInMeters);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 24.9) {
        return "Normal weight";
    } else if (bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}
