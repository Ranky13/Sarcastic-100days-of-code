
let quantity = 0;

function decrementQuantity() {
    if(quantity > 0) {
        quantity--;
        document.getElementById("quantity").textContent = quantity;
    }
}

function incrementQuantity() {
    quantity++;
    document.getElementById("quantity").textContent = quantity;
}