import React from 'react';
import Grid from '@material-ui/core/Grid';
import FiltroMenu from '../../Components/FiltroMenu/FiltroMenu';  // Componente do menu de filtro
import FonesCard from '../../Components/Cards/FonesCard';

const FonesPage = () => {
  // Supondo que você tenha uma lista de películas
  const fones = [
    { id: 1, nome: 'AirDots Xiaomi', tipo: 'Sem-fio', imagem: '../../Assets/foneAirDots.jpg'},
    { id: 2, nome: 'Fone HRebos Iphone', tipo: 'iOS', imagem: '../../Assets/foneHrebosIos.jpg' },
    { id: 3, nome: 'Fone Lehmox Iphone', tipo: 'Com Fio', imagem: '../../Assets/foneLehmox.jpg' },

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
            {fones.map(fones => (
              <Grid key={fones.id} item xs={4}>
                <FonesCard fones={fones} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default FonesPage;
