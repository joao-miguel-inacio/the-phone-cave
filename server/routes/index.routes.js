const router = require("express").Router();

const phones = [{
  "id": 0,
  "name": "iPhone 7",
  "manufacturer": "Apple",
  "description": "iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.",
  "color": "black",
  "price": 769,
  "image_url": "https://res.cloudinary.com/dvru7nv6q/image/upload/v1662198404/phone-cave/IPhone_7_bil5wk.png",
  "screen": "4,7 inch IPS",
  "processor": "A10 Fusion",
  "ram": 2
},
{
  "id": 1,
  "name": "Galaxy S7",
  "manufacturer": "Samsung",
  "description": "Introducing the smartphone your life can not do without, The Samsung Galaxy S7. Packed with features to keep you both productive and entertained, all in a sleek, slim design that fits comfortably in your hand or pocket.",
  "color": "grey",
  "price": 209,
  "image_url": "https://res.cloudinary.com/dvru7nv6q/image/upload/v1662198404/phone-cave/Galaxy_S7_htgyke.jpg",
  "screen": "5,1 inch Quad-HD",
  "processor": "Snapdragon 820",
  "ram": 4
},
{
  "id": 2,
  "name": "Honor 10",
  "manufacturer": "Huawei",
  "description": "Great phone with an excellent interface. One of the best mid price range phones in the market.",
  "color": "blue",
  "price": 399,
  "image_url": "https://res.cloudinary.com/dvru7nv6q/image/upload/v1662198404/phone-cave/Honor_10_hcye8u.jpg",
  "screen": "5,84 inch Full-HD",
  "processor": "Kirin 970",
  "ram": 6
},
{
  "id": 3,
  "name": "P10 Lite",
  "manufacturer": "Huawei",
  "description": "Great phone with an excellent interface. One of the best mid price range phones in the market.",
  "color": "white",
  "price": 249,
  "image_url": "https://res.cloudinary.com/dvru7nv6q/image/upload/v1662198404/phone-cave/P10_Lite_sfkg98.jpg",
  "screen": "5,2 inch Full-HD",
  "processor": "Kirin 658",
  "ram": 4
},
{
  "id": 4,
  "name": "Nokia 7.1",
  "manufacturer": "Nokia",
  "description": "Great phone with an excellent interface. One of the best mid price range phones in the market.",
  "color": "black",
  "price": 275,
  "image_url": "https://res.cloudinary.com/dvru7nv6q/image/upload/v1662198404/phone-cave/Nokia_7.1_pdfzjp.jpg",
  "screen": "5,84 inch Full-HD",
  "processor": "Octa-core",
  "ram": 4
},
{
  "id": 5,
  "name": "Zen Phone 5",
  "manufacturer": "Asus",
  "description": "Great phone with an excellent interface. One of the best mid price range phones in the market.",
  "color": "black",
  "price": 359,
  "image_url": "https://res.cloudinary.com/dvru7nv6q/image/upload/v1662198404/phone-cave/ZenPhone_5_afvglb.jpg",
  "screen": "6,2 inch Full-HD",
  "processor": "Snapdragon 636",
  "ram": 6
},
{
  "id": 6,
  "name": "MI A2",
  "manufacturer": "Xiaomi",
  "description": "Great phone with an excellent interface. One of the best mid price range phones in the market.",
  "color": "black",
  "price": 179,
  "image_url": "https://res.cloudinary.com/dvru7nv6q/image/upload/v1662198405/phone-cave/Xiaomi_MI_A2_ymooue.jpg",
  "screen": "5,99 inch Full-HD",
  "processor": "Snapdragon 660",
  "ram": 6
},
{
  "id": 7,
  "name": "Moto G6",
  "manufacturer": "Motorola",
  "description": "Great phone with an excellent interface. One of the best mid price range phones in the market.",
  "color": "black",
  "price": 199,
  "image_url": "https://res.cloudinary.com/dvru7nv6q/image/upload/v1662198404/phone-cave/Moto_G6_dg4cwn.png",
  "screen": "5,7 inch Full-HD",
  "processor": "Snapdragon 450",
  "ram": 3
}]

router.get("/", (req, res, next) => {
  res.json("All good in here");
});
router.get("/phones", async (req, res, next) => {
  try {
    return res.status(200).json(phones);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
});

router.get("/phones/:id", async (req, res, next) => {
  const selectedPhone = phones.filter(phone => phone.id == req.params.id);
  try {
    return res.status(200).json(selectedPhone);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
});


module.exports = router;
