export const products = [
  {
    id: 1,
    name: 'Royal Canin Cat Food',
    price: 190,
    imageUrl: 'https://tailybuddy.com/products/344/KITTEN_newpack_01.jpg',
    flavors: ["Chicken", "Salmon"] 
  },
  {
    id: 2,
    name: 'Me-O Cat Food',
    price: 180,
    imageUrl: 'https://www.dohome.co.th/media/catalog/product/cache/e446f15aaa8dc66b80b7a0df334f7c5a/1/0/10158088_1200_1.jpg',
    flavors: ["Chicken", "Salmon"]  
  },
  {
    id: 3,
    name: 'Kaniva',
    price: 230,
    imageUrl: 'https://www.feedmeplease.com/images/pdimg/4223/1.webp',
    
    flavors: ["Chicken", "Salmon Tuna&Rice"]
  },
  {
    id: 4,
    name: 'Buzz',
    price: 650,
    imageUrl: 'https://www.buzzpetsfood.com/wp-content/uploads/2021/08/02_C-Salmon.png',
  },
  {
    id: 5,
    name: 'PURINA ONE',
    price: 1599,
    imageUrl: 'https://www.feedmeplease.com/images/pdimg/630/1.webp',
    flavors:  ["Salmon Tuna","Indoor","Kitten"]
  },
  {
    id: 6,
    name: 'Hill’s',
    price: 800,
    imageUrl: 'https://lh3.googleusercontent.com/proxy/B4obbgOgnBrYbsqyPG-TZLuTojlRm3tkXmTxX7T6JvpZngWGfI1wz6ma4ppZ5kmbbL76uznJc6RPYsp5Yo_h5W1Sl7pO3jt4NpWLM-TrDd9A_XEcO06mopncimtfNJSKdTZe81M6AA',
    flavors: ["Chicken", "Salmon Tuna"]
  },
  {
    id: 7,
    name: 'MAXIMA',
    price: 900,
    imageUrl: 'https://cf.shopee.co.th/file/25b41404c14363244477f4f302d6782a',
    flavors: ["mutton (เนื้อแกะ)"]
  },
  {
    id: 8,
    name: 'PROWILD',
    price: 1200,
    imageUrl: 'https://ipetshop.co.th/wp-content/uploads/2021/08/Prowild-cat-food.png',
    flavors: ["Chicken & Sweet Potato", "Tuna & sweet Potato"]
  },
  {
    id: 9,
    name: 'Blackhawk productnation',
    price: 950,
    imageUrl: 'https://www.feedmeplease.com/images/pdimg/3466/1.webp',
    flavors: ["Cat Adult Formula Fish", "Cat Adult อาหารแมวโต สูตรเป็ดและปลา","Formula Chicken & Rice "]
  },
  {
    id: 10,
    name: 'Orijen',
    price: 1200,
    imageUrl: 'https://perromart.com.sg/assets/inv_product/60/68/inv_product-1713495524495.jpg',
    flavors: ["Orijen Fit & Trim Cat Food","ORIJEN Kitten Cat Food "]
  },
];

// รายการคูปอง
export const coupons = [
  { code: 'SAVE40', description: 'ซื้อขั้นต่ำ 500 บาท ลด 40%', minAmount: 500, discount: 0.4 },
  { code: 'SAVE60', description: 'ซื้อขั้นต่ำ 1000 บาท ลด 60%', minAmount: 1000, discount: 0.6 },
  { code: 'FREESHIP200', description: 'ส่งฟรีขั้นต่ำ 200 บาท', minAmount: 200, freeShipping: true },
  { code: 'FREESHIP', description: 'ส่งฟรีขั้นต่ำ 0 บาท', minAmount: 0, freeShipping: true },
];
