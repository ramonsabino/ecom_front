import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Container, Typography, Button, Grid } from '@material-ui/core';

const CheckoutPage = () => {
  const { cartItems } = useContext(CartContext);

  const handleCheckout = () => {
    // Lógica de checkout (processar pagamento, etc.)
    alert('Compra finalizada com sucesso!');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      <Grid container spacing={3}>
        {cartItems.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4}>
            <Typography variant="h6">{item.nome}</Typography>
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" color="primary" onClick={handleCheckout}>
        Finalizar Compra
      </Button>
    </Container>
  );
};

export default CheckoutPage;
