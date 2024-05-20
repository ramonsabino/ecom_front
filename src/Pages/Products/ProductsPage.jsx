import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardMedia, CardContent, Grid, IconButton } from '@material-ui/core';
import { CartContext } from '../../Context/CartContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SideCart from '../../Components/SideCart/SideCart';
import { lancamento } from '../../Context/ProductContext'; // Importe os produtos do arquivo lancamento.js

const ProductPage = () => {
  const { addToCart, cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  // Busca o produto pelo ID
  useEffect(() => {
    const produtoEncontrado = lancamento.find(p => p.id === parseInt(id)); // Use os produtos importados aqui
    setProduto(produtoEncontrado);
  }, [id]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
      <SideCart isOpen={isSidebarOpen} cart={cart} onClose={toggleSidebar} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
    </Container>
  );
};

export default ProductPage;
