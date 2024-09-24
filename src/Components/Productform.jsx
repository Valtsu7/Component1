import React, { useState, useEffect } from 'react';
import './ProductForm.css'; // Uusi CSS-tiedosto

function ProductForm({ products, prices, onOrder, currentOrder }) {
  const [selectedProductIndex, setSelectedProductIndex] = useState(products.indexOf(currentOrder.product));
  const [quantity, setQuantity] = useState(currentOrder.quantity);

  useEffect(() => {
    setSelectedProductIndex(products.indexOf(currentOrder.product));
    setQuantity(currentOrder.quantity);
  }, [currentOrder, products]);

  const handleProductChange = (e) => {
    setSelectedProductIndex(e.target.value);
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0));

  const handleOrder = () => {
    onOrder({
      product: products[selectedProductIndex],
      price: prices[selectedProductIndex],
      quantity: quantity
    });
  };

  return (
    <div className="product-form-container">
      <h2>Select Product</h2>
      
      <div className="product-row">
        <h4>Product </h4>
        <select value={selectedProductIndex} onChange={handleProductChange}>
          {products.map((product, index) => (
            <option key={index} value={index}>{product}</option>
          ))}
        </select>
      </div>

      <div className="quantity-row">
        <h4>Quantity</h4>
        <div>
          <button onClick={decrementQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={incrementQuantity}>+</button>
        </div>
      </div>

      <button onClick={handleOrder} className='button'>Update Order</button>
    </div>
  );
}

export default ProductForm;
