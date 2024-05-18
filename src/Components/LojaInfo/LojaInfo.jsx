import React from 'react';
import { Container, Typography } from '@material-ui/core';

const LojaInfo = () => {
  return (
    <Container style={{ marginTop: '20px', marginBottom: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Sobre a Nossa Loja
      </Typography>
      <Typography variant="body1" paragraph>
        Bem-vindo à nossa loja! Oferecemos uma ampla gama de produtos de alta qualidade para atender todas as suas necessidades. Desde eletrônicos de última geração até acessórios essenciais, temos tudo o que você precisa. Navegue pelo nosso site e descubra nossas ofertas exclusivas e os lançamentos mais recentes.
      </Typography>
    </Container>
  );
};

export default LojaInfo;
