import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';
import Cart from './pages/Cart';
import ProductDescription from './components/ProductDescription';
import { CartProvider } from 'react-use-cart';
import ProductfilterPage from './components/ProductfilterPage';

function App() {
  return (
    <>
    <CartProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:productName' element={<ProductDescription/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/filter' element ={<ProductfilterPage/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/admin' element={<AdminDashboard/>}/>
    </Routes>
    </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
