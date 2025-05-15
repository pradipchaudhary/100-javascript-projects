const imageInput = document.getElementById("imageInput");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let originalImage;

imageInput.addEventListener("change", loadImage);

function loadImage() {
    const file = imageInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = new Image();

            img.onload = function () {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0, img.width, img.height);
                originalImage = ctx.getImageData(
                    0,
                    0,
                    canvas.width,
                    canvas.height
                );
            };

            img.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
}

function applyFilter(filter) {
    if (!originalImage) {
        alert("Please upload an image first.");
        return;
    }

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    switch (filter) {
        case "grayscale":
            applyGrayscale(imageData.data);
            break;
        case "sepia":
            applySepia(imageData.data);
            break;
        case "invert":
            applyInvert(imageData.data);
            break;
    }

    ctx.putImageData(imageData, 0, 0);
}

function applyGrayscale(data) {
    for (let i = 0; i < data.length; i += 4) {
        const average = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = data[i + 1] = data[i + 2] = average;
    }
}

function applySepia(data) {
    for (let i = 0; i < data.length; i += 4) {
        const red = data[i];
        const green = data[i + 1];
        const blue = data[i + 2];

        data[i] = Math.min(255, 0.393 * red + 0.769 * green + 0.189 * blue);
        data[i + 1] = Math.min(255, 0.349 * red + 0.686 * green + 0.168 * blue);
        data[i + 2] = Math.min(255, 0.272 * red + 0.534 * green + 0.131 * blue);
    }
}

function applyInvert(data) {
    for (let i = 0; i < data.length; i += 4) {
        data[i] = 255 - data[i];
        data[i + 1] = 255 - data[i + 1];
        data[i + 2] = 255 - data[i + 2];
    }
}

function resetImage() {
    if (originalImage) {
        ctx.putImageData(originalImage, 0, 0);
    }
}

function downloadImage() {
    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "edited_image.png";
    link.click();
}
