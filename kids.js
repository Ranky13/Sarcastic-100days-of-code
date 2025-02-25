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

//?----------------------------------------------------------WishList Scripts------------------------------------------------------

const attachWishlistListeners = (icons) => {
  const heartIcons = document.querySelectorAll(`.bi-heart`);
  heartIcons.forEach((icons) => {
    icons .addEventListener(`click`, handleWishlistClick);
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


    //?-------------------------------------variants Clicked Script----------------------------------
    const attachVariantListeners = () => {
      const variantImages = document.querySelectorAll(`.kids-variants img`);
      variantImages.forEach((image) => {
        image.addEventListener(`click`, handleVariantClick);
      });
    }
    const handleVariantClick = (event) => {
      const variantImage = event.target.src;
      const productCard = event.target.closest(`.kids-trending-column-details, .kids-boots-column-details`);
      const mainImage = productCard.querySelectorAll(`.kids-trending-card-detail img, .kids-boots-card-details img`);
      mainImage.forEach((image) => {
        image.src = variantImage;
      });
    }












    const kidSneakers = [
        {
            id: 1,
            name: "Jordan Max Aura 6",
            tagName: "Big Kids' vacation Sneaker",
            year: "2025",
            price: "$95",
            image:     "img/JORDAN+MAX+AURA+6+(GS) (2).png",
            variants: [
                "img/JORDAN+MAX+AURA+6+(GS) (1).png",
                "img/JORDAN+MAX+AURA+6+(GS) (2).png",
                "img/JORDAN+MAX+AURA+6+(GS) (3).png", 
                "img/JORDAN+MAX+AURA+6+(GS).png"
          ],
          sizes: ["S", "M", "L", "XL"]
        },
        {
          id: 2,
          name: "Nike Air Max Plus",
          tagName: "Big Kids'",
          year: "2023",
          price: "$120",
          image: "img/AIR+MAX+PLUS+(PS) (1).png",
          variants: [
            "img/AIR+MAX+PLUS+(PS) (1).png",
            "img/AIR+MAX+PLUS+(PS) (2).png",
            "img/AIR+MAX+PLUS+(PS) (3).png", 
            "img/AIR+MAX+PLUS+(PS).png"
          ],
          sizes: ["S", "M", "L", "XL"]
        },   
        {
            id: 3,
            name: "PUMA Scoot Zeros II",
            tagName: "Big Kids' Basketball sneaker",
            year: "2024",
            price: "$90",
            image: "img/Scoot-Zeros-II-2K-Big-Kids'-Basketball-Shoes (2).jpeg",
            variants: [
                "img/Scoot-Zeros-II-2K-Big-Kids'-Basketball-Shoes (1).jpeg",
                "img/Scoot-Zeros-II-2K-Big-Kids'-Basketball-Shoes (3).jpeg",
                "img/Scoot-Zeros-II-2K-Big-Kids'-Basketball-Shoes (2).jpeg",
                "img/Scoot-Zeros-II-2K-Big-Kids'-Basketball-Shoes.jpeg"
            ],
            sizes: ["S", "M", "L", "XL"]
          },
          {
            id: 4,
            name: "Easy Rider Mix",
            tagName: "Big Kids' vacation Sneakers",
            year: "2025",
            price: "$70",
            image: "img/Easy-Rider-Mix-Big-Kids'-Sneakers.jpeg",
            variants: [
                "img/Easy-Rider-Mix-Big-Kids'-Sneakers (1).jpeg",
                "img/Easy-Rider-Mix-Big-Kids'-Sneakers (2).jpeg",
                "img/Easy-Rider-Mix-Big-Kids'-Sneakers (3).jpeg", 
                "img/Easy-Rider-Mix-Big-Kids'-Sneakers.jpeg"
            ],
            sizes: ["S", "M", "L", "XL"]
          },   
          {
            id: 5,
            name: "NB 9060",
            tagName: "Toddler Sneaker",
            year: "2023",
            price: "$79",
            image: "img/90600.webp",
            variants: [      
                "img/9060 (2).webp",
                "img/9060 (3).webp",
                "img/9060.webp"
           
            ],
            sizes: ["S", "M", "L", "XL"]
          },   
          {
            id: 6,
            name: "Reebok Club C Crib",
            tagName: "kids sneaker",
            year: "2023",
            price: "$40",
            image: "img/Unisex Club C Crib Shoes - Infant.png",
            variants: [            
               "img/Unisex Club C Crib Shoes - Infant (3).png", 
                "img/Unisex Club C Crib Shoes - Infant (4).png",
                "img/Unisex Club C Crib Shoes - Infant (2).png",
                "img/Unisex Club C Crib Shoes - Infant.png"
            ],
            sizes: ["S", "M", "L", "XL"]
          },
          {
            id: 7,
            name: "Reebok Toddler Shoe",
            tagName: "Unisex Kids Sneakers",
            year: "2023",
            price: "$45",
            image: "img/Unisex Classic Leather Shoes - Toddler.png",
            variants: [
              "img/Unisex Classic Leather Shoes - Toddler (2).png",
              "img/Unisex Classic Leather Shoes - Toddler (3).png",
              "img/Unisex Classic Leather Shoes - Toddler (4).png",
              "img/Unisex Classic Leather Shoes - Toddler.png" 
            ],
            sizes: ["S", "M", "L", "XL"]
          },
          {
            id: 8,
            name: "Reebok x Blippi",
            tagName: "Unisex  Toddlers Sneaker",
            year: "2023",
            price: "$55",
            image: "img/Unisex Reebok x Blippi Zig 'N' Glow Elastic Lace Shoes - Toddler.png",
            variants: [
              "img/Unisex Reebok x Blippi Zig 'N' Glow Elastic Lace Shoes - Toddler (2).png",
              "img/Unisex Reebok x Blippi Zig 'N' Glow Elastic Lace Shoes - Toddler (3).png",
              "img/Unisex Reebok x Blippi Zig 'N' Glow Elastic Lace Shoes - Toddler (4).png",
              "img/Unisex Reebok x Blippi Zig 'N' Glow Elastic Lace Shoes - Toddler.png"
            ],
            sizes: ["S", "M", "L", "XL"]
          },
          {
              id: 9,
              name: "Reebok Zig Dynamica",
              tagName: "Unisex Kids vacation Sneakers",
              year: "2024",
              price: "$60",
              image: "img/Unisex Reebok x Sonic Zig Dynamica 2.0 Shoes - Grade School.png",
              variants: [
                  "img/Unisex Reebok x Sonic Zig Dynamica 2.0 Shoes - Grade School.png",
                  "img/Unisex Reebok x Sonic Zig Dynamica 2.0 Shoes - Grade School (2).png",
                  "img/Unisex Reebok x Sonic Zig Dynamica 2.0 Shoes - Grade School (3).png"
              ],
              sizes: ["S", "M", "L", "XL"]
            },
            {
              id: 10,
              name: "Classic Step N Flash",
              tagName: " Kids Leather shoe",
              year: "2024",
              price: "$45",
              image: "img/Unisex Classic Leather Step N Flash Shoes - Toddler.png",
              variants: [
                  "img/Unisex Classic Leather Step N Flash Shoes - Toddler (2).png",
                  "img/Unisex Classic Leather Step N Flash Shoes - Toddler (3).png",
                  "img/Unisex Classic Leather Step N Flash Shoes - Toddler (4).png",
                  "img/Unisex Classic Leather Step N Flash Shoes - Toddler.png"
              ],
              sizes: ["S", "M", "L", "XL"]
            },
            {
              id: 11,
              name: "Unisex Club C Crib",
              tagName: "Kids' Sneakers",
              year: "2023",
              price: "$40",
              image: "img/Unisex Club C Crib Shoes - Infant.png",
              variants: [
                 "img/Unisex Club C Crib Shoes - Infant (2).png",
                  "img/Unisex Club C Crib Shoes - Infant (3).png",
                  "img/Unisex Club C Crib Shoes - Infant (4).png",
                  "img/Unisex Club C Crib Shoes - Infant.png"
              ],
              sizes: ["S", "M", "L", "XL"]
            },
            {
              id: 12,
              name: "Reebok Royal Classics",
              tagName: "Kids Sneaker",
              year: "2023",
              price: "$30",
              image: "img/Reebok Royal Classics Jog 2.0 KC Shoes - Infant.png",
              variants: [
                  "img/Reebok Royal Classics Jog 2.0 KC Shoes - Infant (3).png",
                  "img/Reebok Royal Classics Jog 2.0 KC Shoes - Infant (2).png",
                  "img/Reebok Royal Classics Jog 2.0 KC Shoes - Infant (4).png",
                  "img/Reebok Royal Classics Jog 2.0 KC Shoes - Infant.png"
              ],
              sizes: ["S", "M", "L", "XL"]
            },
            {
              id: 13,
              name: "Elastic Step N Flash",
              tagName: "Toddlers' Sneaker",
              year: "2023",
              price: "$35",
              image: "img/Unisex Classic Step 'N' Flash Elastic Lace Shoes - Toddler.png",
              variants: [
                  "img/Unisex Classic Step 'N' Flash Elastic Lace Shoes - Toddler (2).png",
                  "img/Unisex Classic Step 'N' Flash Elastic Lace Shoes - Toddler (4).png",
                  "img/Unisex Classic Step 'N' Flash Elastic Lace Shoes - Toddler (3).png",
                  "img/Unisex Classic Step 'N' Flash Elastic Lace Shoes - Toddler.png"
              ],
              sizes: ["S", "M", "L", "XL"]
            },
            {
              id: 14,
              name: "Classic Nylon Shoes",
              tagName: "Preschool Reebok",
              year: "2023",
              price: "$30",
              image: "img/Classic Nylon Shoes - Preschool.png",
              variants: [
                  "img/Classic Nylon Shoes - Preschool (2).png",
                  "img/Classic Nylon Shoes - Preschool (3).png",
                  "img/Classic Nylon Shoes - Preschool (4).png",
                  "img/Classic Nylon Shoes - Preschool.png"
              ],
              sizes: ["S", "M", "L", "XL"]
            },
            {
              id: 15,
              name: "Sonic Zig 'N' Glow",
              tagName: "Unisex kids Elastic Lace Sneaker",
              year: "2023",
              price: "$65",
              image: "img/Unisex Reebok x Sonic Zig 'N' Glow Elastic Lace Shoes - Preschool.png",
              variants: [
                  "img/Unisex Reebok x Sonic Zig 'N' Glow Elastic Lace Shoes - Preschool (5).png",
                  "img/Unisex Reebok x Sonic Zig 'N' Glow Elastic Lace Shoes - Preschool (3).png",
                  "img/Unisex Reebok x Sonic Zig 'N' Glow Elastic Lace Shoes - Preschool (4).png",
                  "img/Unisex Reebok x Sonic Zig 'N' Glow Elastic Lace Shoes - Preschool (2).png",
                  "img/Unisex Reebok x Sonic Zig 'N' Glow Elastic Lace Shoes - Preschool.png"
              ],
              sizes: ["S", "M", "L", "XL"]
            },
    ];

    const KidsBoots = [
        {
            id: 7,
            name: "Runner Tatic ",
            tagName: "lifestyle Sneaker",
            year: "2023",
            price: "$105",
            image: "img/AIR+JORDAN+3+RETRO.jpg",
            variants: [
                "img/AIR+JORDAN+3+RETRO.jpg",
                "img/AIR+JORDAN+3+RETRO.jpg",
                "img/AIR+JORDAN+3+RETRO.jpg"
            ],
            sizes: ["S", "M", "L", "XL"]
          },
          {
            id: 8,
            name: "Runner Tatic ",
            tagName: "lifestyle Sneaker",
            year: "2023",
            price: "$105",
            image: "img/AIR+JORDAN+3+RETRO.jpg",
            variants: [
                "img/AIR+JORDAN+3+RETRO.jpg",
                "img/AIR+JORDAN+3+RETRO.jpg",
                "img/AIR+JORDAN+3+RETRO.jpg"
            ],
            sizes: ["S", "M", "L", "XL"]
          },
          {
            id: 9,
            name: "Runner Tatic ",
            tagName: "lifestyle Sneaker",
            year: "2023",
            price: "$105",
            image: "img/AIR+JORDAN+3+RETRO.jpg",
            variants: [
                "img/AIR+JORDAN+3+RETRO.jpg",
                "img/AIR+JORDAN+3+RETRO.jpg",
                "img/AIR+JORDAN+3+RETRO.jpg"
            ],
            sizes: ["S", "M", "L", "XL"]
          },
          {
            id: 10,
            name: "Runner Tatic ",
            tagName: "lifestyle Sneaker",
            year: "2023",
            price: "$105",
            image: "img/AIR+JORDAN+3+RETRO.jpg",
            variants: [
                "img/AIR+JORDAN+3+RETRO.jpg",
                "img/AIR+JORDAN+3+RETRO.jpg",
                "img/AIR+JORDAN+3+RETRO.jpg"
            ],
            sizes: ["S", "M", "L", "XL"]
          },
          {        
            id:11,
            name: "Runner Tatic ",
            tagName: "lifestyle Sneaker",
            year: "2023",
            price: "$105",
            image: "img/AIR+JORDAN+3+RETRO.jpg",
            variants: [
                "img/AIR+JORDAN+3+RETRO.jpg",
                "img/AIR+JORDAN+3+RETRO.jpg",
                "img/AIR+JORDAN+3+RETRO.jpg"
            ],
            sizes: ["S", "M", "L", "XL"]
          },
          {
              id: 12,
              name: "Runner Tatic ",
              tagName: "lifestyle Sneaker",
              year: "2023",
              price: "$105",
              image: "img/AIR+JORDAN+3+RETRO.jpg",
              variants: [
                  "img/AIR+JORDAN+3+RETRO.jpg",
                  "img/AIR+JORDAN+3+RETRO.jpg",
                  "img/AIR+JORDAN+3+RETRO.jpg"
              ],
              sizes: ["S", "M", "L", "XL"]
            },
      ];
      

     //?   Function to generate product card HTML
   function createProductCard(product) {
    return `
      <div class="kids-trending-column-details">
        <i class="bi bi-heart"></i>
         <div class="kids-trending-card-details">
          <img src="${product.image}" alt="${product.name}">
           <div class="kids-trending-details">
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
        <div class="kids-variants">
          ${product.variants.map(variant => `<img src="${variant}" alt="${product.name}">`).join('')}
        </div>
        <div class="kids-headline">
          <h2>Sizes</h2>
        </div>
        <div class="sizes">
          ${product.sizes.map(size => `<span>${size}</span>`).join('')}
        </div>
      </div>
    `;
  };
     


   //?   Function to generate product card HTML
   function createProductCard(product) {
    return `
      <div class="kids-boots-column-details">
        <i class="bi bi-heart"></i>
         <div class="kids-boots-card-details">
          <img src="${product.image}" alt="${product.name}">
           <div class="kids-boots-details">
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
        <div class="kids-variants">
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
  

      

   //? Function to render all product cards
   const RenderAllProducts = () => {
    const productContainer = document.getElementById('kids-sneaker');
    productContainer.innerHTML = kidSneakers.map(product => createProductCard(product)).join('');

    const KidsproductContainer = document.getElementById('kids-boots');
    KidsproductContainer.innerHTML = KidsBoots.map(product => createProductCard(product)).join('');
    attachWishlistListeners();
    attachVariantListeners();
  }

  //? Render products on page load
  RenderAllProducts();

