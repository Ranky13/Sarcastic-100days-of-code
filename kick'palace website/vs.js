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



//? Wish List Scripts
const heartIcons = document.querySelectorAll(`.bi bi-heart`);

heartIcons.forEach((icon) => {
    icon.addEventListener(`click`, () => {
        icon.classList.toggle(`bi bi-heart-fill`);
        icon.classList.toggle(`bi bi-heart`);

        if (icon.classList.contains(`bi bi-heart-fill`)){
            alert(`added to wishlisst`);
        }else{
            alert(`removed from wishlist`);
        }
    });
    });


//? Product data
const Menproducts = [
    {
      id: 1,
      name: "Reebok x Sonic Club",
      tagName: "Unisex vacation Sneakers",
      year: "2024",
      price: "$100",
      image: "img/Reebok x Sonic Club C Revenge Shoes.png",
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
      name: "LV Trainer Sneaker",
      tagName: "Unisex vacation Sneakers",
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
        id: 3,
        name: "Nike Air Force 1 ’07",
        tagName: "Men's vacation Sneaker",
        year: "2024",
        price: "$130",
        image:  "img/AIR+FORCE+1+'07.png",
        variants: [
         "img/AIR+FORCE+1+'07 (2).png",
         "img/AIR+FORCE+1+'07 (3).png",
         "img/AIR+FORCE+1+'07 (1).png",
         "img/AIR+FORCE+1+'07.png"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 4,
        name: "Puma Suede",
        tagName: "Men vacation Sneakers",
        year: "2024",
        price: "$80",
        image: "img/Suede-XL-Sneakers-Unisex.jpeg",
        variants: [
            "img/Suede-XL-Sneakers-Unisex (1).jpeg",
            "img/Suede-XL-Sneakers-Unisex (2).jpeg",
            "img/Suede-XL-Sneakers-Unisex (3).jpeg",
            "img/Suede-XL-Sneakers-Unisex (4).jpeg",
            "img/Suede-XL-Sneakers-Unisex.jpeg"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 5,
        name: "Puma GV Special Base",
        tagName: "Unisex Vacation Sneakers",
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
        id: 6,
        name: "NB Tektrel",
        tagName: "lifestyle Sneaker",
        year: "2023",
        price: "$109",
        image: "img/Tektrel (4).webp",
        variants: [
            "img/Tektrel (1).webp",
            "img/Tektrel (3).webp",
            "img/Tektrel (4).webp",
            "img/Tektrel (2).webp"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
  ];

  //? Female Product data
const WomenMenproducts = [
    {
      id: 7,
      name: "LV Archlight Sneaker",
      tagName: "Women's vacation Sneakers",
      year: "2024",
      price: "$250",
      image: "img/louis-vuitton-lv-archlight-sneaker-shoes--ASU005TX20_PM1_Side view.png",
      variants: [
        "img/louis-vuitton-lv-archlight-sneaker-shoes--ASU005TX20_PM1_Interior view.png",
        "img/louis-vuitton-lv-archlight-sneaker-shoes--ASU005TX20_PM1_Side view.png",
        "img/louis-vuitton-lv-archlight-sneaker-shoes--ASU005TX20_PM1_Back view.png",
        "img/louis-vuitton-lv-archlight-sneaker-shoes--ASU005TX20_PM2_Front view.png"
      ],
      sizes: ["S", "M", "L", "XL"]
    },
    {        
      id: 8,
      name: "LV Stadium Sneaker",
      tagName: "Women's vacation Sneakers",
      year: "2024",
      price: "$80",
      image: "img/louis-vuitton-lv-stadium-sneaker-shoes--ARBU2ADJAK_PM2_Front view.png",
      variants: [
        "img/louis-vuitton-lv-stadium-sneaker-shoes--ARBU2ADJEE_PM2_Front view (1).png",
        "img/louis-vuitton-lv-stadium-sneaker-shoes--ARBU2ADJEF_PM2_Front view.png",
        "img/louis-vuitton-lv-stadium-sneaker-shoes--ARBU2ADJEG_PM2_Front view.png",
        "img/louis-vuitton-lv-stadium-sneaker-shoes--ARBU2ADJAK_PM2_Front view.png"
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
        name: "NB 475",
        tagName: "Women vacation Sneakers",
        year: "2024",
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
        name: "Reebok Women's Princess",
        tagName: "lifestyle Sneaker",
        year: "2024",
        price: "$55",
        image: "img/Women's Princess Shoes (2).png",
        variants: [
            "img/Women's Princess Shoes (5).png",
            "img/Women's Princess Shoes (2).png",
            "img/Women's Classic AZ Shoes (3).png",
            "img/Women's Princess Shoes (4).png"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
  ];
   //? Kids Product data
const Kidsproducts = [
    {
      id: 13,
      name: "Nike Air Max Dn",
      tagName: "KIS vacation Sneakers",
      year: "2023",
      price: "$84.9",
      image: "img/AIR+MAX+DN+(GS).png",
      variants: [
        "img/AIR+MAX+DN+(GS).jpg",
        "img/AIR+MAX+DN+(GS) (1).png",
        "img/AIR+MAX+DN+(GS).png",
        "img/AIR+MAX+DN+BG.png" 
      ],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 14,
      name: "NEW-B HOOK & LOOP",
      tagName: "Unisex Kids vacation Sneakers",
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
        name: "Easy Rider Mix",
        tagName: "Big Kids' Vacation Sneakers",
        year: "2024",
        price: "$90",
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
        id: 18,
        name: "",
        tagName: "Bid Kids Sneaker",
        year: "2023",
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
  ];
  




    // Function to generate product card HTML
   function createProductCard(product) {
    return `
      <div class="VS-men-column-details">
        <i class="bi bi-heart"></i>
         <div class="VS-men-card-details">
          <img src="${product.image}" alt="${product.name}">
           <div class="VS-men-details">
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
        <div class="VS-variants">
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
    const productContainer = document.getElementById('VS-men-column');
    productContainer.innerHTML = Menproducts.map(product => createProductCard(product)).join('');
  }


  // Render products on page load
  renderProducts();



   // Function to generate  Female  product card HTML
   function createFemaleProductCard(product) {
    return `
      <div class="VS-female-column-details">
        <i class="bi bi-heart"></i>
         <div class="VS-female-card-details">
          <img src="${product.image}" alt="${product.name}">
           <div class="VS-female-details">
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
        <div class="VS-variants">
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
   function renderFemaleProducts() {
    const FemaleproductContainer = document.getElementById('VS-female-column');
    FemaleproductContainer.innerHTML = WomenMenproducts.map(product => createFemaleProductCard(product)).join('');
  }





  // Render products on page load
  renderKidsProducts();


  // Function to generate  Female  product card HTML
  function createKidsProductCard(product) {
    return `
      <div class="VS-kids-column-details">
        <i class="bi bi-heart"></i>
         <div class="VS-kids-card-details">
          <img src="${product.image}" alt="${product.name}">
           <div class="VS-kids-details">
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
        <div class="VS-variants">
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
   function renderKidsProducts() {
    const KidsproductContainer = document.getElementById('VS-kids-column');
    KidsproductContainer.innerHTML = Kidsproducts.map(product => createKidsProductCard(product)).join('');
  }





  // Render products on page load
  renderFemaleProducts();
