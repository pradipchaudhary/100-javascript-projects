function generateQRCode() {
    const textInput = document.getElementById("textInput").value;
    const qrcodeContainer = document.getElementById("qrcode");

    if (!textInput) {
        alert("Please enter text or URL.");
        return;
    }

    qrcodeContainer.innerHTML = "";

    const qr = new QRCode(qrcodeContainer, {
        text: textInput,
        width: 200,
        height: 200,
    });
}
