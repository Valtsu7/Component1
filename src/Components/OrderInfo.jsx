import React from 'react';
import './OrderInfo.css';

function OrderInfo({ product, price, quantity }) {
  return (
    <div className="order-info">
      <h2>Order Info</h2>
      <div className="info-row">
        <span className="label">Product:</span>
        <span className="value">{product}</span>
      </div>
      <div className="info-row">
        <span className="label">Price:</span>
        <span className="value">${price.toFixed(2)}</span>
      </div>
      <div className="info-row">
        <span className="label">Quantity:</span>
        <span className="value">{quantity}</span>
      </div>
      <div className="info-row total-row">
        <span className="label">Total:</span>
        <span className="value">${(price * quantity).toFixed(2)}</span>
      </div>
    </div>
  );
}

export default OrderInfo;
