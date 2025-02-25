       
//? Product data
const products = [
    {
      id: 1,
      name: "NEW BALANCE 1906A",
      tagName: "Unisex Sneaker",
      year: "2023",
      price: "$165",
      image: "img/u1906ab_nb_02_i.webp",
      variants: [
        "img/u1906ab_nb_03_i.webp",
        "img/u1906ab_nb_05_i.webp",
        "img/u1906ab_nb_07_i.webp",
        "img/u1906ab_nb_02_i.webp"
      ],
      sizes: ["S", "M", "L", "XL"]
    },

    {
      id: 2,
      name: "2002R GORE-TEX®",
      tagName: "Unisex Vintage Indigo sneaker",
      year: "2024",
      price: "$70",
      image: "img/m2002rxw_nb_02_i.webp",
      variants: [
        "img/m2002rxw_nb_04_i.webp",
        "img/m2002rxw_nb_05_i.webp",
        "img/m2002rxw_nb_03_i.webp",
        "img/m2002rxw_nb_02_i.webp"
      ],
      sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 3,
        name: "NB 740",
        tagName: "Unisex Sneaker",
        year: "2023",
        price: "$150",
        image:  "img/u740wm2_nb_02_i.webp",
        variants: [
            "img/u740fr2_nb_04_i.jpeg",
            "img/u740lb2_nb_05_i.webp",
            "img/u740pb2_nb_05_i.webp",
            "img/u740wm2_nb_02_i.webp"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 4,
        name: "GANNI x New Balance",
        tagName: "Unisex Sneaker",
        year: "2024",
        price: "$153",
        image: "img/utrngn_nb_02_i.webp",
        variants: [
            "img/utrngn_nb_02_i.webp",
            "img/utrngn_nb_04_i.webp",
            "img/utrngn_nb_05_i.webp",
            "img/utrngn_nb_03_i.webp"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 5,
        name: "Kid 9060",
        tagName: "Toddlers & Babies Sneaker",
        year: "2023",
        price: "$79",
        image: "img/90600.webp",
        variants: [
            "img/9060 (3).webp",
            "img/9060 (2).webp",
            "img/9060.webp",
            "img/90600.webp"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
 
      {
        id: 6,
        name: "Fresh Foam 680v8",
        tagName: "Women Sneaker",
        year: "2023",
        price: "$79.9",
        image: "img/Fresh Foam 680v8.webp",
        variants: [
            "img/Fresh Foam 680v8 (2).webp",
            "img/Fresh Foam 680v8 (3).webp",
            "img/Fresh Foam 680v8 (4).webp",
            "img/Fresh Foam 680v8.webp"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 7,
        name: " NB 475",
        tagName: "Unisex Sneakers",
        year: "2023",
        price: "$109",
        image: "img/475 (1).webp",
        variants: [
            "img/475 (3).webp",
            "img/475 (2).webp",
            "img/475 (4).webp",
            "img/475 (1).webp"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {        
        id: 8,
        name: "8Five2 x Numeric 480",
        tagName: "Men Lifestyle Sneaker",
        year: "2023",
        price: "$109",
        image: "img/8Five2 x NB Numeric 480 (2).webp",
        variants: [
            "img/8Five2 x NB Numeric 480 (2).webp",
            "img/8Five2 x NB Numeric 480 (3).webp",
            "img/8Five2 x NB Numeric 480 (4).webp",
            "img/8Five2 x NB Numeric 480 (1).webp"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
          id: 9,
          name: "NB Tektrel",
          tagName: "Men lifestyle Sneaker",
          year: "2024",
          price: "$110",
          image:"img/Tektrel (1).webp",
          variants: [
            "img/Tektrel (1).webp",
            "img/Tektrel (3).webp",
            "img/Tektrel (4).webp",
            "img/Tektrel (2).webp"
          ],
          sizes: ["S", "M", "L", "XL"]
        },
        {
          id: 10,
          name: "Arishi v4 Tiralux",
          tagName: "Men Sneakers",
          year: "2024",
          price: "$74",
          image: "img/Fresh Foam Arishi v4 Tiralux (1).webp",
          variants: [
            "img/Fresh Foam Arishi v4 Tiralux (3).webp",
            "img/Fresh Foam Arishi v4 Tiralux (1).webp",
            "img/Fresh Foam Arishi v4 Tiralux (4).webp"
          ],
          sizes: ["S", "M", "L", "XL"]
        },
        {
          id: 11,
          name: "New Balance T500",
          tagName: " Unisex Sneakers",
          year: "2024",
          price: "$109",
          image: "img/T500 (1).webp",
          variants: [
            "img/T500 (4).webp",
            "img/T500 (3).webp",
            "img/T500 (2).webp",
            "img/T500 (1).webp" 
          ],
          sizes: ["S", "M", "L", "XL"]
        },  
        {
          id: 12,
          name: "FuelCell SuperComp",
          tagName: "Men Trainer Sneaker",
          year: "2024",
          price: "$179",
          image:  "img/FuelCell SuperComp Trainer v3 (1).webp",
          variants: [
            "img/FuelCell SuperComp Trainer v3 (2).webp",
            "img/FuelCell SuperComp Trainer v3 (3).webp",
            "img/FuelCell SuperComp Trainer v3 (4).webp",
            "img/FuelCell SuperComp Trainer v3 (1).webp"
          ],
          sizes: ["S", "M", "L", "XL"]
        },
        {
          id: 13,
          name: "FuelCell Compv4 Boot",
          tagName: "Sport Boot",
          year: "2023",
          price: "$149",
          image: "img/FuelCell Compv4 (1).webp",
          variants: [
            "img/FuelCell Compv4 (2).webp",
            "img/FuelCell Compv4 (3).webp",
            "img/FuelCell Compv4 (4).webp",
            "img/FuelCell Compv4 (1).webp"
          ],
          sizes: ["S", "M", "L", "XL"]
        },
        {
          id: 14,
          name: "NEW-B HOOK & LOOP",
          tagName: "kid's sneaker",
          year: "2023",
          price: "$59.9",
          image: "img/574 NEW-B HOOK & LOOP (1).webp",
          variants: [
            "img/574 NEW-B HOOK & LOOP (1).webp",
            "img/574 NEW-B HOOK & LOOP (2).webp",
            "img/574 NEW-B HOOK & LOOP (3).webp",
            "img/574 NEW-B HOOK & LOOP (4).webp"
          ],
          sizes: ["S", "M", "L", "XL"]
        },
        {
            id: 15,
            name: "FuelCell SuperComp Trail",
            tagName: "Women's Sneaker",
            year: "2024",
            price: "$199.9",
            image: "img/FuelCell SuperComp Trail (1).webp",
            variants: [
            "img/FuelCell SuperComp Trail (1).webp",
            "img/FuelCell SuperComp Trail (2).webp",
            "img/FuelCell SuperComp Trail (3).webp",
            "img/FuelCell SuperComp Trail (4).webp"
            ],
            sizes: ["S", "M", "L", "XL"]
          },
  ];





  function updateQuantity(action, quantityId) {
    const quantityDisplay = document.getElementById(quantityId);
    let quantity = parseInt(quantityDisplay.textContent);
    if(action === `decrement` && quantity > 0){
      quantity--;
    }else if (action === `increment`){
      quantity++;
    }
    quantityDisplay.textContent = quantity;
  }
  
//? WishList Scripts----------------------------------------------------------------------------------------------------------

// Function to attach event listeners to wishlist icons
const attachWishlistListeners = () => {
  const heartIcons = document.querySelectorAll('.bi-heart');
  heartIcons.forEach((icon) => {
    icon.addEventListener('click', handleWishlistClick);
  });
}


// Function to handle wishlist icon clicks
const handleWishlistClick = (event) => {
  const icon = event.target;
  icon.classList.toggle('bi-heart-fill');
  icon.classList.toggle('bi-heart');

  if (icon.classList.contains('bi-heart-fill')) {
    alert('Added to wishlist');
  } else {
    alert('Removed from wishlist');
  }
}



// Function to attach event listeners to variant images
function attachVariantListeners() {
  const variantImages = document.querySelectorAll('.NB-variants img');
  variantImages.forEach((image) => {
    image.addEventListener('click', handleVariantClick);
  });
}



// Function to handle variant image clicks
function handleVariantClick(event) {
  const variantImage = event.target.src; // Get the clicked variant's image URL
  const productCard = event.target.closest('.NB-trending-column-details'); // Find the parent product card
  const mainImage = productCard.querySelector('.NB-trending-card-details img'); // Find the main product image
  mainImage.src = variantImage; // Update the main product image
}







    // Function to generate product card HTML
   function createProductCard(product) {
    return `
      <div class="NB-trending-column-details">
        <i class="bi bi-heart"></i>
         <div class="NB-trending-card-details">
          <img src="${product.image}" alt="${product.name}">
           <div class="NB-trending-details">
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
        <div class="NB-variants">
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
   const renderProducts = () => {
    const productContainer = document.getElementById('NB-trending-column');
    productContainer.innerHTML = products.map(product => createProductCard(product)).join('');
    attachWishlistListeners();
    attachVariantListeners();
  }


  // Render products on page load
  renderProducts();








