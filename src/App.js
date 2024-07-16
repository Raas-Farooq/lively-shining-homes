import logo from './logo.svg';
import HousesRender from './HousesRender';
import style from './app.module.css';
import Navbar from './navbar';
import Search from './searchHome';
import ShiningHouses from './shiningHouseData';
import { useGlobalContext } from './myContext';

function App() {
  const {searchInput} = useGlobalContext();
  
  return (
    <div className={style.App}>
      <Navbar />
      <Search />
      
      
    </div>
  );
}

export default App;
