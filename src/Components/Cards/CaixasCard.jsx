import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Grid, IconButton } from '@material-ui/core';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../../Context/CartContext';

const CaixasCard = ({ caixas }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Card>
      <CardMedia
        component="img"
        alt={caixas.nome}
        height="200"
        image={caixas.imagem}
        title={caixas.nome}
        style={{ objectFit: 'contain' }}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {caixas.nome}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {caixas.tipo}
        </Typography>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <IconButton color="inherit" onClick={() => addToCart(caixas)}>
              <ShoppingCartIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Link to={`/produto/${caixas.id}`}>Ver detalhes</Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CaixasCard;
