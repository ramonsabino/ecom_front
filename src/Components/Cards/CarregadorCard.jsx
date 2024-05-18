import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const CarregadorCard = ({ carregador }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {carregador.nome}
        </Typography>
        <Typography color="textSecondary">
          Tipo: {carregador.tipo}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CarregadorCard;
