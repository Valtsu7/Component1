import React from 'react';

function OrderInfo({ product, price, quantity }) {
  return (
    <div>
      <h2>Order Info</h2>
      <p>Product: {product}</p>
      <p>Price: ${price.toFixed(2)}</p>
      <p>Quantity: {quantity}</p>
      <p>Total: ${(price * quantity).toFixed(2)}</p>
    </div>
  );
}

export default OrderInfo;
