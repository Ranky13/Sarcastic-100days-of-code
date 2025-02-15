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

const heartIcons = document.querySelectorAll(`.bi-heart`);

heartIcons.forEach((icon) => {
    icon.addEventListener(`click`, () => {
        icon.classList.toggle(`bi-heart-fill`);
        icon.classList.toggle(`bi-heart`);

        if (icon.classList.contains(`bi-heart-fill`)){
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
        name: "Reebok  Zig 'N' Glow",
        tagName: "Unisex Elastic lace shoe",
        year: "2024",
        price: "$65",
        image: "img/100220328_SLC_eCom-tif.png",
        variants: [
            "img/100220328_SLC_eCom-tif (2).png",
            "img/100220328_SLC_eCom-tif (1).png",
            "img/100220328_H1_ECOM_FTW_11222024.png",
            "img/100220328_SLC_eCom-tif.png"
      ],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 2,
      name: "Reebok Answer III",
      tagName: "Unisex Sneaker",
      year: "2023",
      price: "$140",
      image: "img/Answer III Shoes.png",
      variants: [
        "img/Answer III Shoes (2).png",
        "img/Answer III Shoes (3).png",
        "img/Answer III Shoes (4).png",
        "img/Answer III Shoes.png"
      ],
      sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 3,
        name: "Reebok x OBEY",
        tagName: "Premier Road Plus VI Shoe",
        year: "2024",
        price: "$130",
        image: "img/Reebok x OBEY Premier Road Plus VI Shoe.png",
        variants: [
            "img/Reebok x OBEY Premier Road Plus VI Shoe (2).png",
            "img/Reebok x OBEY Premier Road Plus VI Shoe (3).png",
            "img/Reebok x OBEY Premier Road Plus VI Shoe (4).png",
            "img/Reebok x OBEY Premier Road Plus VI Shoe.png"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 4,
        name: "Reebok x Sonic Club",
        tagName: "Classic Revenge Shoes",
        year: "2025",
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
        id: 5,
        name: "Men's FloatZig shoe",
        tagName: "Sport Shoe",
        year: "2023",
        price: "$130",
        image: "img/Men's FloatZig 1 Shoes.png",
        variants: [
            "img/Men's FloatZig 1 Shoes (2).png",
            "img/Men's FloatZig 1 Shoes (4).png",
            "img/Men's FloatZig 1 Shoes.png"
       
        ],
        sizes: ["S", "M", "L", "XL"]
      },  
      {
        id: 6,
        name: "Nano Court Shoes",
        tagName: "Unisex Sport Shoes",
        year: "2023",
        price: "$120",
        image: "img/Nano Court Shoes.png",
        variants: [
            "img/Nano Court Shoes (2).png",
            "img/Nano Court Shoes (3).png",
            "img/Nano Court Shoes (4).png",
            "img/Nano Court Shoes.png"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 7,
        name: "Reebok Training Shoe",
        tagName: "Men's Nano 2.0 Training Shoes",
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
        name: "Men's Nano Gym Shoes",
        tagName: "Gym Shoe",
        year: "2023",
        price: "$120",
        image: "img/Men's Nano Gym Shoes (5).png",
        variants: [
            "img/Men's Nano Gym Shoes (4).png",
            "img/Men's Nano Gym Shoes (3).png",
            "img/Men's Nano Gym Shoes (2).png",
            "img/Men's Nano Gym Shoes.png"
        ],
        sizes: ["S", "M", "L", "XL"]
      },

      {
        id: 9,
        name: "OBEY Basket ball Shoe",
        tagName: "Sport Shoe",
        year: "2023",
        price: "$120",
        image: "img/Reebok x OBEY BB 4000 II Basketball Shoes.png",
        variants: [
            "img/Reebok x OBEY BB 4000 II Basketball Shoes (2).png",
            "img/Reebok x OBEY BB 4000 II Basketball Shoes (3).png",
            "img/Reebok x OBEY BB 4000 II Basketball Shoes (4).png",
            "img/Reebok x OBEY BB 4000 II Basketball Shoes.png"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
  ];

  //? Female Product data

                


const WomenMenproducts = [
    {
      id: 10,
      name: "Classic AZ Shoes",
      tagName: " Women Sneaker",
      year: "2023",
      price: "$80",
      image: "img/Women's Classic AZ Shoes.png",
      variants: [
        "img/Women's Classic AZ Shoes (2).png",
        "img/Women's Classic AZ Shoes (3).png",
        "img/Women's Classic AZ Shoes (4).png",
        "img/Women's Classic AZ Shoes.png"
      ],
      sizes: ["S", "M", "L", "XL"]
    },
    {        
      id:11,
      name: "Women's Nano 2.0",
      tagName: "Women Training Shoes",
      year: "2023",
      price: "$120",
      image: "img/Women's Nano 2.0 Training Shoes.png",
      variants: [
        "img/Women's Nano 2.0 Training Shoes (2).png",
        "img/Women's Nano 2.0 Training Shoes (5).png",
        "img/Women's Nano 2.0 Training Shoes (6).png"
      ],
      sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 12,
        name: "Reebok Princess Shoes",
        tagName: "Women's vacation Sneaker",
        year: "2024",
        price: "$55",
        image: "img/Women's Princess Shoes (3).png",
        variants: [
            "img/Women's Princess Shoes (5).png",
            "img/Women's Princess Shoes (2).png",
            "img/Women's Princess Shoes (3).png",
            "img/Women's Princess Shoes (4).png"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 13,
        name: "Women Classic Nylon ",
        tagName: "Women Sneakers",
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
        id: 14,
        name: "Reebok Court Advance",
        tagName: "Women's Vacation Sneakers",
        year: "2024",
        price: "$65",
        image: "img/Women's Reebok Court Advance Shoes.png",
        variants: [
            "img/Women's Reebok Court Advance Shoes (2).png",
            "img/Women's Reebok Court Advance Shoes (3).png",
            "img/Women's Reebok Court Advance Shoes (4).png",
            "img/Women's Reebok Court Advance Shoes.png"
        ],
        sizes: ["S", "M", "L", "XL"]
      },        
      {
        id: 15,
        name: "Women's DMX Comfort",
        tagName: "Women Sport Shoe",
        year: "2024",
        price: "$55",
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
        id: 16,
        name: "Reebok Energen",
        tagName: "Sport sneaker",
        year: "2023",
        price: "$75",
        image: "img/Women's Energen Run 4 Running Shoes.png",
        variants: [
            "img/Women's Energen Run 4 Running Shoes (2).png",
            "img/Women's Energen Run 4 Running Shoes (1).jpeg",
            "img/Women's Energen Run 4 Running Shoes (4).png",
            "img/Women's Energen Run 4 Running Shoes.png"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 17,
        name: "Reebok Nano",
        tagName: "Women Sport Shoe",
        year: "2024",
        price: "$85",
        image: "img/Women's Nano Gym Shoes.png",
        variants: [
            "img/Women's Nano Gym Shoes (2).png",
            "img/Women's Nano Gym Shoes (3).png",
            "img/Women's Nano Gym Shoes (4).png",
            "img/Women's Nano Gym Shoes.png"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 18,
        name: "Reebok Float Zig",
        tagName: "Women Sport Shoe",
        year: "2024",
        price: "$65",
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

  const KidsProducts = [
    {
      id: 19,
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
      id: 20,
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
        id: 21,
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
        id: 22,
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
        id: 23,
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
        id: 24,
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
        id: 25,
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
        id: 26,
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
        id: 27,
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
  



   //?   Function to generate product card HTML
   function createProductCard(product) {
    return `
      <div class="RBK-trending-column-details">
        <i class="bi bi-heart"></i>
         <div class="RBK-trending-card-details">
          <img src="${product.image}" alt="${product.name}">
           <div class="RBK-trending-details">
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
        <div class="RBK-variants">
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
   function renderProducts() {
    const productContainer = document.getElementById('reebok-trending');
    productContainer.innerHTML = Menproducts.map(product => createProductCard(product)).join('');
  }

  //? Render products on page load
  renderProducts();










   //?  Function to generate Women product card HTML
         
   function createWomenProductCard(product) {
    return `
      <div class="RBK-female-column-details">
        <i class="bi bi-heart"></i>
         <div class="RBK-female-card-details">
          <img src="${product.image}" alt="${product.name}">
           <div class="RBK-female-details">
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
        <div class="RBK-variants">
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
   function renderWomenProducts() {
    const WomenProductContainer = document.getElementById('Reebok-female');
    WomenProductContainer.innerHTML = WomenMenproducts.map(product => createWomenProductCard(product)).join('');
  }


  // Render products on page load
  renderWomenProducts();




   //?   Function to generate Kids  product card HTML
   function createKidsProductCard(product) {
    return `
      <div class="RBK-kids-column-details">
        <i class="bi bi-heart"></i>
         <div class="RBK-kids-card-details">
          <img src="${product.image}" alt="${product.name}">
           <div class="RBK-kids-details">
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
        <div class="RBK-variants">
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
   function renderKidsProducts() {
    const KidsProductContainer = document.getElementById('reebok-kids-column');
    KidsProductContainer.innerHTML = KidsProducts.map(product => createKidsProductCard(product)).join('');
  }

  //? Render products on page load
  renderKidsProducts();