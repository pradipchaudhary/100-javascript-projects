const products = [
    { id: 1, name: "Product 1", price: 50 },
    { id: 2, name: "Product 2", price: 45 },
    // Add more products as needed
];

function displayProducts() {
    const productListElement = document.getElementById("productList");

    products.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");

        productElement.innerHTML = `
              <img src="product${product.id}.jpg" alt="${product.name}">
              <h3>${product.name}</h3>
              <p>Price: $${product.price}</p>
              <button class="button" onclick="addToCart(${product.id})">Add to Cart</button>
          `;

        productListElement.appendChild(productElement);
    });
}

function addToCart(productId) {
    // Implement your cart logic (adding products to the cart)
    alert(`Product with ID ${productId} added to cart!`);
}

window.onload = displayProducts;
