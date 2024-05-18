import React from 'react';
import Grid from '@material-ui/core/Grid';
import FonesCard from '../Cards/FonesCard';
import { Container, Typography } from '@material-ui/core';

const LaunchProduct = () => {
  // Exemplo de lançamentos
  const lancamentos = [
    { id: 1, nome: 'AirDots Xiaomi', tipo: 'Sem-fio', imagem: '../Assets/foneAirDots.jpg' },
    { id: 2, nome: 'Fone Hrebos', tipo: 'iOS', imagem: '../Assets/foneHrebosIos.jpg' },
    { id: 3, nome: 'Fone PMCell Iphone', tipo: 'Com Fio', imagem: '../Assets/foneLehmox.jpg' },
    // Adicione mais lançamentos conforme necessário
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Lançamentos
      </Typography>
      <Grid container spacing={3}>
        {lancamentos.map(lancamento => (
          <Grid key={lancamento.id} item xs={12} sm={6} md={4}>
            <FonesCard fones={lancamento} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LaunchProduct;
