
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


/*
function updateQuantity(action, quantityId){
    const quantityDisplay = document.getElementById(quantityId);
    let quantity = parseInt(quantityDisplay.textContent);
    if(action === `decrement` && quantity > 0) {
        quantity--;
    }else if(action === `increment`) {
        quantity++;
    }
    quantityDisplay.textContent = quantity;
}