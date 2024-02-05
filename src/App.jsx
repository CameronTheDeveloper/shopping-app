import PageNav from './Components/PageNav/PageNav';
import HomePage from './Components/HomePage/HomePage';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <>

      <header>
        <PageNav></PageNav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>

    </>
  );
}

export default App;
