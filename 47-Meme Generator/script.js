function generateMeme() {
    const topText = document.getElementById("topText").value;
    const bottomText = document.getElementById("bottomText").value;
    const imageSelect = document.getElementById("imageSelect");
    const selectedImage = imageSelect.options[imageSelect.selectedIndex].value;

    const memeContainer = document.getElementById("meme-container");
    const topTextElement = document.getElementById("top-text");
    const bottomTextElement = document.getElementById("bottom-text");
    const memeImageElement = document.getElementById("meme-image");

    topTextElement.textContent = topText;
    bottomTextElement.textContent = bottomText;
    memeImageElement.src = selectedImage;

    memeContainer.style.display = "block";
}
