import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';
import PeliculaPage from './Pages/Peliculas/PeliculaPage';
import CarregadoresPage from './Pages/Carregadores/CarregadoresPage';
import FonesPage from './Pages/Fones/FonesPage';
import ProductPage from './Pages/Products/ProductsPage';
import SideCart from './Components/SideCart/SideCart';
import { CartProvider } from './Context/CartContext';
import CartPage from './Pages/CartPage/CartPage';
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage';
import CaixasPage from './Pages/CaixasDeSom/CaixasPage';
import LoginPage from './Pages/Login/LoginPage';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cartSidebarOpen, setCartSidebarOpen] = useState(false);

  const handleMenuToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleCartToggle = () => {
    setCartSidebarOpen(!cartSidebarOpen);
  };

  return (
    <CartProvider>
      <Router>
        <div>
          <Navbar onMenuToggle={handleMenuToggle} onCartToggle={handleCartToggle} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {sidebarOpen && (
              <div style={{ width: '240px', position: 'relative', marginTop: '64px' }}>
                <Sidebar open={sidebarOpen} onClose={handleMenuToggle} />
              </div>
            )}
            <div style={{ flexGrow: 1, padding: '16px' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/carrinho" element={<CartPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/peliculas" element={<PeliculaPage />} />
                <Route path="/carregadores" element={<CarregadoresPage />} />
                <Route path="/fones-de-ouvido" element={<FonesPage />} />
                <Route path="/smartwatch" element={<h1>Oi</h1>} />
                <Route path="/caixas-de-som" element={<CaixasPage />} />
                <Route path="/produto/:id" element={<ProductPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
              </Routes>
            </div>
            <SideCart isOpen={cartSidebarOpen} onClose={handleCartToggle} />
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
