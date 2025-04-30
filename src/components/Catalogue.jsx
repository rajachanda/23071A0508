import React, { useState } from 'react';
import './Catalogue.css';
import { useCart } from '../context/CartContext';

const Catalogue = () => {
  const { addToCart } = useCart();
  const products = [
    { id: 1, name: 'Wireless Headphones', price: 129.99, image: '🎧', category: 'Electronics' },
    { id: 2, name: 'Smart Watch', price: 199.99, image: '⌚', category: 'Electronics' },
    { id: 3, name: 'Running Shoes', price: 89.99, image: '👟', category: 'Sports' },
    { id: 4, name: 'Backpack', price: 49.99, image: '🎒', category: 'Accessories' },
    { id: 5, name: 'Coffee Maker', price: 79.99, image: '☕', category: 'Home' },
    { id: 6, name: 'Sunglasses', price: 29.99, image: '🕶️', category: 'Fashion' },
    { id: 7, name: 'Gaming Console', price: 499.99, image: '🎮', category: 'Electronics' },
    { id: 8, name: 'Yoga Mat', price: 24.99, image: '🧘‍♀️', category: 'Sports' },
    { id: 9, name: 'Smart Phone', price: 699.99, image: '📱', category: 'Electronics' },
    { id: 10, name: 'Desk Lamp', price: 34.99, image: '💡', category: 'Home' },
    { id: 11, name: 'Winter Jacket', price: 129.99, image: '🧥', category: 'Fashion' },
    { id: 12, name: 'Tennis Racket', price: 79.99, image: '🎾', category: 'Sports' },
    { id: 13, name: 'Wallet', price: 39.99, image: '👛', category: 'Accessories' },
    { id: 14, name: 'Blender', price: 69.99, image: '🥤', category: 'Home' },
    { id: 15, name: 'Laptop', price: 999.99, image: '💻', category: 'Electronics' },
    { id: 16, name: 'Dress', price: 79.99, image: '👗', category: 'Fashion' },
    { id: 17, name: 'Basketball', price: 29.99, image: '🏀', category: 'Sports' },
    { id: 18, name: 'Table Clock', price: 24.99, image: '🕰️', category: 'Home' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(products.map(product => product.category))];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product) => {
    addToCart(product);
    // Optional: Add a toast notification here
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="catalogue-container">
      <h1 className="catalogue-title">Product Catalogue</h1>
      
      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">{product.image}</div>
            <div className="product-info">
              <h2>{product.name}</h2>
              <p className="product-category">{product.category}</p>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <button 
                className="add-to-cart-btn" 
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;