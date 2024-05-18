import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';
import PeliculasPage from './Pages/Peliculas/PeliculaPage';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div>
        <Navbar onMenuToggle={handleMenuToggle} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {sidebarOpen && (
            <div style={{ width: '240px', position: 'relative', marginTop: '64px' }}>
              <Sidebar open={sidebarOpen} onClose={handleMenuToggle} />
            </div>
          )}
          <div style={{ flexGrow: 1, padding: '16px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/carrinho"  />
              <Route path="/login"  />
              <Route path="/peliculas"  element={<PeliculasPage />}/>
              <Route path="/carregadores"  />
              <Route path="/fones-de-ouvido"  />
              <Route path="/smartwatch"  />
              <Route path="/caixas-de-som" />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
