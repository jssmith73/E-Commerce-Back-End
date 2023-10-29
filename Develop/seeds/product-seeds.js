const { Product } = require('../models');

const productData = [
  {
    product_name: 'Styled T-Shirt',
    price: 24.99,
    stock: 8,
    category_id: 1,
  },
  {
    product_name: 'Loafers',
    price: 60.0,
    stock: 48,
    category_id: 5,
  },
  {
    product_name: 'Branded Basketball Hat',
    price: 22.99,
    stock: 42,
    category_id: 4,
  },
  {
    product_name: 'Greatet Hits of the 80s',
    price: 17.99,
    stock: 47,
    category_id: 3,
  },
  {
    product_name: 'Swim Shorts',
    price: 29.99,
    stock: 26,
    category_id: 2,
  }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
