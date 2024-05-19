import React from 'react';
import Grid from '@material-ui/core/Grid';
import FonesCard from '../Cards/FonesCard';
import PeliculaCard from '../Cards/PeliculaCard';
import CarregadorCard from '../Cards/CarregadorCard'
import CarregadoresPage from '../../Pages/Carregadores/CarregadoresPage';

import { Card, CardActionArea, Container, Typography } from '@material-ui/core';
import airdotsImage from '../../Assets/foneAirDots.jpg';
import hrebosImage from '../../Assets/foneHrebosIos.jpg';
import lehmoxImage from '../../Assets/foneLehmox.jpg';
import { Link } from 'react-router-dom';

const LaunchProduct = () => {
  // Exemplo de lançamentos
  const lancamentos = [
    { id: 1, nome: 'AirDots Xiaomi', tipo: 'Sem-fio', imagem: airdotsImage },
    { id: 2, nome: 'Fone Hrebos', tipo: 'iOS', imagem: hrebosImage },
    { id: 3, nome: 'Fone PMCell Iphone', tipo: 'Com Fio', imagem: lehmoxImage},
    { id: 4, nome: 'Carregador completo Lehmox', tipo: 'Tipo C' },
    { id: 5, nome: 'Carregador completo Kaidi', tipo: 'iOS' },
    { id: 6, nome: 'Carregador completo Hrebos', tipo: 'V8' },
    { id: 7, nome: 'Carregador completo Inova', tipo: 'Tipo C / iOS' },
    // Adicione mais lançamentos conforme necessário
  ];

  return (
    <Container>
    <Typography variant="h6" gutterBottom>
      Lançamentos
    </Typography>
    <Grid container spacing={3}>
      {lancamentos.map(lancamento => (
        <Grid key={lancamento.id} item xs={12} sm={4} md={3}>
          <Card>
            <CardActionArea component={Link} to={`/produto/${lancamento.id}`}>
              <FonesCard fones={lancamento} />
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
  );
};

export default LaunchProduct;
