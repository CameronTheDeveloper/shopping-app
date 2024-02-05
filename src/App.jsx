import PageNav from './Components/PageNav/PageNav';
import { Outlet } from 'react-router-dom';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import './App.css';

function App() {

  return (
    <>

      <header>
        <PageNav></PageNav>
        <ShoppingCart></ShoppingCart>
      </header>
      <main>
        <Outlet></Outlet>
      </main>

    </>
  );
}

export default App;
