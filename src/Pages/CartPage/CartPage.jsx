import React, { useContext } from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import { CartContext } from '../../Context/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';


const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <Container>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>Carrinho de Compras</Typography>
      {cart.length === 0 ? (
        <Typography variant="body1">Seu carrinho está vazio.</Typography>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} style={{ marginBottom: '16px' }}>
              <Typography variant="h6">{item.nome}</Typography>
              <Typography variant="subtitle1">Tipo: {item.tipo}</Typography>
              <Typography variant="subtitle1">Quantidade: {item.quantity}</Typography>
              <Button variant="contained" color="secondary" onClick={() => removeFromCart(item.id)}><DeleteIcon /></Button>
            </div>
          ))}
          <Button variant="contained" color="primary" component={Link} to="/checkout">Finalizar Compra</Button>
        </>
      )}
    </Container>
  );
};

export default CartPage;
