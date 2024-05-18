import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Route, Routes, useNavigate } from 'react-router-dom';

const Sidebar = ({ open, onClose }) => {
  const categories = [
    { name: 'Películas', path: '/peliculas' },
    { name: 'Carregadores', path: '/carregadores' },
    { name: 'Fones de Ouvido', path: '/fones-de-ouvido' },
    { name: 'SmartWatch', path: '/smartwatch' },
    { name: 'Caixas de Som', path: '/caixas-de-som' },
  ];

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    onClose();
  };
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
    <List>
      {categories.map((category, index) => (
        <ListItem button key={index} onClick={() => handleNavigation(category.path)}>
          <ListItemText primary={category.name} />
        </ListItem>
      ))}
    </List>
  </Drawer>
  );
};

export default Sidebar;
