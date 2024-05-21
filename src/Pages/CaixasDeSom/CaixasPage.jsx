import React from 'react';
import Grid from '@material-ui/core/Grid';
import FiltroMenu from '../../Components/FiltroMenu/FiltroMenu';  // Componente do menu de filtro
import caixaInova from '../../Assets/caixasDeSom/caixaInova.jpg'
import caixaJbl from '../../Assets/caixasDeSom/caixaJbl.jpg'
import caixaMinifun from '../../Assets/caixasDeSom/caixaMinifun.jpg'
import caixaLehmox from '../../Assets/caixasDeSom/caixaLehmox.jpg'
import CaixasCard from '../../Components/Cards/CaixasCard';
import { Container } from '@material-ui/core';

const CaixasPage = () => {
  // Supondo que você tenha uma lista de películas
  const caixa = [
    { id: 1, nome: 'Caixa de Som JBL', tipo: 'Bluetooth e Pendrive', imagem: caixaJbl },
    { id: 2, nome: 'Caixa de Som Inova', tipo: 'Bluetooth, Pendrive e Radio', imagem: caixaInova},
    { id: 3, nome: 'Mini alto falante', tipo: 'Bluetooth e Cartão', imagem: caixaMinifun},
    { id: 4, nome: 'Caixa de Som Lehmox', tipo: 'Bluetooth, Auxiliar, Pendrive e Radio', imagem: caixaLehmox },

    // Adicione mais películas conforme necessário
  ];

  return (
    <Container>
      <Grid container spacing={3}>
        {caixa.map((caixas) => (
          <Grid item xs={12} sm={6} md={4} key={caixas.id}>
            <CaixasCard caixas={caixas} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CaixasPage;
