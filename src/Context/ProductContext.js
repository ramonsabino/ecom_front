// Importe as imagens necessárias
import airdotsImage from '../Assets/fones/foneAirDots.jpg';
import hrebosImage from '../Assets/fones/foneHrebosIos.jpg';
import lehmoxImage from '../Assets/fones/foneLehmox.jpg';
import caixaInova from '../Assets/caixasDeSom/caixaInova.jpg';
import caixaJbl from '../Assets/caixasDeSom/caixaJbl.jpg';
import caixaMinifun from '../Assets/caixasDeSom/caixaMinifun.jpg';
import caixaLehmox from '../Assets/caixasDeSom/caixaLehmox.jpg';

// Defina a lista de produtos
export const lancamento = [
  { id: 1, nome: 'AirDots Xiaomi', tipo: 'Sem-fio', imagem: airdotsImage },
  { id: 2, nome: 'Fone Hrebos', tipo: 'iOS', imagem: hrebosImage },
  { id: 3, nome: 'Fone PMCell Iphone', tipo: 'Com Fio', imagem: lehmoxImage},
  { id: 4, nome: 'Caixa de Som JBL', tipo: 'Bluetooth e Pendrive', imagem: caixaJbl },
  { id: 5, nome: 'Caixa de Som Inova', tipo: 'Bluetooth, Pendrive e Radio', imagem: caixaInova},
  { id: 6, nome: 'Mini alto falante', tipo: 'Bluetooth e Cartão', imagem: caixaMinifun},
  { id: 7, nome: 'Caixa de Som Lehmox', tipo: 'Bluetooth, Auxiliar, Pendrive e Radio', imagem: caixaLehmox },
  // Adicione mais lançamentos conforme necessário
];
