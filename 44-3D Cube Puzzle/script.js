let isRotating = false;

document.getElementById("cube").addEventListener("click", function () {
    if (!isRotating) {
        isRotating = true;
        rotateCube();
    }
});

function rotateCube() {
    const cube = document.getElementById("cube");
    cube.style.transform += "rotateY(90deg)";

    setTimeout(() => {
        isRotating = false;
        checkCubePosition();
    }, 500);
}

function checkCubePosition() {
    const cube = document.getElementById("cube");
    const currentRotation = getComputedStyle(cube).transform;

    // Check if the cube is in the correct position (rotation)
    if (
        currentRotation === "matrix(6.12323e-17, 0, -1, 1.22465e-16, 1, 0)" ||
        currentRotation === "none"
    ) {
        alert("Congratulations! Puzzle solved!");
    } else {
        alert("Try again. Rotate the cube to match the pattern.");
    }
}
