// src/Components/Cards/LaunchCard.jsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    margin: 0,
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)', // Sombra mais pronunciada
    borderRadius: '8px',
    transition: 'transform 0.3s ease-in-out',
    backgroundColor: '#cccfca',
    '&:hover': {
      transform: 'scale(1.02)',
    },
  },
  media: {
    height: 140,
  },
}));



const LaunchCard = ({ produto }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia component="img" alt={produto.nome} className={classes.media} image={produto.imagem} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {produto.nome}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Tipo: {produto.tipo}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LaunchCard;
