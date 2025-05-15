function uploadFile() {
    const fileInput = document.getElementById("fileInput");
    const progressBar = document.getElementById("progressBar");
    const status = document.getElementById("status");

    const file = fileInput.files[0];
    if (!file) {
        alert("Please select a file.");
        return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = function (e) {
        if (e.lengthComputable) {
            const progress = (e.loaded / e.total) * 100;
            progressBar.value = progress;
        }
    };

    xhr.onload = function () {
        if (xhr.status === 200) {
            status.innerHTML = "File uploaded successfully!";
        } else {
            status.innerHTML = "Error uploading file. Please try again.";
        }
    };

    xhr.open("POST", "your_upload_endpoint_url", true);
    xhr.send(formData);
}
