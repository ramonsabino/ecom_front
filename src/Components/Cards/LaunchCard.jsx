// src/Components/Cards/LaunchCard.jsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

const LaunchCard = ({ produto }) => (
  <Card>
    <CardMedia component="img" alt={produto.nome} height="140" image={produto.imagem} />
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

export default LaunchCard;
