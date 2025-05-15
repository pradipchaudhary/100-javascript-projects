chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "content-script") {
        alert(request.message);
    }
});
