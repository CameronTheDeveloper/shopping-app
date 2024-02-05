import PageNav from './Components/PageNav/PageNav';
import HomePage from './Components/HomePage/HomePage';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <>
      <PageNav></PageNav>
      <Outlet></Outlet>
    </>
  );
}

export default App;
