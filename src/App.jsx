import PageNav from './Components/PageNav/PageNav';
import { useState, createContext } from 'react';
import { Outlet } from 'react-router-dom';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import './App.css';


export const ShopContext = createContext({
  changeCartTotal: () => {}
});

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
        <ShopContext.Provider value={{changeCartTotal}}>
          <Outlet></Outlet>
        </ShopContext.Provider>
      </main>
    </>
  );
}

export default App;
