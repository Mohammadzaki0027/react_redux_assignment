import logo from './logo.svg';
import './App.css';
import styles from "./Styles/Music.module.css"
import MainRoutes from "./Pages/MainRoutes"
import { useSelector } from 'react-redux';
import EditMusic from './Pages/EditMusic';

function App() {

  return (
    <div className="App">
       <div className={styles.nav}>
        <h1 className={styles.h1tag}>Music App Poster</h1>
        </div>
   
      <MainRoutes></MainRoutes>

    </div>
  );
}

export default App;
