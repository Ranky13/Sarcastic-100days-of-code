// cart.js
let cart = JSON.parse(localStorage.getItem('cart')) || [];



// Function to update cart totals
const updateTotals = () => {
    const cartItems = document.querySelectorAll(".cart-items");
    let subtotal = 0;

    cartItems.forEach((row) => {
        const price = parseFloat(row.querySelector(".product-price").textContent.replace("$", ""));
        const quantity = parseInt(row.querySelector(".product-quantity input").value);
        const totalCell = row.querySelector(".product-total");

        const total = price * quantity;
        totalCell.textContent = `$${total.toFixed(2)}`;
        subtotal += total;
    });

    const tax = subtotal * 0.10;
    const total = subtotal + tax;

    document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById("tax").textContent = `$${tax.toFixed(2)}`;
    document.getElementById("total").textContent = `$${total.toFixed(2)}`;
};




// Function to display cart items
const displayCart = () => {
    const cartItemsContainer = document.querySelector(".product-details");
    cartItemsContainer.innerHTML = '';

    cart.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-items";
        cartItem.innerHTML = `
            <div class="product-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="product-name">
                <h4>${item.name}</h4>
            </div>
            <div class="product-price">
                <h4>$${item.price.toFixed(2)}</h4>
            </div>
            <div class="product-quantity">
                <input type="number" min="1" value="${item.quantity}" onchange="updateCartQuantity(${index}, this.value)">
            </div>
            <div class="product-total">
                <h4>$${(item.price * item.quantity).toFixed(2)}</h4>
            </div>
            <div class="product-action">
                <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    updateTotals();
};


// Function to update cart quantity
const updateCartQuantity = (index, quantity) => {
    cart[index].quantity = parseInt(quantity);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
};

// Function to remove an item from the cart
const removeFromCart = (index) => {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
};

// Function to clear the cart
const clearCart = () => {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
};


// Function to add a product to the cart
const addToCart = (productId, products) => {
    const product = products.find(p => p.id === productId);
    if (product) {
        const cartItem = {
            id: product.id,
            name: product.name,
            price: parseFloat(product.price),
            quantity: 1, // Default quantity
            image: product.image,
        };

        // Check if the product already exists in the cart
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1; // Increment quantity if already in cart
        } else {
            cart.push(cartItem); // Add new item to cart
        }

        // Save cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Update cart UI
        updateCartUI();
        alert(`${product.name} added to cart!`);
    }
};


// Function to update cart UI (e.g., cart quantity in the navbar)
const updateCartUI = () => {
    const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelectorAll('.cart-quantity').forEach(element => {
        element.textContent = cartQuantity;
    });
};

// Function to attach event listeners to "Add to Cart" buttons
const attachCartButtons = (products) => {
    const addToCartButtons = document.querySelectorAll('.cart-button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = parseInt(event.target.getAttribute('data-product-id'));
            addToCart(productId, products);
        });
    });
};

// Initial display of cart items
if (window.location.pathname.endsWith('cart.html')) {
    displayCart();
}

// Checkout button functionality
document.getElementById('checkout-btn')?.addEventListener('click', () => {
    alert(`You bought ${document.getElementById('total').textContent} worth of Sneakers. Thanks!`);
    clearCart();
});









