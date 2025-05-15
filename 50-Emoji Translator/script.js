function translateToEmoji() {
    var textInput = document.getElementById("textInput").value;
    var emojiResult = document.getElementById("emojiResult");

    // Simple mapping of words to emojis (customize as needed)
    var emojiMap = {
        happy: "😊",
        sad: "😢",
        love: "❤️",
        cool: "😎",
        hello: "👋",
        // Add more mappings as needed
    };

    // Replace words with corresponding emojis
    var translatedText = textInput
        .toLowerCase()
        .replace(/\b\w+\b/g, function (word) {
            return emojiMap[word] || word;
        });

    // Display the translated text with emojis
    emojiResult.textContent = translatedText;
}
