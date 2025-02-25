//? Product data



const products = [
    {
      id: 1,
      name: "Reebok x Sonic Club",
      tagName: "Men's Sneaker",
      year: "2025",
      price: "$100",
      image: "img/Reebok x Sonic Club C Revenge Shoes (2).png",
      variants: [
        "img/Reebok x Sonic Club C Revenge Shoes (2).png",
        "img/Reebok x Sonic Club C Revenge Shoes (3).png",
        "img/Reebok x Sonic Club C Revenge Shoes (5).png",
        "img/Reebok x Sonic Club C Revenge Shoes (4).png"
      ],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 2,
      name: "Puma OG Speedcat",
      tagName: "Unisex Sneaker",
      year: "2024",
      price: "$90",
      image: "img/Speedcat-OG-Sneakers-Unisex (1).jpeg",
      variants: [
        "img/Speedcat-OG-Sneakers-Unisex (5).jpeg",
        "img/Speedcat-OG-Sneakers-Unisex (3).jpeg",
        "img/Speedcat-OG-Sneakers-Unisex (4).jpeg",
        "img/Speedcat-OG-Sneakers-Unisex.jpeg"
      ],
      sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 3,
        name: "LV x TM LV",
        tagName: "Trainer Sneaker",
        year: "2023",
        price: "$120",
        image:  "img/louis-vuitton-lv-x-tm-lv-trainer-sneaker-shoes--BSUPNRTM01_PM1_Side view (1).png",
        variants: [
            "img/louis-vuitton-lv-x-tm-lv-trainer-sneaker-shoes--BSUPNRTM01_PM1_Back view (1).png",
            "img/louis-vuitton-lv-x-tm-lv-trainer-sneaker-shoes--BSUPNRTM01_PM2_Front view.png",
            "img/louis-vuitton-lv-x-tm-lv-trainer-sneaker-shoes--BSUPNRTM01_PM1_Interior view (1).png"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 4,
        name: "Purple LV Trainer Sneaker",
        tagName: "Men's Sneaker",
        year: "2024",
        price: "$105",
        image: "img/louis-vuitton-lv-trainer-sneaker-shoes--BS9U3PSR17_PM1_Side view.png",
        variants: [
            "img/louis-vuitton-lv-trainer-sneaker-shoes--BS9U3PSR17_PM1_Other view.png",
            "img/louis-vuitton-lv-trainer-sneaker-shoes--BS9U3PSR17_PM1_Side view.png",
            "img/louis-vuitton-lv-trainer-sneaker-shoes--BS9U3PSR17_PM2_Front view.png",
            "img/louis-vuitton-lv-trainer-sneaker-shoes--BS9U3PSR17_PM1_Interior view.png"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 5,
        name: "Reebok Nano Court",
        tagName: "Unisex Sport Shoes",
        year: "2023",
        price: "$120",
        image: "img/Nano Court Shoes.png",
        variants: [
          "img/Nano Court Shoes (2).png",
          "img/Nano Court Shoes (3).png",
          "img/Nano Court Shoes (4).png",
          "img/Nano Court Shoes.png",
        ],
        sizes: ["S", "M", "L", "XL"]
      },        
      {
        id: 6,
        name: "NB Tektrel",
        tagName: "Men Lifestyle Sneaker",
        year: "2023",
        price: "$109",
        image: "img/Tektrel (4).webp",
        variants: [
          "img/Tektrel (1).webp",
          "img/Tektrel (3).webp",
          "img/Tektrel (4).webp",
          "img/Tektrel (2).webp",

        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 7,
        name: "Reebok Nano 2.0",
        tagName: "Men's Training Shoes",
        year: "2023",
        price: "$120",
        image: "img/Men's Nano 2.0 Training Shoes (2).png",
        variants: [
              "img/Men's Nano 2.0 Training Shoes (3).png",
              "img/Men's Nano 2.0 Training Shoes (4).png",
              "img/Men's Nano 2.0 Training Shoes (5).png",
              "img/Men's Nano 2.0 Training Shoes (2).png"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {        
        id: 8,
        name: "LV Runner Tatic Sneaker",
        tagName: "Men's Sneaker",
        year: "2025",
        price: "$107",
        image: "img/louis-vuitton-lv-runner-tatic-sneaker-shoes--BSIU2PMI20_PM2_Front view.png",
        variants: [
          "img/louis-vuitton-lv-runner-tatic-sneaker-shoes--BSIU2PMI20_PM1_Interior view.png",
          "img/louis-vuitton-lv-runner-tatic-sneaker-shoes--BSIU2PMI20_PM2_Front view (1).png",
          "img/louis-vuitton-lv-runner-tatic-sneaker-shoes--BSIU2PMI20_PM1_Side view.png"
        ],
        sizes: ["S", "M", "L", "XL"]
      },        
      {
          id: 9,
          name: "NB 740",
          tagName: "Unisex Sneaker",
          year: "2024",
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
          id: 10,
          name: "Puma Drift-Cat Scuderia",
          tagName: "Women Sneakers",
          year: "2024",
          price: "$80",
          image: "img/scuderia ferrarri.PNG",
          variants: [
              "img/scuderia 3.PNG",
               "img/scuderia ferrari 2.PNG",
               "img/scuderia ferrarri.PNG"
          ],
          sizes: ["S", "M", "L", "XL"]
        },
        {
          id: 11,
          name: "NB 2002R GORE-TEX®",
          tagName: "Unisex Sneaker",
          year: "2024",
          price: "$50",
          image: "img/u1906ab_nb_03_i.webp",
          variants: [
              "img/u1906ab_nb_03_i.webp",
               "img/u1906ab_nb_05_i.webp",
               "img/u1906ab_nb_07_i.webp",
               "img/m2002rxw_nb_02_i.webp" 
          ],
          sizes: ["S", "M", "L", "XL"]
        },  
        {
          id: 12,
          name: "LV Rider Boot",
          tagName: "men's boot",
          year: "2024",
          price: "$90",
          image: "img/rider boot.jpeg",
          variants: [
              "img/rider boot.png",
              "img/rider boot.jpeg"
          ],
          sizes: ["S", "M", "L", "XL"]
        },
        {
            id: 13,
            name: "LV Boot",
            tagName: "mens' boot",
            year: "2023",
            price: "$50",
            image: "img/louis-BQHQ1XNU31_PM1_Interior view.png",
            variants: [
              "img/louis-BQHQ1XNU31_PM1_Side view (1).png",
               "img/louis-BQHQ1XNU31_PM1_Side view (2).png",
               "img/louis-BQHQ1XNU31_PM1_Interior view.png"
            ],
            sizes: ["S", "M", "L", "XL"]
          },
          {
            id: 14,
            name: "PUMA Caven",
            tagName: "Caven 2.0 Sneakers",
            year: "2023",
            price: "$59",
            image: "img/caven 2.PNG",
            variants: [
              "img/caven 4.PNG",
               "img/caven 5.PNG",
               "img/caven.PNG",
               "img/caven 2.PNG"
            ],
            sizes: ["S", "M", "L", "XL"]
          },
          {
              id: 15,
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
              id: 16,
              name: "LV Beverly Hills Sneaker",
              tagName: "vacation sneaker",
              year: "2024",
              price: "$90",
              image: "img/louis-vuitton-beverly-hills-sneaker-shoes--BSDU1PWC30_PM2_Front view.png",
              variants: [
                 "img/louis-vuitton-beverly-hills-sneaker-shoes--BSDU1PWC22_PM2_Front view.png",
                  "img/louis-vuitton-beverly-hills-sneaker-shoes--BSDU1PWC30_PM1_Back view.png",
                  "img/louis-vuitton-beverly-hills-sneaker-shoes--BSDU1PWC30_PM1_Interior view.png",
                  "img/louis-vuitton-beverly-hills-sneaker-shoes--BSDU1PWC30_PM2_Front view.png"
              ],
              sizes: ["S", "M", "L", "XL"]
            },
            {
              id: 17,
              name: "LV Footprint Racing",
              tagName: "Men Sneakers",
              year: "2024",
              price: "$110",
              image: "img/louis-vuitton-lv-footprint-racing-high-top-sneaker-shoes--BSUPMJPC45_PM2_Front view.png",
              variants: [      
                "img/louis-vuitton-lv-footprint-racing-high-top-sneaker-shoes--BSUPMJPC10_PM1_Side view.png",
                "img/louis-vuitton-lv-footprint-racing-high-top-sneaker-shoes--BSUPMJPC10_PM2_Front view.png",
                "img/louis-vuitton-lv-footprint-racing-high-top-sneaker-shoes--BSUPMJPC45_PM2_Front view (1).png",
                "img/louis-vuitton-lv-footprint-racing-high-top-sneaker-shoes--BSUPMJPC45_PM1_Interior view.png"
              ],
              sizes: ["S", "M", "L", "XL"]
            },
            {
              id: 18,
              name: "LV Checker Ranger Boot",
              tagName: "Men Ankle Boot",
              year: "2023",
              price: "$105",
              image: "img/louis-vuitton-lv-boot-ranger-shoes (2).png",
              variants: [
                  "img/louis-vuitton-lv-boot-ranger-shoes (2).png",
                  "img/louis-vuitton-lv-boot-ranger-shoes (1).png",
                  "img/Interior view.png"  
              ],
              sizes: ["S", "M", "L", "XL"]
            },
            {
              id: 19,
              name: "Puma RS-X Efekt PRM",
              tagName: "Men Sneakers",
              year: "2023",
              price: "$100",
              image: "img/RS-X-Efekt-PRM-Sneakers.jpeg",
              variants: [
                  "img/RS-X-Efekt-PRM-Sneakers (1).jpeg",
                  "img/RS-X-Efekt-PRM-Sneakers (2).jpeg",
                  "img/RS-X-Efekt-PRM-Sneakers (3).jpeg",
                  "img/RS-X-Efekt-PRM-Sneakers (4).jpeg",
                  "img/RS-X-Efekt-PRM-Sneakers.jpeg"  
              ],
              sizes: ["S", "M", "L", "XL"]
            },
            {
              id: 20,
              name: "LV Checker Ranger Boot",
              tagName: "Men Ankle Boot",
              year: "2023",
              price: "$105",
              image: "img/louis-vuitton-lv-boot-ranger-shoes (2).png",
              variants: [
                  "img/louis-vuitton-lv-boot-ranger-shoes (2).png",
                  "img/louis-vuitton-lv-boot-ranger-shoes (1).png",
                  "img/Interior view.png"  
              ],
              sizes: ["S", "M", "L", "XL"]
            },
            {
              id: 21,
              name: "Nike Ja 2",
              tagName: "Men Sneaker",
              year: "2023",
              price: "$120",
              image: "img/JA+2.png",
              variants: [
                  "img/JA+2 (1).png",
                  "img/JA+2 (2).png",
                  "img/JA+2 (3).png",
                  "img/JA+2.png"  
              ],
              sizes: ["S", "M", "L", "XL"]
            },
  ];
//? Function to update quantity
function updateQuantity(action, quantityId) {
  const quantityDisplay = document.getElementById(quantityId);
  let quantity = parseInt(quantityDisplay.textContent);
  if (action === 'decrement' && quantity > 0) {
    quantity--;
  } else if (action === 'increment'  ) {
    quantity++;
  }
  quantityDisplay.textContent = quantity;
}


//? Function to attach event listeners to wishlist icons
function attachWishlistListeners() {
  const heartIcons = document.querySelectorAll('.bi-heart');
  heartIcons.forEach((icon) => {
    icon.addEventListener('click', handleWishlistClick);
  });
}



//? Function to handle wishlist icon clicks
function handleWishlistClick(event) {
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
  const variantImages = document.querySelectorAll('.MN-variants img');
  variantImages.forEach((image) => {
    image.addEventListener('click', handleVariantClick);
  });
}
// Function to handle variant image clicks
function handleVariantClick(event) {
  const variantImage = event.target.src; // Get the clicked variant's image URL
  const productCard = event.target.closest('.MN-trending-column-details'); // Find the parent product card
  const mainImage = productCard.querySelector('.MN-trending-card-details img'); // Find the main product image
  mainImage.src = variantImage; // Update the main product image
}





// Function to generate product card HTML
function createProductCard(product) {
  return `
    <div class="MN-trending-column-details">
      <i class="bi bi-heart"></i>
      <div class="MN-trending-card-details">
        <img src="${product.image}" alt="${product.name}">
        <div class="MN-trending-details">
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
      <div class="MN-variants">
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
}

// Function to render all product cards
function renderProducts() {
  const productContainer = document.getElementById('trending-column');

  productContainer.innerHTML = products.map(product => createProductCard(product)).join('');
  attachWishlistListeners(); // Attach event listeners for wishlist icons
  attachVariantListeners(); // Attach event listeners for variant images
}

// Render products on page load
document.addEventListener('DOMContentLoaded', renderProducts);