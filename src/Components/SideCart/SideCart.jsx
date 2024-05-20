import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, IconButton, Typography, Button } from '@material-ui/core';
import { CartContext } from '../../Context/CartContext';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';

const SideCart = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const history = useLocation();

  const handleCloseAndStay = () => {
    onClose();
  };

  const handleCloseAndContinueShopping = () => {
    onClose();
    // Manter a localização atual ao clicar em "Continuar comprando"
  };

  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <div style={{ width: '300px', padding: '16px' }}>
        <IconButton onClick={onClose} style={{ float: 'right' }}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" style={{ marginBottom: '16px' }}>Seu Carrinho</Typography>
        <List>
          {cart.map((item) => (
            <ListItem key={item.id}>
              <ListItemText
                primary={item.nome}
                secondary={`Quantidade: ${item.quantity}`}
              />
              <IconButton onClick={() => decreaseQuantity(item.id)}>-</IconButton>
              <IconButton onClick={() => increaseQuantity(item.id)}>+</IconButton>
              <IconButton onClick={() => removeFromCart(item.id)}><DeleteIcon /></IconButton>
            </ListItem>
          ))}
        </List>
        <div style={{ marginTop: '16px' }}>
          <Button variant="contained" color="primary" onClick={handleCloseAndContinueShopping} style={{ marginRight: '8px' }}>
            Continuar comprando
          </Button>
          <Button variant="contained" color="secondary" component={Link} to="/carrinho">
            Finalizar Pedido
          </Button>
        </div>
      </div>
    </Drawer>
  );
};

export default SideCart;
