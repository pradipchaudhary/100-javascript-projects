const cars = [
    { id: 1, name: "Toyota Camry", image: "car1.jpg", price: 50 },
    { id: 2, name: "Honda Accord", image: "car2.jpg", price: 45 },
    // Add more cars as needed
];

function displayCars() {
    const carListElement = document.getElementById("carList");

    cars.forEach((car) => {
        const carElement = document.createElement("div");
        carElement.classList.add("car");

        carElement.innerHTML = `
              <img src="${car.image}" alt="${car.name}">
              <h3>${car.name}</h3>
              <p>Price: $${car.price}/day</p>
              <button onclick="rentCar(${car.id})">Rent Now</button>
          `;

        carListElement.appendChild(carElement);
    });

    // Populate car options in the booking form
    const carSelect = document.getElementById("carSelect");
    cars.forEach((car) => {
        const option = document.createElement("option");
        option.value = car.id;
        option.textContent = car.name;
        carSelect.appendChild(option);
    });
}

function rentCar(carId) {
    // Implement your booking logic here
    const selectedCar = cars.find((car) => car.id === carId);
    alert(`Car "${selectedCar.name}" rented successfully!`);
}

function submitBooking() {
    // Implement your booking form submission logic here
    const carId = document.getElementById("carSelect").value;
    const pickupDate = document.getElementById("pickupDate").value;
    const returnDate = document.getElementById("returnDate").value;

    // You can send this data to a server for further processing
    // For simplicity, we'll just display an alert with the selected data
    alert(
        `Booking confirmed!\nCar ID: ${carId}\nPickup Date: ${pickupDate}\nReturn Date: ${returnDate}`
    );
}

window.onload = displayCars;
