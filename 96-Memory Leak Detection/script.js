let memoryLeakArray = [];
let memoryLeakInterval;
let memoryUsageElement = document.getElementById("usageValue");

function startMemoryLeak() {
    memoryLeakInterval = setInterval(() => {
        const newData = new Array(100000).fill("MemoryLeakData");
        memoryLeakArray = memoryLeakArray.concat(newData);
        updateMemoryUsage();
        console.log("Memory Leak Detected!");
    }, 1000);
}

function stopMemoryLeak() {
    clearInterval(memoryLeakInterval);
}

function updateMemoryUsage() {
    const usedMemory = (
        performance.memory.usedJSHeapSize /
        (1024 * 1024)
    ).toFixed(2);
    memoryUsageElement.textContent = `${usedMemory} MB`;
}

document
    .getElementById("startButton")
    .addEventListener("click", startMemoryLeak);
document.getElementById("stopButton").addEventListener("click", stopMemoryLeak);
