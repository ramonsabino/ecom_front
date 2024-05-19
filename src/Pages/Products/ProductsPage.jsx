import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardMedia, CardContent, Grid, IconButton } from '@material-ui/core';
import { CartContext } from '../../Context/CartContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import airdotsImage from '../../Assets/foneAirDots.jpg';
import hrebosImage from '../../Assets/foneHrebosIos.jpg';
import lehmoxImage from '../../Assets/foneLehmox.jpg';
import SideCart from '../../Components/SideCart/SideCart';

const produtos = [
  { id: 1, nome: 'AirDots Xiaomi', tipo: 'Sem-fio', descricao: 'Fones bluetooth AirDots com 12h de duração', imagem: airdotsImage },
  { id: 2, nome: 'Fone HRebos Iphone', tipo: 'iOS', descricao: 'Fone HRebos compatível com dispositivos iOS', imagem: hrebosImage },
  { id: 3, nome: 'Fone Lehmox Iphone', tipo: 'Com Fio', descricao: 'Fone Lehmox com fio para iPhone', imagem: lehmoxImage },
];

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart, cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const produto = produtos.find(p => p.id === parseInt(id));

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (!produto) {
    return <Typography variant="h6">Produto não encontrado</Typography>;
  }

  const handleAddToCart = () => {
    addToCart(produto);
    toggleSidebar();
  };

  return (
    <Container>
      <Card>
        <CardMedia
          component="img"
          alt={produto.nome}
          height="200"
          image={produto.imagem}
          title={produto.nome}
          style={{ objectFit: 'contain' }}
        />
        <CardContent style={{ maxWidth: '500px', margin: '0 auto' }}>
          <Grid container alignItems="center">
            <Grid item xs={10}>
              <Typography variant="h4" component="h2">
                {produto.nome}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                Tipo: {produto.tipo}
              </Typography>
              <Typography variant="body1" paragraph>
                {produto.descricao}
              </Typography>
            </Grid>
            <Grid item xs={2} style={{ textAlign: 'right' }}>
              <IconButton color="inherit" onClick={handleAddToCart}>
                <ShoppingCartIcon fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <SideCart 
        isOpen={isSidebarOpen} 
        cart={cart} 
        toggleSidebar={toggleSidebar} 
        removeFromCart={removeFromCart} 
        updateQuantity={updateQuantity} 
      />
    </Container>
  );
};

export default ProductPage;
