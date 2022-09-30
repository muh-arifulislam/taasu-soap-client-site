import logo from './logo.svg';
import './App.css';
import Header from './shared/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Subscribe from './shared/Subscribe';
import Footer from './shared/Footer';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
}

export default App;
