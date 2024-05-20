import React from 'react';
import Grid from '@material-ui/core/Grid';
import FiltroMenu from '../../Components/FiltroMenu/FiltroMenu';  // Componente do menu de filtro
import caixaInova from '../../Assets/caixasDeSom/caixaInova.jpg'
import caixaJbl from '../../Assets/caixasDeSom/caixaJbl.jpg'
import caixaMinifun from '../../Assets/caixasDeSom/caixaMinifun.jpg'
import caixaLehmox from '../../Assets/caixasDeSom/caixaLehmox.jpg'
import CaixasCard from '../../Components/Cards/CaixasCard';

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
            {caixa.map(caixa => (
              <Grid key={caixa.id} item xs={4}>
                <CaixasCard caixa={caixa} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default CaixasPage;
