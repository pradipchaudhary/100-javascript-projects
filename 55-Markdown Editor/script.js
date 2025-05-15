document
    .getElementById("markdownInput")
    .addEventListener("input", updateMarkdown);

function updateMarkdown() {
    const markdownInput = document.getElementById("markdownInput").value;
    const markdownPreview = document.getElementById("markdownPreview");
    const htmlOutput = marked(markdownInput);

    markdownPreview.innerHTML = htmlOutput;
}
