import PageNav from './Components/PageNav/PageNav';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import './App.css';

function App() {

  const [cartTotal, setCartTotal] = useState(0);

  const changeCartTotal = (amount) => {
    setCartTotal(cartTotal + amount);
  };

  return (
    <>
      <header>
        <PageNav></PageNav>
        <ShoppingCart cartTotal={cartTotal}></ShoppingCart>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default App;
