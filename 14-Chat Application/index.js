const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
let socket;

function initWebSocket() {
    socket = new WebSocket("ws://localhost:3000");

    socket.addEventListener("open", (event) => {
        console.log("WebSocket connection opened:", event);
    });

    socket.addEventListener("message", (event) => {
        const message = JSON.parse(event.data);
        displayMessage(message.text);
    });

    socket.addEventListener("close", (event) => {
        console.log("WebSocket connection closed:", event);
    });
}

function displayMessage(message) {
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
    const message = messageInput.value;
    if (message.trim() !== "") {
        socket.send(JSON.stringify({ text: message }));
        displayMessage(message);
        messageInput.value = "";
    }
}

sendButton.addEventListener("click", sendMessage);

document.addEventListener("DOMContentLoaded", () => {
    initWebSocket();
});
