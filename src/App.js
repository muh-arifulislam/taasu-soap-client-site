import logo from './logo.svg';
import './App.css';
import Header from './shared/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Subscribe from './shared/Subscribe';
import Footer from './shared/Footer';
import Shop from './pages/Shop/Shop';
import Contact from './pages/Contact/Contact';
import ProductsDetails from './pages/Shop/ProductsDetails';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/shop-all' element={<Shop></Shop>}></Route>
        <Route path='/p/:productName' element={<ProductsDetails></ProductsDetails>}></Route>
        <Route path='/p/product-details' element={<ProductsDetails></ProductsDetails>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
}

export default App;
