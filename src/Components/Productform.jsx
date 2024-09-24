import React, { useState, useEffect } from 'react';

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
    <div>
      <select value={selectedProductIndex} onChange={handleProductChange}>
        {products.map((product, index) => (
          <option key={index} value={index}>{product}</option>
        ))}
      </select>
      <div>
        <button onClick={decrementQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={incrementQuantity}>+</button>
      </div>
      <button onClick={handleOrder}>Update Order</button>
    </div>
  );
}

export default ProductForm;
