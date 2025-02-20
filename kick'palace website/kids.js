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

//? WishList Scripts

const heartIcons = document.querySelectorAll(`.bi-heart`);

heartIcons.forEach((icon) => {
    icon.addEventListener(`click`, () => {
        icon.classList.toggle(`bi-heart-fill`);
        icon.classList.toggle(`bi-heart`);

        if (icon.classList.contains(`bi-heart-fill`)){
            alert(`added to wishlisst`);
        }else{
            alert(`removed from wishlist`);
        }
    });
    });