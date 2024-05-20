import React from 'react';
import Grid from '@material-ui/core/Grid';
import LaunchCard from '../Cards/LaunchCard';
import { Card, CardActionArea, Container, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { lancamento } from '../../Context/ProductContext'; // Importe os produtos do arquivo lancamento.js

const LaunchProduct = () => {
  return (
    <Container>
      <Typography variant="h6" gutterBottom>
        Lançamentos
      </Typography>
      <Grid container spacing={3}>
        {lancamento.map(produto => ( // Use os produtos importados aqui
          <Grid key={produto.id} item xs={12} sm={4} md={3}>
            <Card>
              <CardActionArea component={Link} to={`/produto/${produto.id}`}>
                <LaunchCard produto={produto} /> {/* Passe o produto como propriedade para o componente LaunchCard */}
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LaunchProduct;
