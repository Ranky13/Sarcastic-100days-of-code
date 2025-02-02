function updateQuantity(action, quantityId){
    const quantityDisplay = document.getElementById(quantityId);
    let quantity = parseInt(quantityDisplay.textContent);
    if(action === `decrement` && quantity > 0) {
        quantity--;
    }else if(action === `increment`) {
        quantity++;
    }
    quantityDisplay.textContent = quantity;
};


//? WishList Scripts----------------------------------------------------------------------------------------------------------------------------//

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
    


//? variants Scripts----------------------------------------------------------------------------------------------------------------------

const ThumbImage = document.querySelectorAll(`.ThumbImg`);
const variantsImage = document.querySelectorAll(`.variantImg`); 

variantsImage.forEach((variant) => {
    variant.addEventListener(`click`, () => {
        ThumbImage.src = variant.src;
    });
});


//? cart script--------------------------------------------------------------------------------------------------------------------------

const addToCartButton = document.getElementById(`add-to-cart`);
const SneakerName = document.getElementById(`sneaker-name`);
const ProductDescription = document.getElementById(`description`);
const SneakerPrice = document.getElementById(`price`);
const ProductTag = document.getElementById(`tag`);
const selectedQuantity = document.querySelector(`.quantity-display`).textContent;

addToCartButton.addEventListener(`click`, () => {
    const cartItem = {
        name: SneakerName,
        description: ProductDescription;
        price: SneakerPrice,
        tag: ProductTag;
        quantity: selectedQuantity
    };

    const existingCartItems = localStorage.getItem(`cartItem`);

    if (existingCartItems) {
        const cartItem = JSON.parse(existingCartItems);
        cartItem.push(cartItem);
        localStorage.setItem(`cartItem`, JSON.stringify(cartItem));
    }else {
        const cartItem = [cartItem];
        localStorage.setItem(`cartItem`,JSON.stringify(cartItem));
    }
    updateCartCount();
    });

    function updateCartCount() {
        const cartItem = JSON.parse(localStorage.getItem(`cartItem`));
        const cartCount = cartItem.textContent;
        document.getElementById(`cart-count`).textContent = cartCount;

    };
