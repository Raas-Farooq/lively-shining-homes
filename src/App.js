import logo from './logo.svg';
import HousesRender from './HousesRender';
import style from './app.module.css';
import Navbar from './navbar';
import Search from './searchHome';


function App() {
  console.log("App js Runs ")
  return (
    <div className={style.App}>
      <Navbar />
      <Search />
      <HousesRender />
      
    </div>
  );
}

export default App;
