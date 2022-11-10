import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/about';
import OrderFood from './components/Pages/OrderFoodAt/OrderFoodAt';
import OrderFoodPNR from './components/Pages/OrderFoodAt/OrderFoodPNR';
import FoodMenu from './components/Pages/menu/foodMenu';
import Contact from './components/Pages/Contact/Contact';
import Blog from './components/Pages/Blog/blog';
import CartNav from './components/Pages/menu/cartNav';
import Vendor from './components/Pages/Vendor/vendorRegister';
import VendorLogin from './components/Pages/Vendor/vendorLogin';
import VendorDashboard from './components/Pages/Vendor/vendorDashboard';
import VendorRestuarant from './components/Pages/Vendor/vendorRestuarant';
import VendorMenu from './components/Pages/Vendor/vendorMenu';
import Cart from './components/Cart';
import Products from './components/Products';
import Filters from './components/Filters';
import './components/Pages/Vendor/Assets/sb-admin-2.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/style.css';

function App() {
 
  return (
    <div className="App">      
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/OrderFoodAt" element={<OrderFood />}/>
          <Route exact path="/OrderFoodPNR" element={<OrderFoodPNR />}/>
          <Route exact path="/foodMenu" element={<FoodMenu />}/>
          <Route exact path="/cart" element={<Cart />}/>Products
          <Route exact path="/products" element={<Products />}/>Filters
          {/* <Route exact path="/Filters" element={<Filters />}/> */}
          <Route exact path="/cartnav" element={<CartNav />}/>
          <Route exact path="/blog" element={<Blog />}/>
          <Route exact path="/contact" element={<Contact />}/>
          <Route exact path="/vendorRegister" element={<Vendor />}/>
          <Route exact path="/vendorLogin" element={<VendorLogin />}/>
          <Route exact path="/vendorDashboard" element={<VendorDashboard/>}/>
          <Route exact path="/vendorRestuarant" element={<VendorRestuarant/>}/>
          
          <Route exact path="/vendorMenu" element={<VendorMenu/>}/>
        
        </Routes>
      </Router>
    </div>
  )
}
export default App;
