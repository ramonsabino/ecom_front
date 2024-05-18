import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import '../Navbar/Navbar.css'

const Navbar = ({ onMenuToggle }) => {
  return (
    <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={onMenuToggle}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit'}} >
          <a href='/'>
            <img src='../Assets/IconLR.png'alt="" srcset="" />
          </a>
        </Link> 
      </Typography>
      <Button color="inherit" component={Link} to="/carrinho">Carrinho</Button>
      <Button color="inherit" component={Link} to="/login">Login</Button>
    </Toolbar>
  </AppBar>
  );
};

export default Navbar;
