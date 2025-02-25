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

const attachRatingClick = () => {
  const Rating = document.querySelectorAll(`.bi-star`);
  Rating.forEach((star) => {
    star.addEventListener(`click`, handleRatingClick)
  });
}

const handleRatingClick = (event) => {
  const Star = event.target;
  Star.classList.toggle(`bi-star-fill`); 
  Star.classList.toggle(`bi-star`);
}







//?---------------------Wishlist Script------------------------------------------------------
const attachWishlistListeners = () => {
  const heartIcons = document.querySelectorAll(`.bi-heart`);
  heartIcons.forEach((icons) => {
    icons.addEventListener(`click`, handleWishlistClick)
  });
}
     
const handleWishlistClick = (event) => {
  const icon = event.target;
  icon.classList.toggle(`bi-heart-fill`);
  icon.classList.toggle(`bi-heart`);

  if(icon.classList.contains(`bi-heart-fill`)) {
    alert(`Added to Wishlist`)
  }else{
    alert(`Removed From Wishlist`)
  }
}
                    
                  


//? Product data
const TrendingProducts = [
    {
      id: 1,
      name: "Puma Speed Cat",
      tagName: "Men Sneaker",
      year: "2025",
      price: "$90",
      image: "img/Speedcat-OG-Sneakers-Unisex (1).jpeg",
    },
    {
      id: 2,
      name: "Reebok Nano 2.0",
      tagName: "Mens' Training Shoes",
      year: "2023",
      price: "$120",
      image: "img/Men's Nano 2.0 Training Shoes.png"
    },
    {
        id: 3,
        name: "NB 2002R GORE",
        tagName: "Men Sneaker",
        year: "2023",
        price: "$50",
        image:  "img/m2002rxw_nb_02_i.webp"
      },
      {
        id: 4,
        name: "Puma Caven 2.0",
        tagName: "Men Sneaker",
        year: "2023",
        price: "$50",
        image: "img/caven.PNG"
      },
      {
        id: 5,
        name: "Nike Air Force 1 ’07",
        tagName: "Men's Sneaker",
        year: "2025",
        price: "$130",
        image: "img/AIR+FORCE+1+'07.png",
      },
      {
        id: 6,
        name: "LV Footprint Racing",
        tagName: "Men's Sneaker",
        year: "2023",
        price: "$110",
        image: "img/louis-vuitton-lv-footprint-racing-high-top-sneaker-shoes--BSUPMJPC45_PM2_Front view.png",
      },
      {
        id: 7,
        name: "purple LV Trainer",
        tagName: "Men's Sneaker",
        year: "2023",
        price: "$105",
        image: "img/louis-vuitton-lv-trainer-sneaker-shoes--BS9U3PSR17_PM1_Side view.png",
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
        name: "PUMA x SQUID GAME",
        tagName: "Men Lifestyle Sneaker",
        year: "2025",
        price: "$100",
        image: "img/PUMA-x-SQUID-GAME-Easy-Rider-Men's-Sneakers.jpeg",
      },
      {
          id: 9,
          name: "Reebok x Sonic Zig 'N' Glow",
          tagName: "Men lifestyle Sneaker",
          year: "2024",
          price: "$65",
          image: "img/100220328_SLC_eCom-tif (1).png",
        },
        {
          id: 10,
          name: "GANNI x New Balance",
          tagName: "Men Sneakers",
          year: "2024",
          price: "$153",
          image: "img/utrngn_nb_02_i.webp",
        },
        {
          id: 11,
          name: "Puma Scuderia",
          tagName: " Unisex Sneakers",
          year: "2024",
          price: "$80",
          image: "img/scuderia ferrari 2.PNG",
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
          name: " NIKE KD17",
          tagName: "Men Sport sneakerr",
          year: "2024",
          price: "$106",
          image:  "img/KD17.png",
        },
  ];





  const FemaleProducts = [
    {
        id: 13,
        name: "Nike Air Force 1 ’07 LX",
        tagName: "Womens' Sneakert",
        year: "2025",
        price: "$135",
        image: "img/WMNS+AIR+FORCE+1+'07+LX.png",
      },
      {
        id: 14,
        name: "Reebok Nano Shoes",
        tagName: "Women Training Shoes",
        year: "2023",
        price: "$120",
        image: "img/Women's Nano 2.0 Training Shoes (3).png",
      },
      {
          id: 15,
          name: "LV Amiral High Boot",
          tagName: "Women's lifestyle Boot",
          year: "2024",
          price: "$170",
          image: "img/louis-vuitton-amiral-high-boot-shoes--ASRR1BPC78_PM2_Front view.png",
        },
        {
            id: 16,
            name: "New Balance Fresh Foam",
            tagName: "Women Sneaker",
            year: "2024",
            price: "$79.9",
            image: "img/Fresh Foam 680v8.webp",
          },
           {
            id: 17,
            name: "NB FuelCell",
            tagName: "Women's Sneaker",
            year: "2023",
            price: "$199.9",
            image: "img/FuelCell SuperComp Trail (1).webp",
          },
          {
            id: 18,
            name: "Reebok Classic Nylon",
            tagName: "Classic women Shoes",
            year: "2023",
            price: "$120",
            image: "img/Women's Classic Nylon Shoes.png",
          },
          {
            id: 19,
            name: "Nike Ryz 365 2",
            tagName: "Women vacation sneaker",
            year: "2023",
            price: "$90",
            image: "img/WMNS+NIKE+RYZ+365+II.png",
          },
          {
            id: 20,
            name: "Nike Zoom Fly 6",
            tagName: "Women sport shoe",
            year: "2023",
            price: "$100",
            image: "img/W+ZOOM+FLY+6.png",
          },
          {
            id: 21,
            name: "Puma Voyage NITRO™",
            tagName: "Women Running Shoe",
            year: "2022",
            price: "$130",
            image: "img/Voyage-NITRO™-3-Disc-Trail-Running-Shoes-Women.jpeg",
          },
           {
            id: 22,
            name: "LV Stadium Sneaker",
            tagName: "Womens' Vacation Sneakers",
            year: "2023",
            price: "$80",
            image: "img/louis-vuitton-lv-stadium-sneaker-shoes--ARBU2ADJAK_PM2_Front view.png",
          },
          {
            id: 23,
            name: "Reebok AZ Classic",
            tagName: "Womens' Sneaker",
            year: "2023",
            price: "$80",
            image: "img/Women's Classic AZ Shoes (4).png"
          },
          {
            id: 24,
            name: "LV Neo Run Away",
            tagName: "Womens' Sport Shoe",
            year: "2023",
            price: "$120",
            image: "img/louis-vuitton-neo-run-away-sneaker-shoes--AR9U1AMI02_PM2_Front view.png",
          }
  ];


            
            

  const KidsProducts = [
    {
        id: 25,
        name: "Puma Easy Rider",
        tagName: "Big Kids' Sneakers",
        year: "2023",
        price: "$70",
        image: "img/Easy-Rider-Mix-Big-Kids'-Sneakers.jpeg",
      },
      {
        id: 26,
        name: "PUMA Scoot Zeros II",
        tagName: "Big Kids Sneaker",
        year: "2023",
        price: "$90",
        image: "img/Scoot-Zeros-II-2K-Big-Kids'-Basketball-Shoes (2).jpeg",
      },
      {
        id: 27,
        name: "Nike Air Max Plus",
        tagName: "Unisex Kids Sneaker",
        year: "2023",
        price: "$120",
        image: "img/AIR+MAX+PLUS+(PS).png",
      },
      {
        id: 28,
        name: " Kids Ja 2",
        tagName: "Little Kids's Sneaker",
        year: "2023",
        price: "$83",
        image: "img/JA+2+(PS).png",
      },        
      {
        id: 29,
        name: "Elastic Step N Flash",
        tagName: "Unisex kids Sneaker",
        year: "2023",
        price: "$50",
        image: "img/Unisex Classic Step 'N' Flash Elastic Lace Shoes - Toddler.png",
      },
      {
        id: 30,
        name: "Blippi Zig 'N' Glow",
        tagName: "Toddler Shoe",
        year: "2023",
        price: "$55",
        image: "img/Unisex Reebok x Blippi Zig 'N' Glow Elastic Lace Shoes - Toddler.png",
      },
      {
        id: 31,
        name: "Preschool Sonic Zig n Glow",
        tagName: "Kids' Sneaker",
        year: "2023",
        price: "$65",
        image: "img/Unisex Reebok x Sonic Zig 'N' Glow Elastic Lace Shoes - Preschool.png",
      },
      {
        id: 32,
        name: "NB 9060",
        tagName: "Kids Sneaker",
        year: "2023",
        price: "$79",
        image:  "img/90600.webp",
      },
      {
        id: 33,
        name: "Reebok Step N Flash",
        tagName: "Kids Sneaker",
        year: "2023",
        price: "$40",
        image: "img/Unisex Classic Leather Step N Flash Shoes - Toddler.png",
      },
      {
        id: 34,
        name: "Jordan Max Aura 6",
        tagName: "Big Kids' Shoes",
        year: "2023",
        price: "$95",
        image: "img/JORDAN+MAX+AURA+6+(GS) (2).png",
      },
      {
        id: 35,
        name: "Reebok Club C Crib",
        tagName: "Unisex Kids' Sneaker",
        year: "2023",
        price: "$40",
        image: "img/Unisex Club C Crib Shoes - Infant.png",
      },
      {
        id: 36,
        name: "NB 574 HOOK & LOOP",
        tagName: "kid's sneaker",
        year: "2023",
        price: "$59.9",
        image: "img/574 NEW-B HOOK & LOOP (1).webp",
      }
  ]





//?   Function to generate Trending  product card HTML
//?   Function to generate Kids  product card HTML
function createKidsProductCard(product) {
  return `
      <div class="trending-cards-details">
      <i class="bi bi-heart"></i>
        <img src="${product.image}" alt="${product.name}">
        <div class="trending-details">
          <h2>${product.name}</h2>
          <p>${product.tagName}</p>
          <p>${product.year}</p>
          <h3>${product.price}</h3>
          <div class="landing-reviews">
          <div class="landing-ratings">
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i>
          </div>
          <div class="quantity">
            <i class="bi bi-dash" onclick="updateQuantity('decrement', 'quantity${product.id}')"></i>
            <span class="quantity-display" id="quantity${product.id}">0</span>
            <i class="bi bi-plus" onclick="updateQuantity('increment', 'quantity${product.id}')"></i>
          </div>
          </div>
          <button class="buy-button">Buy</button>
          <button class="cart-button">Add to cart</button>
        </div>
      </div>
    </div>
  `;
};

 

//?   Function to generate Kids  product card HTML
function createKidsProductCard(product) {
  return `
      <div class=""female-cards-details"">
      <i class="bi bi-heart"></i>
        <img src="${product.image}" alt="${product.name}">
        <div class="female-details">
          <h2>${product.name}</h2>
          <p>${product.tagName}</p>
          <p>${product.year}</p>
          <h3>${product.price}</h3>
          <div class="landing-reviews">
          <div class="landing-ratings">
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i>
          </div>
          <div class="quantity">
            <i class="bi bi-dash" onclick="updateQuantity('decrement', 'quantity${product.id}')"></i>
            <span class="quantity-display" id="quantity${product.id}">0</span>
            <i class="bi bi-plus" onclick="updateQuantity('increment', 'quantity${product.id}')"></i>
          </div>
          </div>
          <button class="buy-button">Buy</button>
          <button class="cart-button">Add to cart</button>
        </div>
      </div>
    </div>
  `;
};
  

      

 //?   Function to generate Kids  product card HTML
 function createKidsProductCard(product) {
    return `
        <div class="Kids-cards-details">
        <i class="bi bi-heart"></i>
          <img src="${product.image}" alt="${product.name}">
          <div class="kids-details">
            <h2>${product.name}</h2>
            <p>${product.tagName}</p>
            <p>${product.year}</p>
            <h3>${product.price}</h3>
            <div class="landing-reviews">
            <div class="landing-ratings">
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
            </div>
            <div class="quantity">
              <i class="bi bi-dash" onclick="updateQuantity('decrement', 'quantity${product.id}')"></i>
              <span class="quantity-display" id="quantity${product.id}">0</span>
              <i class="bi bi-plus" onclick="updateQuantity('increment', 'quantity${product.id}')"></i>
            </div>
            </div>
            <button class="buy-button">Buy</button>
            <button class="cart-button">Add to cart</button>
          </div>
        </div>
      </div>
    `;
  };
  

      

   //? Function to render all product cards
   const RenderAllProducts = () => {
    const TrendingProductContainer = document.getElementById('landing-column');
    TrendingProductContainer.innerHTML = TrendingProducts.map(product => createKidsProductCard(product)).join('');


    const FemaleProductContainer = document.getElementById('female-trending-column');
    FemaleProductContainer.innerHTML = FemaleProducts.map(product => createKidsProductCard(product)).join('');

    const KidsProductContainer = document.getElementById('Kids-trending-column');
    KidsProductContainer.innerHTML = KidsProducts.map(product => createKidsProductCard(product)).join('');

    attachRatingClick();
    attachWishlistListeners();
  }

  //? Render products on page load
  RenderAllProducts();
  