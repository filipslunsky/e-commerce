import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './features/Navbar.jsx';
import Collections from './features/products/Collections';
import Men from './features/products/Men';
import Women from './features/products/Women';
import Contact from './features/info/Contact';
import About from './features/info/About';
import User from './features/user/User';
import Cart from './features/cart/Cart.jsx';

function App() {

  return (
    <>      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Collections />} />
          <Route path='/collections' element={<Collections />} />
          <Route path='/men' element={<Men />} />
          <Route path='/women' element={<Women />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/user' element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
