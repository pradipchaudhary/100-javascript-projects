document.addEventListener("DOMContentLoaded", loadClipboardHistory);

function loadClipboardHistory() {
    const clipboardHistory =
        JSON.parse(localStorage.getItem("clipboardHistory")) || [];
    const clipboardHistoryContainer =
        document.getElementById("clipboardHistory");
    clipboardHistoryContainer.innerHTML = "";

    clipboardHistory.forEach((text, index) => {
        const clipboardItem = createClipboardItem(text, index);
        clipboardHistoryContainer.appendChild(clipboardItem);
    });
}

function createClipboardItem(text, index) {
    const clipboardItem = document.createElement("div");
    clipboardItem.classList.add("clipboard-item");
    clipboardItem.textContent = text;
    clipboardItem.onclick = () => copyFromHistory(index);
    return clipboardItem;
}

function copyToClipboard() {
    const clipboardInput = document.getElementById("clipboardInput");
    const copiedText = clipboardInput.value.trim();

    if (copiedText !== "") {
        const clipboardHistory =
            JSON.parse(localStorage.getItem("clipboardHistory")) || [];
        clipboardHistory.unshift(copiedText);

        if (clipboardHistory.length > 10) {
            clipboardHistory.pop();
        }

        localStorage.setItem(
            "clipboardHistory",
            JSON.stringify(clipboardHistory)
        );
        loadClipboardHistory();
    }
}

function copyFromHistory(index) {
    const clipboardHistory =
        JSON.parse(localStorage.getItem("clipboardHistory")) || [];
    const textToCopy = clipboardHistory[index];

    if (textToCopy) {
        navigator.clipboard
            .writeText(textToCopy)
            .then(() => {
                alert("Text copied to clipboard!");
            })
            .catch((err) => {
                console.error("Unable to copy text: ", err);
            });
    }
}

function clearClipboard() {
    localStorage.removeItem("clipboardHistory");
    loadClipboardHistory();
}
