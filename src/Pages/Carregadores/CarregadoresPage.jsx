import React from 'react';
import Grid from '@material-ui/core/Grid';
import FiltroMenu from '../../Components/FiltroMenu/FiltroMenu';  // Componente do menu de filtro
import CarregadorCard from '../../Components/Cards/CarregadorCard'; // Componente do cartão de película

const CarregadoresPage = () => {
  // Supondo que você tenha uma lista de películas
  const carregador = [
    { id: 1, nome: 'Carregador completo Lehmox', tipo: 'Tipo C' },
    { id: 2, nome: 'Carregador completo Kaidi', tipo: 'iOS' },
    { id: 3, nome: 'Carregador completo Hrebos', tipo: 'V8' },
    { id: 4, nome: 'Carregador completo Inova', tipo: 'Tipo C / iOS' },

    // Adicione mais películas conforme necessário
  ];

  return (
    <div>
      <Grid container spacing={3}>
        {/* Menu de filtro à esquerda */}
        <Grid item xs={3}>
          <FiltroMenu />
        </Grid>
        {/* Grid central com as películas */}
        <Grid item xs={9}>
          <Grid container spacing={3}>
            {/* Mapeia cada película para um cartão */}
            {carregador.map(carregador => (
              <Grid key={carregador.id} item xs={4}>
                <CarregadorCard carregador={carregador} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default CarregadoresPage;
