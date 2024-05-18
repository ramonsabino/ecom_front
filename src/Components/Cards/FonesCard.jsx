import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';

const FonesCard = ({ fones }) => {
  return (
    <Card>
       <CardMedia
        component="img"
        alt={fones.nome}
        height="200"
        image={fones.imagem}
        title={fones.nome}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {fones.nome}
        </Typography>
        <Typography color="textSecondary">
          Tipo: {fones.tipo}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FonesCard;
