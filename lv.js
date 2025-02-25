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

//? Wish List Scripts

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

const attachVariantListeners = () => {
  const variantImages = document.querySelectorAll(`.LV-variants img`);
  variantImages.forEach((image) => {
    image.addEventListener(`click`, handleVariantClick);
  });
}

const handleVariantClick = (event) => {
  const variantImage = event.target.src;
  const productCard = event.target.closest(`.LV-trending-column-details, .LV-female-column-details`);
  const mainImage = productCard.querySelectorAll(`.LV-trending-card-details img, .LV-female-card-details img`);
  mainImage.forEach((image) => {
    image.src = variantImage;
  });
}


     //? Product data
const Menproducts = [
    {
        id: 1,
        name: "Runner Tatic Sneaker",
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
      id: 2,
      name: "Trainer Sneaker",
      tagName: "lifestyle Sneaker",
      year: "2023",
      price: "$150",
      image: "img/louis-vuitton-lv-trainer-sneaker-shoes--BSUPMVDN20_PM2_Front view.png",
      variants: [
        "img/louis-vuitton-lv-trainer-sneaker-shoes--BSUPMVDN20_PM1_Interior view.png",
        "img/louis-vuitton-lv-trainer-sneaker-shoes--BSUPMVDN20_PM1_Other view.png",
        "img/louis-vuitton-lv-trainer-sneaker-shoes--BSUPMVDN20_PM1_Side view.png",
        "img/louis-vuitton-lv-trainer-sneaker-shoes--BSUPMVDN20_PM2_Front view.png"
      ],
      sizes: ["S", "M", "L", "XL"]
    },   
    {
        id: 3,
        name: "Maxi Trainer Sneaker",
        tagName: "vacation sneaker",
        year: "2024",
        price: "$90",
        image: "img/louis-vuitton-lv-trainer-maxi-sneaker-shoes--BSUPN5GC92_PM2_Front view.png",
        variants: [
            "img/louis-vuitton-lv-trainer-maxi-sneaker-shoes--BSUPN5GC92_PM1_Worn view.jpeg",
            "img/louis-vuitton-lv-trainer-maxi-sneaker-shoes--BSUPN5GC92_PM1_Side view.png",
            "img/louis-vuitton-lv-trainer-sneaker-shoes--BSUPMVDN20_PM1_Interior view.png",
            "img/louis-vuitton-lv-trainer-maxi-sneaker-shoes--BSUPN5GC92_PM2_Front view.png"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 4,
        name: "LV x TM LV",
        tagName: "Men Trainer Sneaker",
        year: "2025",
        price: "$120",
        image: "img/louis-vuitton-lv-x-tm-lv-trainer-sneaker-shoes--BSUPNRTM01_PM1_Side view (1).png",
        variants: [
            "img/louis-vuitton-lv-x-tm-lv-trainer-sneaker-shoes--BSUPNRTM01_PM1_Back view (1).png",
           "img/louis-vuitton-lv-x-tm-lv-trainer-sneaker-shoes--BSUPNRTM01_PM2_Front view.png",
           "img/louis-vuitton-lv-x-tm-lv-trainer-sneaker-shoes--BSUPNRTM01_PM1_Interior view (1).png"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 5,
        name: "Beverly Hills Sneaker",
        tagName: "vacation Sneaker",
        year: "2023",
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
        id: 6,
        name: "purple Trainer Sneaker",
        tagName: "Men Sneaker",
        year: "2023",
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
        id: 7,
        name: "Runner Tatic ",
        tagName: "lifestyle Sneaker",
        year: "2023",
        price: "$105",
        image: "img/BSIU1PMI01_PM2_Front view (1).png",
        variants: [
            "img/BSIU1PMI01_PM1_Other view.png",
            "img/BSIU1PMI01_PM2_Front view (2).png",
            "img/BSIU1PMI01_PM2_Front view (1).png"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 8,
        name: "Footprint Racing",
        tagName: "Racing High Top Sneaker",
        year: "2023",
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
        id: 9,
        name: "Checker Ranger Boot",
        tagName: "Mens' Boot",
        year: "2023",
        price: "$105",
        image: "img/louis-vuitton-lv-checker-ranger-boot-shoes--BSYQ1XNU02_PM2_Front view.png",
        variants: [
            "img/louis-vuitton-lv-boot-ranger-shoes (2).png",
           "img/louis-vuitton-lv-checker-ranger-boot-shoes--BSYQ1XNU02_PM2_Front view.png",
           "img/louis-vuitton-lv-boot-ranger-shoes (1).png"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
  ];
  
  
  //? Female Product data              

const WomenMenproducts = [
    {
      id: 10,
      name: "LV x TM Time Out",
      tagName: "Women vacation Sneaker",
      year: "2023",
      price: "$70",
      image: "img/louis-vuitton-lv-x-tm-time-out-sneaker-shoes--ASU00DPC01_PM1_Side view.png",
      variants: [
        "img/louis-vuitton-lv-x-tm-time-out-sneaker-shoes--ASU00DPC01_PM1_Interior view.png",
        "img/louis-vuitton-lv-x-tm-time-out-sneaker-shoes--ASU00DPC01_PM1_Back view.png",
        "img/louis-vuitton-lv-x-tm-time-out-sneaker-shoes--ASU00DPC01_PM1_Side view.png",
        "img/louis-vuitton-lv-x-tm-time-out-sneaker-shoes--ASU00DPC01_PM2_Front view.png"
      ],
      sizes: ["S", "M", "L", "XL"]
    },
    {        
      id:11,
      name: "LV Trainer Sneaker",
      tagName: "Women Sneaker",
      year: "2023",
      price: "$70",
      image: "img/rose (1).png",
      variants: [
        "img/rose (1).png",
        "img/rose (2).png",
        "img/rose (3).png"
      ],
      sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 12,
        name: " LV Rush Sneaker",
        tagName: "Womens' sport Sneaker",
        year: "2024",
        price: "$60",
        image: "img/louis-vuitton-lv-rush-sneaker-shoes--ASU00CPC14_PM1_Interior view.png",
        variants: [
            "img/louis-vuitton-lv-rush-sneaker-shoes--ASU00CPC14_PM1_Other view.png",
            "img/louis-vuitton-lv-rush-sneaker-shoes--ASU00CPC14_PM1_Side view.png",
            "img/louis-vuitton-lv-rush-sneaker-shoes--ASU00CPC14_PM2_Front view.png",
            "img/louis-vuitton-lv-rush-sneaker-shoes--ASU00CPC14_PM1_Interior view.png"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 13,
        name: "LV Archlight Sneaker",
        tagName: "Women vacation Sneakers",
        year: "2023",
        price: "$120",
        image: "img/louis-vuitton-lv-archlight-sneaker-shoes--ASU005TX20_PM1_Interior view.png",
        variants: [
            "img/louis-vuitton-lv-archlight-sneaker-shoes--ASU005TX20_PM1_Interior view.png",
           "img/louis-vuitton-lv-archlight-sneaker-shoes--ASU005TX20_PM1_Side view.png",
           "img/louis-vuitton-lv-archlight-sneaker-shoes--ASU005TX20_PM1_Back view.png",
           "img/louis-vuitton-lv-archlight-sneaker-shoes--ASU005TX20_PM2_Front view.png"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 14,
        name: " LV Stadium Sneaker",
        tagName: "Womens, Vacation Sneakers",
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
        id: 15,
        name: "Neo Run Away",
        tagName: "Women Sport Shoe",
        year: "2024",
        price: "$70",
        image: "img/louis-vuitton-neo-run-away-sneaker-shoes--AR9U1AMI02_PM2_Front view.png",
        variants: [
           "img/louis-vuitton-neo-run-away-sneaker-shoes--AR9U1AMI02_PM1_Interior view.png",
           "img/louis-vuitton-neo-run-away-sneaker-shoes--AR9U1AMI02_PM1_Cropped worn view.jpeg",
           "img/louis-vuitton-neo-run-away-sneaker-shoes--AR9U1AMI02_PM1_Interior view.png",
           "img/louis-vuitton-neo-run-away-sneaker-shoes--AR9U1AMI02_PM2_Front view.png"
        ],
        sizes: ["S", "M", "L", "XL"]
      }, 
      {
        id: 16,
        name: "Amiral High Boot",
        tagName: "Womens' Boots",
        year: "2023",
        price: "$170",
        image: "img/louis-vuitton-amiral-high-boot-shoes--ASRR1BPC78_PM2_Front view.png",
        variants: [
            "img/louis-vuitton-amiral-high-boot-shoes--ASRR1BPC78_PM2_Front view.png",
            "img/louis-vuitton-amiral-high-boot-shoes--ASRR1BPC78_PM1_Side view.png"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 17,
        name: "Beaubourg Ankle Boot",
        tagName: "Womens' Boots",
        year: "2024",
        price: "$110",
        image: "img/louis-vuitton-lv-beaubourg-ankle-boot-shoes--AS5Q2DPC02_PM2_Front view.png",
        variants: [
            "img/louis-vuitton-lv-beaubourg-ankle-boot-shoes--AS5Q2DPC02_PM2_Front view.png",
           "img/louis-vuitton-lv-beaubourg-ankle-boot-shoes--AS5Q2DPC02_PM1_Interior view.png",
           "img/louis-vuitton-lv-beaubourg-ankle-boot-shoes--AS5Q2DPC02_PM1_Side view.png"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 18,
        name: "Berlin High Boot",
        tagName: "Womens' Boot",
        year: "2024",
        price: "$130",
        image: "img/louis-vuitton-berlin-high-boot-shoes--ASAR1HPCOK_PM2_Front view.png",
        variants: [
            "img/louis-vuitton-berlin-high-boot-shoes--ASAR1HPCOK_PM2_Front view.png",
            "img/louis-vuitton-berlin-high-boot-shoes--ASAR1HPC02_PM1_Side view.png",
            "img/louis-vuitton-berlin-high-boot-shoes--ASAR1HPC02_PM2_Front view.png",
            "img/louis-vuitton-berlin-high-boot-shoes--ASAR1HPC01_PM2_Front view (1).png"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
  ];



  
   //?   Function to generate product card HTML
   function createProductCard(product) {
    return `
      <div class="LV-trending-column-details">
        <i class="bi bi-heart"></i>
         <div class="LV-trending-card-details">
          <img src="${product.image}" alt="${product.name}">
           <div class="LV-trending-details">
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
        <div class="LV-variants">
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
  







   //?  Function to generate Women product card HTML
         
   function createWomenProductCard(product) {
    return `
      <div class="LV-female-column-details">
        <i class="bi bi-heart"></i>
         <div class="LV-female-card-details">
          <img src="${product.image}" alt="${product.name}">
           <div class="LV-female-details">
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
        <div class="LV-variants">
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
   const RenderAllProducts = () => {
    const productContainer = document.getElementById('trending-column');
    productContainer.innerHTML = Menproducts.map(product => createProductCard(product)).join('');

    const WomenProductContainer = document.getElementById('Female-column');
    WomenProductContainer.innerHTML = WomenMenproducts.map(product => createWomenProductCard(product)).join('');
    attachWishlistListeners();
    attachVariantListeners();a
  }


  // Render products on page load
  RenderAllProducts();


