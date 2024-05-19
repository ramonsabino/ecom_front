import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../Navbar/Navbar.css'
import iconLr from '../../Assets/IconLR.png'

const Navbar = ({ onMenuToggle }) => {
  return (
    <AppBar position="static">
    <Toolbar style={{background: '#000'}}>
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={onMenuToggle}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src={iconLr} alt="Logo" style={{ height: '100px' }} />
          </Link>
      </Typography>
      <NavLink to='wa.me/5585997651791'>
        <WhatsAppIcon fontSize='large' />
      </NavLink>
      <Link to='instagram.com/lrcases.store'>
        <InstagramIcon fontSize='large' />
      </Link>
      <Button color="inherit" component={Link} to="/carrinho" >Carrinho</Button>
      <Button color="inherit" component={Link} to="/login">Login</Button>
    </Toolbar>
  </AppBar>
  );
};

export default Navbar;
