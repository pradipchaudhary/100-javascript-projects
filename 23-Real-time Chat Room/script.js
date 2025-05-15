// Replace 'ws://your-server-address' with the actual WebSocket server address
const socket = new WebSocket("ws://your-server-address");

socket.addEventListener("open", (event) => {
    console.log("WebSocket connection opened:", event);
});

socket.addEventListener("message", (event) => {
    const chatMessages = document.getElementById("chatMessages");
    const message = document.createElement("div");
    message.textContent = event.data;
    chatMessages.appendChild(message);
});

socket.addEventListener("close", (event) => {
    console.log("WebSocket connection closed:", event);
});

function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value;

    if (message.trim() !== "") {
        socket.send(message);
        messageInput.value = "";
    }
}
