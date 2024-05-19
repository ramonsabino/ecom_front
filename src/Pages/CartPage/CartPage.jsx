import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Container, Typography, Button, Grid, Card, CardContent, CardMedia, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const CartPage = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <Typography variant="h6">O carrinho está vazio</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Carrinho de Compras
      </Typography>
      <Grid container spacing={3}>
        {cartItems.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt={item.nome}
                height="200"
                image={item.imagem}
                title={item.nome}
              />
              <CardContent>
                <Typography variant="h5">{item.nome}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Tipo: {item.tipo}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Quantidade: {item.quantity}
                </Typography>
                <div>
                  <IconButton onClick={() => decreaseQuantity(item.id)} color="primary">
                    <RemoveIcon />
                  </IconButton>
                  <IconButton onClick={() => increaseQuantity(item.id)} color="primary">
                    <AddIcon />
                  </IconButton>
                  <IconButton onClick={() => removeFromCart(item.id)} color="secondary">
                    <DeleteIcon />
                  </IconButton>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div style={{ marginTop: '16px' }}>
        <Button variant="contained" color="primary" component={Link} to="/" style={{ marginRight: '8px' }}>
          Continuar Comprando
        </Button>
        <Button variant="contained" color="secondary" component={Link} to="/checkout">
          Finalizar Pedido
        </Button>
      </div>
    </Container>
  );
};

export default CartPage;
