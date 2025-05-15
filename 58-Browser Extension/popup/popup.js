document.getElementById("clickMeButton").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: "content-script",
            message: "Hello from popup!",
        });
    });
});
