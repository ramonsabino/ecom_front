import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const FiltroMenu = () => {
  const classes = useStyles();

  // Exemplo de opções de filtro
  const opcoesFiltro = [
    { id: 1, nome: 'Todos' },
    { id: 2, nome: '3D' },
    { id: 3, nome: 'Vidro' },
    { id: 4, nome: 'Privacy' },
    // Adicione mais opções de filtro conforme necessário
  ];

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="filtro-menu">
        {opcoesFiltro.map(opcao => (
          <ListItem button key={opcao.id}>
            <ListItemText primary={opcao.nome} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default FiltroMenu;
