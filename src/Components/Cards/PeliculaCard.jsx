import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const PeliculaCard = ({ pelicula }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {pelicula.nome}
        </Typography>
        <Typography color="textSecondary">
          Tipo: {pelicula.genero}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PeliculaCard;
