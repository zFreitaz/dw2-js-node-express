document.write("<h3>Data e Hora Atuais:</h3>");
const dataAtual = new Date();
document.write(dataAtual);
document.write("<br><br>");

document.write("<h3>Valor da Compra:<h3>");
const compraInternacional = 500.75;
document.write("Valor em dólar:" + compraInternacional.toLocaleString(`en-US`, {style: `currency`, currency: `USD`}));

document.write("<h3>Conversão para Real:</h3>");
const taxaCambio = 5.50;
const valorReal = compraInternacional * taxaCambio;
document.write("Valor em real: " + valorReal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
document.write("<br><br>");

document.write("<h3>Previsão de Entrega:</h3>");
const dataEntrega = new Date();
dataEntrega.setDate(dataAtual.getDate() + 12);

const dia = dataEntrega.getDate().toString().padStart(2, '0');
const mes = (dataEntrega.getMonth() + 1).toString().padStart(2, '0');
const ano = dataEntrega.getFullYear();
    
document.write("Previsão de entrega: " + dia + '/' + mes + '/' + ano);