import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Users from './Components/Users';
import Contacts from './Components/Contacts';
import Search from './Components/Search';
import Page404 from './Components/Page404';
import Ankit from './Components/Ankit';
import Mahendra from './Components/Mahendra';
import Product from './Components/Product';
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} >
            <Route path='ankit' element={<Ankit />} />
            <Route path='mahendra' element={<Mahendra />} />
          </Route>
          <Route path='/products' element={<Product />} >
            <Route path=':id' element={<ProductDetails />} />
          </Route>
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/search' element={<Search />} />
          <Route path='/*' element={<Page404 />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App;
