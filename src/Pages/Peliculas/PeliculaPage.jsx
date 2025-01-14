import React from 'react';
import Grid from '@material-ui/core/Grid';
import FiltroMenu from '../../Components/FiltroMenu/FiltroMenu';  // Componente do menu de filtro
import PeliculaCard from '../../Components/Cards/PeliculaCard'; // Componente do cartão de película
const PeliculasPage = () => {
  // Supondo que você tenha uma lista de películas
  const peliculas = [
    { id: 1, nome: 'Pelicula 1', genero: '3D' },
    { id: 2, nome: 'Pelicula 2', genero: 'Vidro' },
    { id: 3, nome: 'Pelicula 3', genero: '3D Privacy Vidro' },
    { id: 4, nome: 'Pelicula 4', genero: '3D Privacy Cerâmica' },

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
            {peliculas.map(pelicula => (
              <Grid key={pelicula.id} item xs={4}>
                <PeliculaCard pelicula={pelicula} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default PeliculasPage;
