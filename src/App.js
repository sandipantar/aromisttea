import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
// import About from './Pages/About/about';
// import OrderFood from './Pages/OrderFoodAt/OrderFoodAt';
// import OrderFoodPNR from './Pages/OrderFoodAt/OrderFoodPNR';
// import FoodMenu from './Pages/menu/foodMenu';
// import Contact from './Pages/Contact/Contact';
import Blog from './Pages/Blog/blog';
// import CartNav from './Pages/menu/cartNav';
import Vendor from './Pages/Vendor/vendorRegister';
import VendorLogin from './Pages/Vendor/vendorLogin';
import VendorDashboard from './Pages/Vendor/vendorDashboard';
import VendorRestuarant from './Pages/Vendor/vendorRestuarant';
import VendorMenu from './Pages/Vendor/vendorMenu';
import Newbill from './Pages/Vendor/createBill';
import Cart from './components/Cart';
import Products from './components/Products';
import Filters from './components/Filters';
import './Pages/Vendor/Assets/sb-admin-2.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/style.css';

function App() {
 
  return (
    <div className="App">      
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          {/* <Route exact path="/about" element={<About />}/> */}
          {/* <Route exact path="/OrderFoodAt" element={<OrderFood />}/> */}
          {/* <Route exact path="/OrderFoodPNR" element={<OrderFoodPNR />}/> */}
          {/* <Route exact path="/foodMenu" element={<FoodMenu />}/> */}
          <Route exact path="/cart" element={<Cart />}/>Products
          <Route exact path="/products" element={<Products />}/>Filters
          {/* <Route exact path="/Filters" element={<Filters />}/> */}
          {/* <Route exact path="/cartnav" element={<CartNav />}/> */}
          <Route exact path="/blog" element={<Blog />}/>
          {/* <Route exact path="/contact" element={<Contact />}/> */}
          <Route exact path="/vendorRegister" element={<Vendor />}/>
          <Route exact path="/vendorLogin" element={<VendorLogin />}/>
          <Route exact path="/vendorDashboard" element={<VendorDashboard/>}/>
          <Route exact path="/vendorRestuarant" element={<VendorRestuarant/>}/>
          <Route exact path="/newBill" element={<Newbill/>}/>
          <Route exact path="/vendorMenu" element={<VendorMenu/>}/>
        
        </Routes>
      </Router>
    </div>
  )
}
export default App;
