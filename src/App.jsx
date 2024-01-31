import PageNav from './Components/PageNav/PageNav';
import { Outlet } from "react-router-dom";
import './App.css';

function App() {

  return (
    <>
      <PageNav></PageNav>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default App;
