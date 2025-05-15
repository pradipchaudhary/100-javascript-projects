// Sample data for the recommendation system
const trainingData = [
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] },
];

// Create a neural network
const net = new brain.NeuralNetwork();

// Train the neural network with the sample data
net.train(trainingData);

// Function to make recommendations based on input
function makeRecommendation(inputData) {
    const output = net.run(inputData);
    return output[0] >= 0.5; // Adjust the threshold based on your use case
}

// Example usage
const userInput = [0, 1]; // Replace this with actual user input

const recommendation = makeRecommendation(userInput);

console.log("Recommendation:", recommendation);
