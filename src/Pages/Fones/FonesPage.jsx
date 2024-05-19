import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Grid, IconButton } from '@material-ui/core';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../../Context/CartContext';

const FonesCard = ({ fones }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Card>
      <CardMedia
        component="img"
        alt={fones.nome}
        height="200"
        image={fones.imagem}
        title={fones.nome}
        style={{ objectFit: 'contain' }}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {fones.nome}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {fones.tipo}
        </Typography>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <IconButton color="inherit" onClick={() => addToCart(fones)}>
              <ShoppingCartIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Link to={`/produto/${fones.id}`}>Ver detalhes</Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default FonesCard;
