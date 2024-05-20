import React, { useState } from 'react';
import { Container, Typography, Button, makeStyles, Modal, Box } from '@material-ui/core';
import { auth, googleProvider } from '../../firebaseConfig';
import { signInWithPopup } from "firebase/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    marginBottom: '-20vh', // Subir o conteúdo um pouco
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    marginTop: theme.spacing(2),
    display: 'block',
    width: '100%',
    maxWidth: '300px',
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState('');

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      setUserName(user.displayName);
      setOpen(true);
    } catch (error) {
      console.error("Erro ao fazer login com o Google:", error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container className={classes.root}>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>Login</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGoogleLogin}
        className={classes.button}
      >
        Login com Google
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        className={classes.modal}
      >
        <Box className={classes.paper}>
          <Typography variant="h5">Bem-vindo, {userName}!</Typography>
          <Typography variant="body1">Boas Compras!</Typography>
          <Button variant="contained" color="primary" onClick={handleClose} style={{ marginTop: '16px' }}>
            Fechar
          </Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default LoginPage;
