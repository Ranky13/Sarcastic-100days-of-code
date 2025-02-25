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


//?---------------------------------Wishlist Event Clicked Script--------------------------------------------


const attachWishlistListeners = () => {
const heartIcons = document.querySelectorAll(`.bi-heart`);
heartIcons.forEach((icons) => {
    icons.addEventListener(`click`, handleWishlistClick);
});
}

const handleWishlistClick = (event) => {
    const icon = event.target;
        icon.classList.toggle(`bi-heart-fill`);
        icon.classList.toggle(`bi-heart`);

        if (icon.classList.contains(`bi-heart-fill`)){
            alert(`added to wishlisst`);
        }else{
            alert(`removed from wishlist`);
        }
    }




//?------------------------------Variants Event Clicked Script-----------------------------------\

const attachVariantListeners = () => {
    const variantImages = document.querySelectorAll(`.Boots-variants img`);
    variantImages.forEach((images) => {
        images.addEventListener(`click`, handleVariantClick);
    });
}

const handleVariantClick = (event) => {
    const variantImage = event.target.src;
    const productCard = event.target.closest(`.MB-trending-column-details, .FB-trending-column-details, .KB-trending-column-details`);
    const mainImage = productCard.querySelectorAll(`.MB-trending-card-details img, .FB-trending-card-details img, .KB-trending-card-details img`);
    mainImage.forEach((image => {
        image.src = variantImage;
    }))
}





    const Menproducts = [
        {
          id: 1,
          name: "Nike Air Force 1 ’07",
          tagName: "Men's Sneaker",
          year: "2024",
          price: "$130",
          image: "img/AIR+FORCE+1+'07.png",
          variants: [
            "img/AIR+FORCE+1+'07 (2).png",
            "img/AIR+FORCE+1+'07 (3).png",
            "img/AIR+FORCE+1+'07 (1).png",
            "img/AIR+FORCE+1+'07.png"
          ],
          sizes: ["S", "M", "L", "XL"]
        },
        {
          id: 2,
          name: "NIKE KD17",
          tagName: "sport sneaker",
          year: "2024",
          price: "$106",
          image: "img/KD17.png",
          variants: [
            "img/KD17 (1).png",
            "img/KD17 (2).png",
            "img/KD17+XMAS+PE.png",
            "img/KD17.png"
          ],
          sizes: ["S", "M", "L", "XL"]
        },
        {
            id: 3,
            name: "Nike Ja 2",
            tagName: "Men's Sneaker",
            year: "2023",
            price: "$120",
            image:  "img/JA+2.png",
            variants: [
                "img/JA+2 (1).png",
                "img/JA+2 (2).png",
                "img/JA+2 (3).png",
                "img/JA+2.png"
            ],
            sizes: ["S", "M", "L", "XL"]
          },
          {
            id: 4,
            name: "Nike Shox TL",
            tagName: "Men's Sneaker",
            year: "2024",
            price: "$170",
            image: "img/NIKE+SHOX+TL.png",
            variants: [
                "img/NIKE+SHOX+TL (1).png",
                "img/NIKE+SHOX+TL (2).png",
                "img/NIKE+SHOX+TL (3).png",
                "img/NIKE+SHOX+TL.png"
            ],
            sizes: ["S", "M", "L", "XL"]
          },
          {
            id: 5,
            name: "Jordan Flight Court",
            tagName: "Men's Sneaker",
            year: "2023",
            price: "$100",
            image: "img/JORDAN+FLIGHT+COURT.png",
            variants: [
                "img/JORDAN+FLIGHT+COURT (1).png",
                "img/JORDAN+FLIGHT+COURT (2).png",
                "img/JORDAN+FLIGHT+COURT (3).png",
                "img/JORDAN+FLIGHT+COURT.png"
            ],
            sizes: ["S", "M", "L", "XL"]
          },
          {
            id: 6,
            name: "Nike C1TY",
            tagName: "Men's Sneaker",
            year: "2023",
            price: "$100",
            image: "img/NIKE+C1TY (1).png",
            variants: [
                "img/NIKE+C1TY (1).png",
                "img/NIKE+C1TY.png",
                "img/NIKE+C1TY (3).png",
                "img/NIKE+C1TY (2).png"
            ],
            sizes: ["S", "M", "L", "XL"]
          },
      ];
    
    
      //? Female Product data
    const Womenproducts = [
        {
          id: 7,
          name: "Nike Air Max 90",
          tagName: "Women Sneakers",
          year: "2023",
          price: "$84",
          image: "img/W+AIR+MAX+90+SE.png",
          variants: [
                "img/WMNS+AIR+MAX+90 (2).png",
                "img/WMNS+AIR+MAX+90 (3).png",
                "img/WMNS+AIR+MAX+90.png",
                "img/W+AIR+MAX+90+SE.png"
          ],
          sizes: ["S", "M", "L", "XL"]
        },
        {        
          id: 8,
          name: "Nike Zoom Fly 6",
          tagName: "Women's Road Racing Shoes",
          year: "2023",
          price: "$100",
          image: "img/W+ZOOM+FLY+6.png",
          variants: [
            "img/W+ZOOM+FLY+6 (1).png",
            "img/W+ZOOM+FLY+6.jpeg",
            "img/W+ZOOM+FLY+6 (2).png",
            "img/W+ZOOM+FLY+6.png"
          ],
          sizes: ["S", "M", "L", "XL"]
        },
        {
            id: 9,
            name: "Nike Ryz 365 2",
            tagName: "Women's vacation Sneaker",
            year: "2024",
            price: "$90",
            image:  "img/WMNS+NIKE+RYZ+365+II (3).png",
            variants: [
                "img/WMNS+NIKE+RYZ+365+II (1).png",
                "img/WMNS+NIKE+RYZ+365+II (2).png",
                "img/WMNS+NIKE+RYZ+365+II (3).png",
                "img/WMNS+NIKE+RYZ+365+II.png"
            ],
            sizes: ["S", "M", "L", "XL"]
          },
          {
            id: 10,
            name: "Air Force 1 ’07 LX",
            tagName: "Women Sneakers",
            year: "2024",
            price: "$135",
            image: "img/WMNS+AIR+FORCE+1+'07+LX.png",
            variants: [
                "img/WMNS+AIR+FORCE+1+'07+LX (1).png",
                "img/WMNS+AIR+FORCE+1+'07+LX (2).png",
                "img/WMNS+AIR+FORCE+1+'07+LX (3).png",
                "img/WMNS+AIR+FORCE+1+'07+LX.png"
            ],
            sizes: ["S", "M", "L", "XL"]
          },
          {
            id: 11,
            name: "Nike AL8",
            tagName: "Women's Vacation Sneakers",
            year: "2024",
            price: "$90",
            image: "img/W+NIKE+AL8 (2).png",
            variants: [
                "img/W+NIKE+AL8 (1).png",
                "img/W+NIKE+AL8 (2).png",
                "img/W+NIKE+AL8 (3).png",
                "img/W+NIKE+AL8.png" 
            ],
            sizes: ["S", "M", "L", "XL"]
          },  
          {
            id: 12,
            name: ">Nike Free Metcon 6",
            tagName: "Women's Workout Shoes",
            year: "2024",
            price: "$120",
            image: "img/W+NIKE+FREE+METCON+6.png",
            variants: [
                "img/W+NIKE+FREE+METCON+6 (1).png",
                "img/W+NIKE+FREE+METCON+6.png",
                "img/W+NIKE+FREE+METCON+6 (2).png",
                "img/W+NIKE+FREE+METCON+6 (4).png"
            ],
            sizes: ["S", "M", "L", "XL"]
          },
      ];
    
    
       //? Kids Product data
    const Kidsproducts = [
        {
          id: 13,
          name: "Kids Ja 2",
          tagName: "Little Kids's Sneaker",
          year: "2023",
          price: "$83",
          image: "img/JA+2+(PS).png",
          variants: [
            "img/JA+2+(PS) (1).png",
            "img/JA+2+(PS) (2).png",
            "img/JA+2+NIGHTMARE+(PS).png",
            "img/JA+2+(PS).png"
          ],
          sizes: ["S", "M", "L", "XL"]
        },
        {
          id: 14,
          name: "Gianni Immortality SE",
          tagName: "Giannis Kids Sneakers",
          year: "2023",
          price: "$59.9",
          image: "img/GIANNIS+IMMORTALITY+4+SE+(GS).png",
          variants: [
            "img/GIANNIS+IMMORTALITY+4+SE+(GS) (2).png",
            "img/GIANNIS+IMMORTALITY+4+SE+(GS) (3).png",
            "img/GIANNIS+IMMORTALITY+4+SE+(GS).png"
          ],
          sizes: ["S", "M", "L", "XL"]
        },
        {
            id: 15,
            name: "Nike Air Max Dn",
            tagName: "Unisex Kids Sneakers",
            year: "2024",
            price: "$84.9",
            image: "img/AIR+MAX+DN+BG.png",
            variants: [
                "img/AIR+MAX+DN+(GS).jpg",
                "img/AIR+MAX+DN+(GS) (1).png",
                "img/AIR+MAX+DN+(GS).png",
                "img/AIR+MAX+DN+BG.png"
            ],
            sizes: ["S", "M", "L", "XL"]
          },
          {
            id: 16,
            name: "Jordan Max Aura 6",
            tagName: "Big Kids Vacation shoe",
            year: "2024",
            price: "$95",
            image:"img/JORDAN+MAX+AURA+6+(GS) (2).png",
            variants: [
               "img/JORDAN+MAX+AURA+6+(GS) (1).png",
                "img/JORDAN+MAX+AURA+6+(GS) (2).png",
                "img/JORDAN+MAX+AURA+6+(GS) (3).png",
                "img/JORDAN+MAX+AURA+6+(GS).png"
            ],
            sizes: ["S", "M", "L", "XL"]
          },
          {
            id: 17,
            name: "Nike Air Max Plus",
            tagName: "Big Kids' Sneakers",
            year: "2024",
            price: "$120",
            image: "img/AIR+MAX+PLUS+(PS).png",
            variants: [
                "img/AIR+MAX+PLUS+(PS) (1).png",
                "img/AIR+MAX+PLUS+(PS) (2).png",
                "img/AIR+MAX+PLUS+(PS) (3).png",
                "img/AIR+MAX+PLUS+(PS).png"
            ],
            sizes: ["S", "M", "L", "XL"]
          },
          {
            id: 18,
            name: "Jordan Spizike Low",
            tagName: "Baby/Toddler Shoes",
            year: "2023",
            price: "$60",
            image: "img/JORDAN+SPIZIKE+LOW+(TD).png",
            variants: [
            "img/JORDAN+SPIZIKE+LOW+(TD) (1).png",
            "img/JORDAN+SPIZIKE+LOW+(TD) (2).png",
            "img/JORDAN+SPIZIKE+LOW+(TD) (3).png",
            "img/JORDAN+SPIZIKE+LOW+(TD).png"
            ],
            sizes: ["S", "M", "L", "XL"]
          },
      ];


 //?----------------------------------------------Function Men Product Card HTML

      const createMenProductCard = (product) => {
        return `
            <div class="MB-trending-column-details">
                 <i class="bi bi-heart"></i>
                <div class="MB-trending-card-details">
                    <img src="${product.image}" alt="${product.name}">
                <div class="MB-trending-details">
                    <h2>${product.name}</h2>
                    <p>${product.tagName}</p>
                    <p>${product.year}</p>
                    <h3>${product.price}</h3>
                    <div class="quantity">
                    <i class="bi bi-dash" onclick="updateQuantity('decrement', 'quantity${product.id}')"></i>
                    <span class="quantity-display" id="quantity${product.id}">0</span>
                    <i class="bi bi-plus" onclick="updateQuantity('increment', 'quantity${product.id}')"></i>
                    </div>
                    <button class="buy-button">Buy</button>
                    <button class="cart-button">Add to cart</button>
                </div>
                </div>
                <div class="Boots-variants">
                    ${product.variants.map(variant => `<img src="${variant}" alt="${product.name}">`).join('')}
                </div>
                <div class="size-headline">
                    <h2>Sizes</h2>
                </div>
                <div class="sizes">
                    ${product.sizes.map(size => `<span>${size}</span>`).join('')}
                </div>
              </div>
        `;
      };   



       //?----------------------------------------------Function Female Product Card HTML
      const createWomenProductCard = (product) => {
        return `
            <div class="FB-trending-column-details">
                 <i class="bi bi-heart"></i>
                <div class="FB-trending-card-details">
                    <img src="${product.image}" alt="${product.name}">
                <div class="FB-trending-details">
                    <h2>${product.name}</h2>
                    <p>${product.tagName}</p>
                    <p>${product.year}</p>
                    <h3>${product.price}</h3>
                    <div class="quantity">
                    <i class="bi bi-dash" onclick="updateQuantity('decrement', 'quantity${product.id}')"></i>
                    <span class="quantity-display" id="quantity${product.id}">0</span>
                    <i class="bi bi-plus" onclick="updateQuantity('increment', 'quantity${product.id}')"></i>
                    </div>
                    <button class="buy-button">Buy</button>
                    <button class="cart-button">Add to cart</button>
                </div>
                </div>
                <div class="Boots-variants">
                    ${product.variants.map(variant => `<img src="${variant}" alt="${product.name}">`).join('')}
                </div>
                <div class="size-headline">
                    <h2>Sizes</h2>
                </div>
                <div class="sizes">
                    ${product.sizes.map(size => `<span>${size}</span>`).join('')}
                </div>
              </div>
        `;
      };   




      //?----------------------------------------------Function Kids Product Card HTML
      const createKidsProductCard = (product) => {
        return `
            <div class="KB-trending-column-details">
                 <i class="bi bi-heart"></i>
                <div class="KB-trending-card-details">
                    <img src="${product.image}" alt="${product.name}">
                <div class="KB-trending-details">
                    <h2>${product.name}</h2>
                    <p>${product.tagName}</p>
                    <p>${product.year}</p>
                    <h3>${product.price}</h3>
                    <div class="quantity">
                    <i class="bi bi-dash" onclick="updateQuantity('decrement', 'quantity${product.id}')"></i>
                    <span class="quantity-display" id="quantity${product.id}">0</span>
                    <i class="bi bi-plus" onclick="updateQuantity('increment', 'quantity${product.id}')"></i>
                    </div>
                    <button class="buy-button">Buy</button>
                    <button class="cart-button">Add to cart</button>
                </div>
                </div>
                <div class="Boots-variants">
                    ${product.variants.map(variant => `<img src="${variant}" alt="${product.name}">`).join('')}
                </div>
                <div class="size-headline">
                    <h2>Sizes</h2>
                </div>
                <div class="sizes">
                    ${product.sizes.map(size => `<span>${size}</span>`).join('')}
                </div>
              </div>
        `;
      };   
    
      const RenderAllProducts = () => {
        const MenproductContainer = document.getElementById(`MB-trending-column`);
        MenproductContainer.innerHTML = Menproducts.map(product => createMenProductCard(product)).join(``);
        
        const WomenProductContainer = document.getElementById(`FB-trending-column`);
        WomenProductContainer.innerHTML = Womenproducts.map(product => createWomenProductCard(product)).join(``);

        const KidsproductContainer = document.getElementById(`KB-trending-column`);
        KidsproductContainer.innerHTML = Kidsproducts.map(product => createKidsProductCard(product)).join(``);

        attachWishlistListeners();
        attachVariantListeners();
    }

    RenderAllProducts();