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
                <Route path="/carrinho" element={<h1>Oi</h1>} />
                <Route path="/login" element={<h1>Oi</h1>} />
                <Route path="/peliculas" element={<PeliculaPage />} />
                <Route path="/carregadores" element={<CarregadoresPage />} />
                <Route path="/fones-de-ouvido" element={<FonesPage />} />
                <Route path="/smartwatch" element={<h1>Oi</h1>} />
                <Route path="/caixas-de-som" element={<h1>Oi</h1>} />
                <Route path="/produto/:id" element={<ProductPage />} />
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
