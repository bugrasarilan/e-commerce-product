import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';
import {Routes, Route } from "react-router-dom";
import Pay from './pages/Pay';

import Success from './pages/Success';
import Airpods from './pages/Airpods';
import Ipad from './pages/Ipad';
import Iphone from './pages/Iphone';
import Macbook from './pages/Macbook';
import CartProvider from './CartContext';


function App() {
  return (
    <CartProvider>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Success />} />
     
        <Route path="Airpods" element={<Airpods  />} />
        <Route path="Ipad" element={< Ipad/>} />
        <Route path="Iphone" element={<Iphone />} />
        <Route path="Macbook" element={<Macbook />} />
        <Route path="Pay" element={<Pay />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
