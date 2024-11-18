
import { createStore } from "vuex";
export default createStore({
  state: {
    products: [
      {
        id: 1,
        name: 'BESAN BARFI',
        sid: "besan-barfi",
        vendor: 'Barfi Sharfi',
        description: "Mouthmelting Besan Barfi garnished with Crunchy Nuts & Dryfruits made in Pure Desi Ghee",
        image: 'https://ministryofcurry.com/wp-content/uploads/2021/10/Besan-Ki-Barfi.jpg',
        reviews: 4,
        type: "sweets menu",
        discount:"12",
        prices: [
          { size: "500 gms", cost: "525", originalCost: "550" },
          { size: "750 gms", cost: "925", originalCost: "1000" },
          { size: "1 Kg (Premium)", cost: "1100", originalCost: "1200" }
        ]
      },
      {
        id: 2,
        name: "ONE BITE PINNI",
        sid: "one-bite-pinni",
        description: "Small Bite Sized Pinni's with Nutty Crunch made in Pure Desi Ghee will satisfy your Sweet Tooth",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTFsKR_Slq6JTSdGDef0qQSMqYKbyyjf0McA&s",
        vendor: 'Barfi Sharfi',
        reviews: 18,
        type: "sweets menu",
        prices: [
          { size: "250 gms", cost: "275" },
          { size: "500 gms", cost: "500" },
          { size: "750 gms", cost: "875" },
          { size: "1 Kg (Premium)", cost: "1050" }
        ]
      },
      {
        id: 3,
        name: "ANJEER BARFI & KHAJOOR PAAK",
        sid: "anjeer-barfi-khajoor-paak",
        description: "Our Sugar Free Delight made with Date, Fig, Honey loaded with Mixed Nuts & Dryfruits",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzbtZPTJkTqmJMrK1T_WO5K3U8jTkcPgkong&s",
        prices: [{ size: "16 Pc Assorted Box", cost: "1100" }],
        // badge: "Sugar Free",
        vendor: 'Barfi Sharfi',
        type: "sweets menu",
        originalPrice: 700.00,
        discount: 14,
        reviews: 24
      },
      {
        id: 4,
        name: 'DHODHA BITES',
        sid: "dhodha-bites",
        description: "Dhodha , a traditional Indian sweet having a grainy and chewy texture, loved by kids and adults",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3WnzWDgw9u6fHXfsjLzDFBQeNC7kVrO-ZMw&s',
        vendor: 'Barfi Sharfi',
        type: "sweets menu",
        prices: [
          { size: "500 gms", cost: "525" },
          { size: "1 Kg", cost: "900" }
        ],
        reviews: 0
      },
      {
        id: 4,
        name: 'Dry Fruit Panjiri',
        sid: "dry-fruit-panjiri",
        description: "Warm Dryfruit Panjiri enriched with Flour , Almonds ,Cashews, Organic Sugar and Ghee is best for Health all year round",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLKGeVLZQwGUqItjqcPyRvBxxQABEA1lQGOA&s',
        vendor: 'Barfi Sharfi',
        type: "sweets menu",
        prices: [
          { size: "250 gms", cost: "275" },
          { size: "500 gms", cost: "600" },
          { size: "1 Kg", cost: "1200" }
        ],
        reviews: 0
      },
      {
        id: 4,
        name: 'Moti Choor Ladoo',
        sid: "moti-choor-ladoo",
        description: "This irresistible Soft and Mouthmelting Laddoo's cooked in Pure Desi Ghee flavoured with Royal Saffron and Elaichi",
        image: 'https://www.anandsweets.in/cdn/shop/products/MotichurLaddu_1.png?v=1713442530&width=1946',
        vendor: 'Barfi Sharfi',
        type: "sweets menu",
        prices: [
          { size: "500 gms", cost: "475" },
          { size: "1 Kg (Premium Box)", cost: "900" }
        ],
        reviews: 0
      },
      {
        id: 4,
        name: 'Moong Dal Pinni',
        sid: "moong-dal-pinni",
        description: "Made with nutritious ingredient's ie Dryfruits ,Nuts, Desi Khaand and Authentic Indian Herbs is Loved by Adults..",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqV_dL6eVjlF0l92C9rkEz29N9H_K2Ssto3dXCmP8Sp9j4a0MIQqovKCJFNeTAjrxAzFI&usqp=CAU',
        vendor: 'Barfi Sharfi',
        type: "sweets menu",
        prices: [
          { size: "500 gms", cost: "500" },
        ],
        reviews: 0
      },
      {
        id: 4,
        name: 'NUTTY CARAMEL BRITTLE BARS',
        sid: "nutty-caramel-brittle-bars",
        description: "Caramelized Choclate Bars with Dryfruits , Sesame Seeds and Nuts gives you a Crunch in each Bite..",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyKdQvhbjjrrTytQloE4oa2KczyTXVClM8KCjFYlDmnYYIpMVGINLVr30Y0S8DXp2_PU4&usqp=CAU',
        vendor: 'Barfi Sharfi',
        type: "sweets menu",
        prices: [
          { size: "250 gms", cost: "300" },
          { size: "500 gms", cost: "500" },
        ],
        reviews: 0
      },
      {
        id: 1,
        name: 'MALPURA',
        sid: "malpura",
        description: "Malpura's made in Desi Ghee will surely take away all your mid-day sweet cravings, also known as Indian Pancake.",
        image: 'https://storage.googleapis.com/goa-app-12a91.appspot.com/2024-06-27T15%3A58%3A51.749Zsuji-malpura.webp?GoogleAccessId=firebase-adminsdk-zeqcj%40goa-app-12a91.iam.gserviceaccount.com&Expires=16447017600&Signature=NcZHtKkB3pDcx%2F1Yx%2FPvOX4lML910o4x5NSMohwr1FLr0c46DnpGtQVKXIV449WOJLXMcxTOsx5kV1ru1nHbX3E%2BJdV7DxOXizYLtbSTkJF0TkucBVvyNZL0olDYqkMmvKniOhpBMEwuSi3TeqFL9qTstErkuz4N1cpaqDclIE5xwDX230BioUAMgSBR%2BJb31euJD9bxxuu86ZlC4267hKbM2hCD9spqSKxX4%2B8utka19Aw17bKx844wTYpgjBul5HJ8hrw6%2F%2Fk31%2Fu2QBhM8Ujj8lkcOpxuZY55z%2BkAzazb3fS3Pk4U8UU4imC22eatJa69a4nwWOclDhv85rD08w%3D%3D',
        vendor: 'Barfi Sharfi',
        type: "sweets menu",
        prices: [
          { size: "500 gms", cost: "450" },
          { size: "1 Kg", cost: "800" },
        ],
        reviews: 0
      },
      {
        id: 2,
        name: 'CHOCO / MILKY FUDGE',
        sid: "choco-milky-fudge",
        description: "An old-school dessert made with sweetened cocoa, milk chocolate, choco chips, and caramelized dry fruits loved by all.",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpZe7ogrZz1cG5kcOaDfQ91Sce8Kdw5wLSpFuW0iYrPxCld6yjHFeOjXC0IEc_22wpsG8&usqp=CAU',
        vendor: 'Barfi Sharfi',
        type: "sweets menu",
        prices: [
          { size: "12 Pc Jar", cost: "600" },
          { size: "16 Pc Box", cost: "800" },
        ],
        reviews: 0
      },
      {
        id: 3,
        name: 'MANGO / STRAWBERRY FUDGE',
        sid: "mango-strawberry-fudge",
        description: "Made by adding fresh mango/strawberry in the cocoa with dry fruits, this is a sweet treat for all mango lovers in summer.",
        image: 'https://www.sugarsaltmagic.com/wp-content/uploads/2023/08/Strawberry-Fudge-3FEAT.jpg',
        vendor: 'Barfi Sharfi',
        type: "sweets menu",
        prices: [
          { size: "12 Pc Jar", cost: "700" },
          { size: "16 Pc Box", cost: "850" },
        ],
        reviews: 0
      },
      {
        id: 4,
        name: 'MILK CAKE',
        sid: "milk-cake",
        description: "An Indian sweet dessert prepared from milk by slowly cooking it for hours till a grainy brown texture garnished with dry fruits.",
        image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/337486498/IB/ZS/XQ/117533050/sweets-milk-cake.webp',
        vendor: 'Barfi Sharfi',
        type: "sweets menu",
        prices: [
          { size: "500 gms", cost: "500" },
          { size: "1 Kg", cost: "900" },
        ],
        reviews: 0
      },
      {
        id: 5,
        name: 'GHUJIA',
        sid: "ghuijia",
        description: "Celebrate Holi with mouthmelting Ghujias available in Kesar, Plain, Baked, and Chashni flavors to satisfy your sweet taste buds.",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsKXptX_st2colXFjzt7F7TSdiNwLMqp3ukXLOvd57fOUbQuQo8DrRfUfsaGPQqWlxFqY&usqp=CAU',
        vendor: 'Barfi Sharfi',
        type: "sweets menu",
        prices: [
          { size: "500 gms", cost: "550" },
          { size: "1 Kg", cost: "1000" },
        ],
        reviews: 0
      },
      {
        id: 6,
        name: 'GHEVAR',
        sid: "ghevar",
        description: "India's popular dessert Ghevar is available in a variety of flavors: Plain, Malai, Kesar-Pista, all made in pure desi ghee.",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1trOlQ7iHF2DmTnF5oJAsGQ4zffUt5vMPB_fLiXSxmgTOb8mveRLIgkRk6zf_laTxyMQ&usqp=CAU',
        vendor: 'Barfi Sharfi',
        type: "sweets menu",
        prices: [
          { size: "500 gms", cost: "550" },
          { size: "1 Kg", cost: "1050" },
        ],
        reviews: 0
      },
      {
        id: 7,
        name: 'ASSORTED MODAK BOX',
        sid: "assorted-modak-box",
        description: "Modaks made for the Ganesh Chaturthi festival, available in 6-7 flavors to choose from.",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSksWPUhF2Oa6NPDgA8fDJh1VyJ_QX2bCLB2FTixgZcPXDPfzpzxJxcVfgZar_vXFLEWys&usqp=CAU',
        vendor: 'Barfi Sharfi',
        type: "sweets menu",
        prices: [
          { size: "1 Box (16 pcs)", cost: "800" },
        ],
        reviews: 0
      },
      {
        id: 8,
        name: 'GUR / SHAKAR PAARE',
        sid: "gur-shakar-paare",
        description: "This traditional Punjabi sweet, prepared with jaggery, is relished by all ages, especially during winters.",
        image: 'https://i.ytimg.com/vi/n7Y3y9AQ7fI/sddefault.jpg',
        vendor: 'Barfi Sharfi',
        type: "sweets menu",
        prices: [
          { size: "500 gms", cost: "450" },
          { size: "1 Kg", cost: "875" },
        ],
        reviews: 0
      },
      {
        id: 9,
        name: 'FRUIT BITES',
        sid: "fruit-bites",
        description: "Made with natural fresh fruit pulp, raw seeds, and no added flavors, available in assorted fruit flavors like Apple, Mango, and more.",
        image: 'https://www.newrameshkirana.com/wp-content/uploads/2020/06/Dryfruit-honey-bites-scaled.jpg',
        vendor: 'Barfi Sharfi',
        type: "sweets menu",
        prices: [
          { size: "500 gms", cost: "800" },
          { size: "1 Kg", cost: "1350" },
        ],
        reviews: 0
      },
      {
        id: 10,
        sid: "bhaji-prasad-boxes",
        name: "BHAJI & PRASAD BOXES",
        description: "Assorted premium Bhaji boxes for bulk wedding orders and Prasad distribution, available on pre-bookings.",
        image: "https://5.imimg.com/data5/ANDROID/Default/2024/5/421539966/NM/UH/AB/146656614/product-jpeg-500x500.jpg",
        vendor: "Barfi Sharfi",
        type: "sweets menu",
        prices: [
          { size: "Bhaji Box", cost: "1100" },
          { size: "Prasad Box", cost: "250" },
        ],
        reviews: 0,
      },


      {
        id: 11,
        sid: "sesame-cashews",
        name: "SESAME CASHEWS",
        description: "Browned sesame cashews using the best quality cashews coated with sesame seeds, a favorite savory all year round.",
        image: "https://5.imimg.com/data5/LE/SX/MY-22454617/sugar-coated-almonds-500x500.jpg",
        vendor: "Barfi Sharfi",
        type: "savouries menu",
        prices: [
          { size: "250 gms", cost: "400" },
          { size: "1 Kg", cost: "1500" },
        ],
        reviews: 0,
      },
      {
        id: 12,
        sid: "mini-namak-para",
        name: "MINI-NAMAK PARA",
        description: "The best munching snack suitable for all age groups.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8qyGyHumiBuiqJ6DpHZ4SFlhslxinajtz0__zz_gcIetN8fKwGkn5pQUNmK2LB89sJFo&usqp=CAU",
        vendor: "Barfi Sharfi",
        type: "savouries menu",
        prices: [
          { size: "250 gms", cost: "175" },
          { size: "500 gms", cost: "350" },
          { size: "1 Kg", cost: "700" },
        ],
        reviews: 0,
      },
      {
        id: 13,
        sid: "sesame-shakar-methi-mathi",
        name: "SESAME SHAKAR & METHI MATHI",
        description: "Small mathi bites are a perfect companion with your tea and all-day munching.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEjyJTxJ0sEd_LEKjWA_UpE-jejYyk1n1Rc4MmuBqmeYxbUJlRLTnMRswbU4l8cV61qbM&usqp=CAU",
        vendor: "Barfi Sharfi",
        type: "savouries menu",
        prices: [
          { size: "250 gms", cost: "225" },
          { size: "500 gms", cost: "400" },
          { size: "1 Kg", cost: "800" },
        ],
        reviews: 0,
      },
      {
        id: 14,
        sid: "sugar-coated-almonds-nuts",
        name: "SUGAR COATED ALMONDS & NUTS",
        description: "Best quality almonds roasted and coated in fine powdered sugar.",
        image: "https://thebigmansworld.com/wp-content/uploads/2024/08/candied-nuts-recipe.jpg",
        vendor: "Barfi Sharfi",
        type: "savouries menu",
        prices: [
          { size: "100 gms", cost: "250" },
          { size: "1 Kg", cost: "1750" },
        ],
        reviews: 0,
      },
      {
        id: 15,
        sid: "makhana-mix",
        name: "MAKHANA MIX",
        description: "Our wide range of healthy makhanas: Masala, Caramelized, Pudina, and Rose Makhana, perfect for all-time munching.",
        image: "https://india.neelamfoodland.in/cdn/shop/products/IMG_8671_800x.jpg?v=1697022197",
        vendor: "Barfi Sharfi",
        type: "savouries menu",
        prices: [
          { size: "1 Jar", cost: "300" },
          { size: "1 Kg", cost: "1800" },
        ],
        reviews: 0,
      },
      {
        id: 16,
        sid: "methi-rolls",
        name: "METHI ROLLS",
        description: "Our hot-selling crispy munching methi rolls taste best paired with tea.",
        image: "https://karaikaliyangars.com/cdn/shop/products/bs_762396a5-852e-4cca-84f4-cc5a41d41f99.png?v=1676963047",
        vendor: "Barfi Sharfi",
        type: "savouries menu",
        prices: [
          { size: "250 gms", cost: "300" },
          { size: "1 Kg", cost: "1100" },
        ],
        reviews: 0,
      },
      {
        id: 17,
        sid: "achari-mathi",
        name: "ACHARI MATHI",
        description: "Achari mathi stuffed with achari masala in the dough to add a tangy flavor in each bite.",
        image: "https://delightsweets.in/cdn/shop/products/WhatsAppImage2022-06-21at4.10.30PM.jpg?v=1683306657",
        vendor: "Barfi Sharfi",
        type: "savouries menu",
        prices: [
          { size: "250 gms", cost: "300" },
          { size: "500 gms", cost: "600" },
        ],
        reviews: 0,
      },
      {
        id: 18,
        sid: "garlic-rice-balls",
        name: "GARLIC RICE BALLS",
        description: "Crispy and light snack crumbling in each bite, traditionally known as Murrak, leaving your mouth with a wonderful flavor of garlic.",
        image: "https://recipe1.ezmember.co.kr/cache/recipe/2022/05/16/5eb23b823e5ed70205bfcc533d5fd05a1.jpg",
        vendor: "Barfi Sharfi",
        type: "savouries menu",
        prices: [
          { size: "250 gms", cost: "200" },
          { size: "500 gms", cost: "350" },
        ],
        reviews: 0,
      },
      {
        id: 19,
        sid: "corn-sticks",
        name: "CORN STICKS",
        description: "Corn sticks made with corn paste and deep-fried to give a crunchy and salty taste.",
        image: "https://5.imimg.com/data5/SELLER/Default/2020/9/JW/JX/PO/40849354/corn-stick-frymus-500x500.jpg",
        vendor: "Barfi Sharfi",
        type: "savouries menu",
        prices: [
          { size: "250 gms", cost: "225" },
          { size: "500 gms", cost: "450" },
        ],
        reviews: 0,
      },
      {
        id: 20,
        sid: "hot-chips",
        name: "HOT CHIPS",
        description: "Our thin potato chips/wafers made with our secret lip-smacking masala will make you finish the whole pack in no time.",
        image: "https://india.neelamfoodland.in/cdn/shop/products/IMG_3513_1200x.jpg?v=1698402076",
        vendor: "Barfi Sharfi",
        type: "savouries menu",
        prices: [
          { size: "250 gms", cost: "350" },
        ],
        reviews: 0,
      },

    ],
    collections: [
      {
        id: 1,
        type: "sweets menu",
        shortDescription: "Delightful sweets made with pure ingredients and traditional recipes.",
      },
      {
        id: 2,
        type: "savouries menu",
        shortDescription: "Savory snacks perfect for all-day munching and tea-time.",
      },
    ],
  },
  getters: {
    getProducts: state => state.products,
    getCollections: state => state.collections,
    getProduct: (state) => (productId) => {
      let index = state.products.findIndex(product => product.sid == productId);
      return state.products[index];
    },

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
