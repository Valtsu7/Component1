import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header';
import ProductForm from './Components/Productform';
import OrderInfo from './Components/OrderInfo';

import './App.css'

function App() {
  const products = ["Product 1", "Product 2", "Product 3"];
  const prices = [10, 15, 20];

  const [order, setOrder] = useState({
    product: products[0],
    price: prices[0],
    quantity: 1
  });

  return (
    <div className="App">
      <Header  />
      <ProductForm 
        products={products} 
        prices={prices} 
        onOrder={setOrder} 
        currentOrder={order}
      />
      <OrderInfo {...order} />
    </div>
  )
}

export default App;
