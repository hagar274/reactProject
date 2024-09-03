import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import ProductsList from './components/ProductsList';
// import {Routes, Route} from 'react-router-dom';
import About from './components/About';


function App() {
  const routes = ctreateHashRouter;

  return (
    <div className="App">
      <Navbar />
      <Slider />
      <ProductsList />
      <About />
    </div>
  );
}

export default App;
