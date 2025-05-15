// Function to add a new list item
function addItem() {
    const listContainer = document.getElementById("listContainer");
    const newItem = document.createElement("li");
    newItem.textContent = `Item ${listContainer.childElementCount + 1}`;

    // Add event listener to the new item
    newItem.addEventListener("click", handleItemClick);

    // Append the new item to the list container
    listContainer.appendChild(newItem);
}

// Function to handle item click (event delegation)
function handleItemClick(event) {
    alert(`You clicked on: ${event.target.textContent}`);
}

// Add event listener to the "Add Item" button
document.getElementById("addItemBtn").addEventListener("click", addItem);
