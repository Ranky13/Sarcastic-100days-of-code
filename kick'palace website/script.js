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

 //? Star Rating Scripts--------------------------------------------------------------------------------------------------------------------------//

 const StarRating = document.querySelectorAll(`.bi-star`);

 StarRating.forEach((star) => {
     star.addEventListener(`click`, () => {
         star.classList.toggle(`bi-star-fill`);
         star.classList.toggle(`bi-star`);
     });
 });