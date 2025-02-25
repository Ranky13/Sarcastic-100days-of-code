//? Product data
 const products = [
    {
      id: 1,
      name: "Speedcat-OG",
      description: "Unisex Sneakers",
      year: "2024",
      price: "$90",
      image: "img/Speedcat-OG-Sneakers-Unisex (2).jpeg",
      variants: [
        "img/Speedcat-OG-Sneakers-Unisex (1).jpeg",
        "img/Speedcat-OG-Sneakers-Unisex (3).jpeg",
        "img/Speedcat-OG-Sneakers-Unisex.jpeg",
        "img/Speedcat-OG-Sneakers-Unisex (2).jpeg"
      ],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 2,
      name: "Easy Rider Vintage",
      description: "Unisex Sneakers",
      year: "2025",
      price: "$80",
      image: "img/Easy-Rider-Vintage-Sneakers (1).jpeg",
      variants: [
        "img/Easy-Rider-Vintage-Sneakers (3).jpeg",
        "img/Easy-Rider-Vintage-Sneakers (4).jpeg",
        "img/Easy-Rider-Vintage-Sneakers (1).jpeg",
        "img/Easy-Rider-Vintage-Sneakers.jpeg"
      ],
      sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 3,
        name: "Palermo",
        description: "Unisex Palermo Vintage",
        year: "2024",
        price: "$80",
        image: "img/Palermo-Vintage-Sneakers-Unisex (1).jpeg",
        variants: [
          "img/Palermo-Vintage-Sneakers-Unisex (3).jpeg",
          "img/Palermo-Vintage-Sneakers-Unisex (4).jpeg",
          "img/Palermo-Vintage-Sneakers-Unisex (2).jpeg",
          "img/Palermo-Vintage-Sneakers-Unisex (1).jpeg"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 4,
        name: "RS-X Efekt PRM",
        description: "Men Sneakers",
        year: "2024",
        price: "$100",
        image: "img/RS-X-Efekt-PRM-Sneakers.jpeg",
        variants: [
          "img/RS-X-Efekt-PRM-Sneakers (1).jpeg",
          "img/RS-X-Efekt-PRM-Sneakers (2).jpeg",
          "img/RS-X-Efekt-PRM-Sneakers (3).jpeg",
          "img/RS-X-Efekt-PRM-Sneakers.jpeg"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 5,
        name: "PUMA Caven",
        description: "Caven 2.0 Sneakers",
        year: "2023",
        price: "$50",
        image: "img/caven 2.PNG" ,
        variants: [
        "img/caven 4.PNG",
        "img/caven 5.PNG",
        "img/caven.PNG",
        "img/caven 2.PNG" 
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 6,
        name: "Scuderia",
        description: "Ferrari-Drift-Cat",
        year: "2023",
        price: "$80",
        image: "img/scuderia ferrarri.PNG",
        variants: [
          "img/scuderia 3.PNG",
          "img/scuderia ferrari 2.PNG",
          "img/scuderia ferrarri.PNG",
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 7,
        name: "Suede",
        description: "Unisex Sneakers",
        year: "2025",
        price: "$90",
        image: "img/Suede-XL-Sneakers-Unisex.jpeg" ,
        variants: [
          "img/Suede-XL-Sneakers-Unisex (1).jpeg",
          "img/Suede-XL-Sneakers-Unisex (2).jpeg",
          "img/Suede-XL-Sneakers-Unisex (3).jpeg",
          "img/Suede-XL-Sneakers-Unisex.jpeg" 
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 8,
        name: "Velophasis",
        description: "Unisex Sneakers",
        year: "2023",
        price: "$80",
        image:  "img/Velophasis-Sneakers.jpeg",
        variants: [
          "img/Velophasis-Sneakers (1).jpeg",
          "img/Velophasis-Sneakers (2).jpeg",
          "img/Velophasis-Sneakers (3).jpeg",
         "img/Velophasis-Sneakers.jpeg"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 9,
        name: "GV Special Base",
        description: "Unisex Sneakers",
        year: "2024",
        price: "$90",
        image: "img/GV-Special-Base-Sneakers-Unisex.jpeg",
        variants: [
           "img/GV-Special-Base-Sneakers-Unisex (1).jpeg",
           "img/GV-Special-Base-Sneakers-Unisex (2).jpeg", 
           "img/GV-Special-Base-Sneakers-Unisex (4).jpeg", 
           "img/GV-Special-Base-Sneakers-Unisex.jpeg"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 10,
        name: "Arizona Nylon",
        description: "Unisex Sneakers",
        year: "2023",
        price: "$85",
        image:  "img/Arizona-Nylon-Sneakers.jpeg" ,
        variants: [
          "img/Arizona-Nylon-Sneakers (1).jpeg",
            "img/Arizona-Nylon-Sneakers (2).jpeg",
            "img/Arizona-Nylon-Sneakers (3).jpeg", 
            "img/Arizona-Nylon-Sneakers.jpeg" 
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 11,
        name: "ScudNitro Goreeria",
        description: "Women Hiking Shoe",
        year: "2023",
        price: "$110",
        image: "img/Explore-NITRO-Mid-GORE-TEX-Hiking-Shoes-Women.jpeg",
        variants: [
          "img/Explore-NITRO-Mid-GORE-TEX-Hiking-Shoes-Women (1).jpeg",
          "img/Explore-NITRO-Mid-GORE-TEX-Hiking-Shoes-Women.jpeg",
          "img/Explore-NITRO-Mid-GORE-TEX-Hiking-Shoes-Women (3).jpeg",
          "img/Explore-NITRO-Mid-GORE-TEX-Hiking-Shoes-Women (2).jpeg" 
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 12,
        name: "Voyage NITRO™",
        description: "Women Running Shoe",
        year: "2022",
        price: "$130",
        image: "img/Voyage-NITRO™-3-Disc-Trail-Running-Shoes-Women.jpeg" ,
        variants: [
          "img/Voyage-NITRO™-3-Disc-Trail-Running-Shoes-Women (1).jpeg",
         "img/Voyage-NITRO™-3-Disc-Trail-Running-Shoes-Women (2).jpeg",
          "img/Voyage-NITRO™-3-Disc-Trail-Running-Shoes-Women (3).jpeg",
          "img/Voyage-NITRO™-3-Disc-Trail-Running-Shoes-Women.jpeg" 
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {

        id: 13,
        name: "Fast-Trac NITRO",
        description: "Women Running shoe",
        year: "2023",
        price: "$80",
        image:  "img/Fast-Trac-NITRO™-3-Trail-Running-Shoes-Women.jpeg",
        variants: [
            "img/Fast-Trac-NITRO™-3-Trail-Running-Shoes-Women (1).jpeg",
            "img/Fast-Trac-NITRO™-3-Trail-Running-Shoes-Women (2).jpeg",
            "img/Fast-Trac-NITRO™-3-Trail-Running-Shoes-Women (3).jpeg",
            "img/Fast-Trac-NITRO™-3-Trail-Running-Shoes-Women.jpeg",
        ],
        sizes: ["S", "M", "L", "XL"]
      },
    {
        id: 15,
        name: "FUTURE 8 ULTIMATE",
        description: "AG Football Women Boot",
        year: "2022",
        price: "$100",
        image:  "img/FUTURE-8-ULTIMATE-FG-Football-Boots.jpeg",
        variants: [
          "img/FUTURE-8-ULTIMATE-FG-Football-Boots (1).jpeg",
          "img/FUTURE-8-ULTIMATE-FG-Football-Boots (2).jpeg",
          "img/FUTURE-8-ULTIMATE-FG-Football-Boots (3).jpeg",
          "img/FUTURE-8-ULTIMATE-FG-Football-Boots.jpeg"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
       {
        id: 16,
        name: "PUMA x SQUID GAME",
        description: "Men Sneaker",
        year: "2022",
        price: "$100",
        image: "img/PUMA-x-SQUID-GAME-Easy-Rider-Men's-Sneakers (1).jpeg",
        variants: [
          "img/PUMA-x-SQUID-GAME-Easy-Rider-Men's-Sneakers.jpeg",
          "img/PUMA-x-SQUID-GAME-Easy-Rider-Men's-Sneakers (3).jpeg",
          "img/PUMA-x-SQUID-GAME-Easy-Rider-Men's-Sneakers (2).jpeg",
          "img/PUMA-x-SQUID-GAME-Easy-Rider-Men's-Sneakers (1).jpeg"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
       {
        id: 17,
        name: "Voltaic Evo Fast",
        description: "AG Football Women BootShoes",
        year: "2022",
        price: "$80",
        image: "img/Voltaic-Evo-Fast-Men's-Training-Shoes (3).jpeg",
        variants: [
          "img/Voltaic-Evo-Fast-Men's-Training-Shoes.jpeg",
          "img/Voltaic-Evo-Fast-Men's-Training-Shoes (1).jpeg",
          "img/Voltaic-Evo-Fast-Men's-Training-Shoes (3).jpeg",
          "img/Voltaic-Evo-Fast-Men's-Training-Shoes (4).jpeg",
          "img/Voltaic-Evo-Fast-Men's-Training-Shoes (2).jpeg"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
  ];

//?Quantity scripts
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

//? Wish List Script------------------------------------------------------------------------
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

if (icon.classList.contains(`bi-heart-fill`)) {
  alert(`Added to Wishlist`);
}else {
  alert(`Removed From Wishlist`);
}
}


//? Variants Scripts---------------------------------------------------------------------
const attachVariantListeners = () => {
  const variantImages = document.querySelectorAll(`.Puma-variants`);
  variantImages.forEach((image) => {
    image.addEventListener(`click`, handleVariantClick);
  });
}
const handleVariantClick = (event) => {
  const variantImage = event.target.src;
  const productCard = event.target.closest(`.Puma-trending-column-details`);
  const mainImage = productCard.querySelector(`.Puma-trending-card-details img`);
    mainImage.src = variantImage;
}

  
   // Function to generate product card HTML
   function createProductCard(product) {
    return `
      <div class="Puma-trending-column-details">
        <i class="bi bi-heart"></i>
        <div class="Puma-trending-card-details">
          <img src="${product.image}" alt="${product.name}">
          <div class="Puma-trending-details">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
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
        <div class="Puma-variants">
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

      

   // Function to render all product cards
   function renderProducts() {
    const productContainer = document.getElementById('puma');
    productContainer.innerHTML = products.map(product => createProductCard(product)).join('');
    attachWishlistListeners();
    attachVariantListeners();
  }





  // Render products on page load
  renderProducts();
