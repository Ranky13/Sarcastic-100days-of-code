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

//? WishList Scripts
const attachWishlistListeners = () => {
  const heartIcons = document.querySelectorAll(`.bi-heart`);
  heartIcons.forEach((icon) => {
    icon.addEventListener(`click`, handleWishlistClick)
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

//?------------------------------Variants Event Clicked Script--------------------------------

const attachVariantListeners = () => {
  const variantImages = document.querySelectorAll(`.FS-variants img`);
  variantImages.forEach((image) => {
    image.addEventListener(`click`, handleVariantClick);
  });
}


const handleVariantClick = (event) => {
  const variantImage = event.target.src;
  const productCard = event.target.closest(`.FS-trending-column-details, .FS-sport-column-details, .FS-vacation-column-details`);
  const mainImage = productCard.querySelectorAll(`.FS-trending-card-details img, .FS-sport-card-details img, .FS-vacation-card-details img`);
  mainImage.forEach((image) => {
    image.src = variantImage;
  });
}
      
         


//? Product data
const FemaleSneakers = [
    {
      id: 1,
      name: "Women Classic Shoes",
      tagName: "Classic women Nylon Shoes",
      year: "2023",
      price: "$120",
      image: "img/Women's Classic Nylon Shoes.png",
      variants: [
        "img/Women's Classic Nylon Shoes (2).png",
        "img/Women's Classic Nylon Shoes (3).png",
        "img/Women's Classic Nylon Shoes (5).png",
        "img/Women's Classic Nylon Shoes.png"
      ],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 2,
      name: "Nike Ryz 365 2",
      tagName: "Women vacation Sneaker",
      year: "2024",
      price: "$90",
      image: "img/WMNS+NIKE+RYZ+365+II (3).png",
      variants: [
        "img/WMNS+NIKE+RYZ+365+II (1).png",
        "img/WMNS+NIKE+RYZ+365+II (2).png",
        "img/WMNS+NIKE+RYZ+365+II (3).png",
        "img/WMNS+NIKE+RYZ+365+II.png"
      ],
      sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 3,
        name: "Nike Free Metcon 6",
        tagName: "Women's Workout Shoes",
        year: "2023",
        price: "$120",
        image:  "img/W+NIKE+FREE+METCON+6 (2).png",
        variants: [
            "img/W+NIKE+FREE+METCON+6 (1).png",
            "img/W+NIKE+FREE+METCON+6.png",
            "img/W+NIKE+FREE+METCON+6 (2).png",
            "img/W+NIKE+FREE+METCON+6 (4).png"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 4,
        name: "Speedcat-OG",
        tagName: "Women Sneaker",
        year: "2024",
        price: "$90",
        image: "img/Speedcat-OG-Sneakers-Unisex (2).jpeg",
        variants: [
            "img/Speedcat-OG-Sneakers-Unisex (1).jpeg",
            "img/Speedcat-OG-Sneakers-Unisex (3).jpeg",
            "img/Speedcat-OG-Sneakers-Unisex (5).jpeg",
            "img/Speedcat-OG-Sneakers-Unisex.jpeg",
            "img/Speedcat-OG-Sneakers-Unisex (2).jpeg"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 5,
        name: "NB FuelCell",
        tagName: "Womens' Sneaker",
        year: "2023",
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
      {
        id: 6,
        name: "Reebok FloatZig",
        tagName: "Women Lifestyle Sneaker",
        year: "2023",
        price: "$130",
        image: "img/Women's Floatzig 1 Running Shoes.png",
        variants: [
            "img/Women's Floatzig 1 Running Shoes (2).png",
            "img/Women's Floatzig 1 Running Shoes (3).png",
            "img/Women's Floatzig 1 Running Shoes (4).png",
            "img/Women's Floatzig 1 Running Shoes.png"

        ],
        sizes: ["S", "M", "L", "XL"]
      },
    ];
             
    
    const FemaleSport = [        
      {
        id: 7,
        name: "Puma Fast-Trac NITRO ",
        tagName: "Women Running shoe",
        year: "2025",
        price: "$80",
        image: "img/Fast-Trac-NITRO™-3-Trail-Running-Shoes-Women.jpeg",
        variants: [
            "img/Fast-Trac-NITRO™-3-Trail-Running-Shoes-Women (1).jpeg",
            "img/Fast-Trac-NITRO™-3-Trail-Running-Shoes-Women (2).jpeg",
            "img/Fast-Trac-NITRO™-3-Trail-Running-Shoes-Women (3).jpeg",
            "img/Fast-Trac-NITRO™-3-Trail-Running-Shoes-Women.jpeg"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {        
        id: 8,
        name: "Puma Voyage NITRO™",
        tagName: "Women Running Shoe",
        year: "2022",
        price: "$130",
        image: "img/Voyage-NITRO™-3-Disc-Trail-Running-Shoes-Women.jpeg",
        variants: [
            "img/Voyage-NITRO™-3-Disc-Trail-Running-Shoes-Women (1).jpeg",
            "img/Voyage-NITRO™-3-Disc-Trail-Running-Shoes-Women (2).jpeg",
            "img/Voyage-NITRO™-3-Disc-Trail-Running-Shoes-Women (3).jpeg",
            "img/Voyage-NITRO™-3-Disc-Trail-Running-Shoes-Women (4).jpeg",
            "img/Voyage-NITRO™-3-Disc-Trail-Running-Shoes-Women.jpeg"
        ],
        sizes: ["S", "M", "L", "XL"]
      },   
      {
          id: 9,
          name: "NB Fresh Foam 680v8",
          tagName: "Women Sport shoe",
          year: "2024",
          price: "$79.9",
          image:  "img/Fresh Foam 680v8.webp",
          variants: [
                "img/Fresh Foam 680v8 (2).webp",
                "img/Fresh Foam 680v8 (4).webp",
                "img/Fresh Foam 680v8 (3).webp",
                "img/Fresh Foam 680v8.webp"
          ],
          sizes: ["S", "M", "L", "XL"]
        },  
        {
          id: 10,
          name: "Reebok Women's DMX",
          tagName: "Women Sport Shoe",
          year: "2024",
          price: "$80",
          image: "img/Women's DMX Comfort + 2.0 Shoes.png",
          variants: [
            "img/Women's DMX Comfort + 2.0 Shoes (1).png",
            "img/Women's DMX Comfort + 2.0 Shoes (2).png",
            "img/Women's DMX Comfort + 2.0 Shoes (3).png",
            "img/Women's DMX Comfort + 2.0 Shoes.png"
          ],
          sizes: ["S", "M", "L", "XL"]
        },
        {
          id: 11,
          name: "Nike Zoom Fly 6",
          tagName: "women sport shoe",
          year: "2024",
          price: "$100",
          image: "img/W+ZOOM+FLY+6.jpeg",
          variants: [
             "img/W+ZOOM+FLY+6 (1).png",
                "img/W+ZOOM+FLY+6.jpeg",
                "img/W+ZOOM+FLY+6 (2).png",
                "img/W+ZOOM+FLY+6.png" 
          ],
          sizes: ["S", "M", "L", "XL"]
        }, 
        {
          id: 12,
          name: "Neo Run Away",
          tagName: "Womens' Sport Shoe",
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
    ];



        const FemaleVacation = [
        {
            id: 13,
            name: "Reebok Princess Shoe",
            tagName: "Classic Women Vacation Shoe",
            year: "2024",
            price: "$55",
            image: "img/Women's Princess Shoes.png",
            variants: [
                "img/Women's Princess Shoes (5).png",
                "img/Women's Princess Shoes (2).png",
                "img/Women's Classic AZ Shoes (3).png",
                "img/Women's Princess Shoes (4).png"
            ],
            sizes: ["S", "M", "L", "XL"]
          },
          {
            id: 14,
            name: "NB 475",
            tagName: "Womens' Vacation Sneakers",
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
              id: 15,
              name: " Nike Ryz 365 2",
              tagName: "Womens vacation Sneaker",
              year: "2024",
              price: "$90",
              image: "img/WMNS+NIKE+RYZ+365+II.png",
              variants: [
                "img/WMNS+NIKE+RYZ+365+II (1).png",
                "img/WMNS+NIKE+RYZ+365+II (2).png",
                "img/WMNS+NIKE+RYZ+365+II (3).png",
                "img/WMNS+NIKE+RYZ+365+II.png"
              ],
              sizes: ["S", "M", "L", "XL"]
            }, 
            {
              id: 16,
              name: "LV Stadium Sneaker",
              tagName: "Womens' vacation sneaker",
              year: "2024",
              price: "$80",
              image:  "img/louis-vuitton-lv-stadium-sneaker-shoes--ARBU2ADJAK_PM2_Front view.png",
              variants: [
                "img/louis-vuitton-lv-stadium-sneaker-shoes--ARBU2ADJEE_PM2_Front view (1).png",
                "img/louis-vuitton-lv-stadium-sneaker-shoes--ARBU2ADJEF_PM2_Front view.png",
                "img/louis-vuitton-lv-stadium-sneaker-shoes--ARBU2ADJEG_PM2_Front view.png",
                "img/louis-vuitton-lv-stadium-sneaker-shoes--ARBU2ADJAK_PM2_Front view.png"
              ],
              sizes: ["S", "M", "L", "XL"]
            },
            {
              id: 17,
              name: "LV Archlight Sneaker",
              tagName: "Womens' vacation Sneakers",
              year: "2024",
              price: "$110",
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
              id: 18,
              name: "Nike AL8",
              tagName: "Women Vacation Sneaker",
              year: "2023",
              price: "$85",
              image: "img/W+NIKE+AL8.png",
              variants: [
                  "img/W+NIKE+AL8 (1).png",
                  "img/W+NIKE+AL8 (2).png",
                  "img/W+NIKE+AL8 (3).png",
                  "img/W+NIKE+AL8.png"
              ],
              sizes: ["S", "M", "L", "XL"]
            },
        ];




     //? Function to generate Female Sneakers card HTML
   function createTrendingProductCard(product) {
    return `
      <div class="FS-trending-column-details">
        <i class="bi bi-heart"></i>
         <div class="FS-trending-card-details">
          <img src="${product.image}" alt="${product.name}">
           <div class="FS-trending-details">
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
        <div class="FS-variants">
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


  

  //? Function to generate Female Sport  card HTML
  function createSportProductCard(product) {
    return `
      <div class="FS-sport-column-details">
        <i class="bi bi-heart"></i>
         <div class="FS-sport-card-details">
          <img src="${product.image}" alt="${product.name}">
           <div class="FS-sport-details">
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
        <div class="FS-variants">
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
  


  //? Function to generate Female Vacation card HTML
  function createVacationProductCard(product) {
    return `
      <div class="FS-vacation-column-details">
        <i class="bi bi-heart"></i>
         <div class="FS-vacation-card-details">
          <img src="${product.image}" alt="${product.name}">
           <div class="FS-vacation-details">
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
        <div class="FS-variants">
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
    const FSproductContainer = document.getElementById('FS-trending-column');
    FSproductContainer.innerHTML = FemaleSneakers.map(product => createTrendingProductCard(product)).join('');

    const SportproductContainer = document.getElementById('FS-sport-column');
    SportproductContainer.innerHTML = FemaleSport.map(product => createSportProductCard(product)).join('');
  

    const VacationproductContainer = document.getElementById('FS-vacation-column');
    VacationproductContainer.innerHTML = FemaleVacation.map(product => createVacationProductCard(product)).join('');
    attachWishlistListeners();
    attachVariantListeners();
  }


  // Render products on page load
  RenderAllProducts();