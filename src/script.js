// given array 
const products = [
  {
    title: "Wireless Headphones",
    description: "Noise-cancelling over-ear.",
    year: 2023,
    price: 199.99,
    image: "https://example.com/images/headphones.jpg",
    isDiscounted: true,
    isRefurbished: false,
    discount: {
      discountAvailable: "10%"
    },
    quantity: 50
  },
  {
    title: "Smartphone",
    description: "Latest model with 128GB storage and 5G connectivity.",
    year: 2022,
    price: 899.99,
    image: "https://example.com/images/smartphone.jpg",
    isDiscounted: false,
    isRefurbished: true,
    discount: {
      discountAvailable: "0%"
    },
    quantity: 20
  },
  {
    title: "Gaming Laptop",
    description: "High-performance laptop.",
    year: 2023,
    price: 1299.99,
    image: "https://example.com/images/laptop.jpg",
    isDiscounted: true,
    isRefurbished: false,
    discount: {
      discountAvailable: "15%"
    },
    quantity: 10
  },
  {
    title: "Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard with customizable keys.",
    year: 2021,
    price: 89.99,
    image: "https://example.com/images/keyboard.jpg",
    isDiscounted: false,
    isRefurbished: false,
    discount: {
      discountAvailable: "0%"
    },
    quantity: 100
  },
  {
    title: "Smartwatch",
    description: "Water-resistant smartwatch with heart-rate monitor and GPS.",
    year: 2022,
    price: 249.99,
    image: "https://example.com/images/smartwatch.jpg",
    isDiscounted: true,
    isRefurbished: true,
    discount: {
      discountAvailable: "5%"
    },
    quantity: 30
  },
  {
    title: "Bluetooth Speaker",
    description: "Portable speaker with 20W output and 12-hour battery life.",
    year: 2024,
    price: 49.99,
    image: "https://example.com/images/speaker.jpg",
    isDiscounted: false,
    isRefurbished: false,
    discount: {
      discountAvailable: "0%"
    },
    quantity: 200
  },
  {
    title: "4K Monitor",
    description: "Ultra HD monitor with 144Hz refresh rate and HDR support.",
    year: 2023,
    price: 399.99,
    image: "https://example.com/images/monitor.jpg",
    isDiscounted: true,
    isRefurbished: false,
    discount: {
      discountAvailable: "20%"
    },
    quantity: 25
  },
  {
    title: "Fitness Tracker",
    description: "Lightweight tracker with step count, calorie burn, and sleep monitoring.",
    year: 2024,
    price: 69.99,
    image: "https://example.com/images/fitness-tracker.jpg",
    isDiscounted: false,
    isRefurbished: true,
    discount: {
      discountAvailable: "0%"
    },
    quantity: 150
  },
  {
    title: "Drone",
    description: "Camera drone with 4K video and 30-minute flight time.",
    year: 2023,
    price: 999.99,
    image: "https://example.com/images/drone.jpg",
    isDiscounted: true,
    isRefurbished: false,
    discount: {
      discountAvailable: "25%"
    },
    quantity: 15
  },
  {
    title: "Electric Scooter",
    description: "Foldable scooter with a top speed of 25 mph and 30-mile range.",
    year: 2024,
    price: 499.99,
    image: "https://example.com/images/scooter.jpg",
    isDiscounted: false,
    isRefurbished: true,
    discount: {
      discountAvailable: "0%"
    },
    quantity: 40
  }
];

// write code here

//!  1. Console Log All Products

console.log('Tittle       -        $Price');

products.forEach((item, index) => console.log(`   ${index + 1}. ${item.title}: $${item.price} `));



//! 2. Filter Products with Long Descriptions
// Write code logic that filters out all products whose description is LESS than 30 characters long.
// After Filtering:
// Log the title “Products with short Descriptions” and display the filtered items.

const shortDescription = products.filter((item) => item.description.length <= 30);

console.log('Products with short Descriptions');

shortDescription.forEach((item, index) => console.log(`   ${index + 1}. ${item.title}`));



//! 3. Filter Products by Price Range
// Write code logic that filters out all products that are in the price range $200 - $400.
// After Filtering:
// Log the title “Products in Price Range $200-$400” and display the filtered items.

const rangeOfProduct = products.filter((item) => item.price >= 200 && item.price <= 400);

console.log('Products in price range of $200 and $400');

rangeOfProduct.forEach((item, index) => console.log(`   ${index + 1}. ${item.title}: $${item.price}`));


//! 4. Filter Discounted Products
// Write a function that filters only the products where isDiscounted is true.
// After Filtering:
// Log the title “Discounted Products” and display the filtered items.


const discountedProducts = products.filter((item) => item.isDiscounted === true);

console.log('Discounted Products:');

discountedProducts.forEach((item, index) => console.log(`   ${index + 1}. ${item.title}`));


//! 5. Filter Products with 15% or More Discount
// Write code logic that that filters all the products where the discountAvailable property inside discount is 15% or more.
// Hint: You’ll need to convert the string (e.g., "15%") into a number using parseFloat().
// After Filtering:
// Log the title “Products with 15% or More Discount” and display the filtered items.


const largeDiscountProducts = products.filter((item) => parseInt(item.discount.discountAvailable) >= 15);

console.log('Producst with more than 15% discount:');

largeDiscountProducts.forEach((item, index) => console.log(`   ${index + 1}. ${item.title}`));


//! 6. Filter New Products
// Write a function that filters all products that have a year equal to 2024.

const newProducts = products.filter((item) => item.year >= 2024);

console.log('New Products:');

newProducts.forEach((item, index) => console.log(`   ${index + 1}. ${item.title}: ${item.year}`));















