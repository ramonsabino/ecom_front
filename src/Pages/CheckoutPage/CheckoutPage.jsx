import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Button, TextField, Grid, Paper, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { CartContext } from '../../Context/CartContext';

const CheckoutPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    email: '',
    telefone: '',
    cep: '',
    opcaoEntrega: 'retirada',
    frete: 0,
  });

  const tabelaFrete = {
    '60340': 10, // Jardim Iracema
    '60320': 5,  // Padre Andrade
    '60331': 15, // Barra do Ceará
    // Adicione outros CEPs e valores conforme necessário
  };

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'cep') {
      if (value.length === 8) {
        try {
          const response = await axios.get(`https://viacep.com.br/ws/${value}/json/`);
          const { logradouro, bairro, localidade, uf, cep } = response.data;
          const cepPrefix = cep.replace('-', '').substr(0, 5); // Obtém os primeiros 5 dígitos do CEP
          const frete = tabelaFrete[cepPrefix] || 0; // Define o frete baseado na tabela ou 0 se não encontrado

          setFormData((prevData) => ({
            ...prevData,
            endereco: `${logradouro}, ${bairro}, ${localidade} - ${uf}`,
            frete: frete,
          }));
        } catch (error) {
          console.error('Erro ao buscar o CEP:', error);
        }
      } else {
        // Se o valor do CEP for apagado ou for menor que 8 caracteres, limpar as informações do endereço e frete
        setFormData((prevData) => ({
          ...prevData,
          endereco: '',
          frete: 0,
        }));
      }
    }
  };

  const handleEntregaChange = (e) => {
    setFormData({
      ...formData,
      opcaoEntrega: e.target.value,
      frete: e.target.value === 'retirada' ? 0 : formData.frete,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert('Seu carrinho está vazio. Adicione produtos ao carrinho antes de finalizar a compra.');
      return;
    }

    // Construir a mensagem
    let message = `*Informações do Cliente:*\n\n`;
    message += `*Nome:* ${formData.nome}\n`;
    message += `*Endereço:* ${formData.endereco}\n`;
    message += `*Email:* ${formData.email}\n`;
    message += `*Telefone:* ${formData.telefone}\n\n`;
    message += `*Opção de Entrega:* ${formData.opcaoEntrega}\n`;
    if (formData.opcaoEntrega === 'entrega') {
      message += `*CEP:* ${formData.cep}\n`;
      message += `*Frete:* R$ ${formData.frete}\n\n`;
    }
    message += `*Produtos no Carrinho:*\n\n`;

    cart.forEach(item => {
      message += `*Produto:* ${item.nome}\n`;
      message += `*Tipo:* ${item.tipo}\n`;
      message += `*Quantidade:* ${item.quantity}\n\n`;
    });

    // Codificar a mensagem para a URL do WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5585997651791?text=${encodedMessage}`; // Coloque o número de telefone do WhatsApp aqui

    // Redirecionar para a URL do WhatsApp
    window.location.href = whatsappUrl;
  };

  return (
    <Container>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>Checkout</Typography>
      {cart.length === 0 ? (
        <Typography variant="body1">Seu carrinho está vazio.</Typography>
      ) : (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper style={{ padding: '16px', marginBottom: '16px' }}>
                <Typography variant="h6">Informações do Cliente</Typography>
                <TextField
                  name="nome"
                  label="Nome Completo"
                  value={formData.nome}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  name="email"
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  name="telefone"
                  label="Telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
                <RadioGroup name="opcaoEntrega" value={formData.opcaoEntrega} onChange={handleEntregaChange}>
                  <FormControlLabel value="retirada" control={<Radio />} label="Retirada na Loja" />
                  <FormControlLabel value="entrega" control={<Radio />} label="Entrega" />
                </RadioGroup>
                {formData.opcaoEntrega === 'entrega' && (
                  <>
                    <TextField
                      name="cep"
                      label="CEP"
                      value={formData.cep}
                      onChange={handleInputChange}
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      name="endereco"
                      label="Endereço"
                      value={formData.endereco}
                      onChange={handleInputChange}
                      fullWidth
                      margin="normal"
                      disabled
                    />
                    <Typography variant="body1">Frete: R$ {formData.frete}</Typography>
                  </>
                )}
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper style={{ padding: '16px', marginBottom: '16px' }}>
                <Typography variant="h6">Produtos no Carrinho</Typography>
                {cart.map(item => (
                  <div key={item.id} style={{ marginBottom: '16px' }}>
                    <Typography variant="h6">{item.nome}</Typography>
                    <Typography variant="subtitle1">Tipo: {item.tipo}</Typography>
                    <Typography variant="subtitle1">Quantidade: {item.quantity}</Typography>
                    <Button variant="contained" color="secondary" onClick={() => removeFromCart(item.id)}>Remover</Button>
                  </div>
                ))}
              </Paper>
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" type="submit" style={{ marginTop: '16px' }}>
            Finalizar Compra
          </Button>
        </form>
      )}
    </Container>
  );
};

export default CheckoutPage;
