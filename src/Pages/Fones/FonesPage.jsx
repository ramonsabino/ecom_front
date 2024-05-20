import React from 'react';
import FonesCard from '../../Components/Cards/FonesCard';
import airdotsImage from '../../Assets/fones/foneAirDots.jpg';
import hrebosImage from '../../Assets/fones/foneHrebosIos.jpg';
import lehmoxImage from '../../Assets/fones/foneLehmox.jpg';
import { Container, Grid } from '@material-ui/core';

const produtos = [
  { id: 1, nome: 'AirDots Xiaomi', tipo: 'Sem-fio', descricao: 'Fones bluetooth AirDots com 12h de duração', imagem: airdotsImage },
  { id: 2, nome: 'Fone HRebos Iphone', tipo: 'iOS', descricao: 'Fone HRebos compatível com dispositivos iOS', imagem: hrebosImage },
  { id: 3, nome: 'Fone Lehmox Iphone', tipo: 'Com Fio', descricao: 'Fone Lehmox com fio para iPhone', imagem: lehmoxImage },
];

const FonesPage = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        {produtos.map((fone) => (
          <Grid item xs={12} sm={6} md={4} key={fone.id}>
            <FonesCard fones={fone} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FonesPage;
