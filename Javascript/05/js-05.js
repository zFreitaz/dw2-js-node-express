// MANIPULAÇÃO DE DATAS
document.write("<h3>Manipulando datas: </h3>")

//criar uma instância da classe Date() do JavaScript

const dataAtual = new Date();
document.write(dataAtual)

//Pegando o dia atual:
const dia = dataAtual.getDate();
document.write(`<p>Hoje é dia: ${dia} </p>`)

// Pegando o mês atual:
const mês = dataAtual.getMonth()+1;
document.write(`<p>Estamos no mês: ${mês} </p>`)

// Pegando o ano atual:
const ano = dataAtual.getFullYear();
document.write(`<p>Ano atual: ${ano} </p>`)

// Pegando o dia da semana:
const diaSemana = dataAtual.getDay();
document.write(`<p>Dia da semana: ${diaSemana+1} </p>`)

// Adicionando Dias, Mêses e Anos à data atual
// Adicionando 4 anos ao ano atual:
dataAtual.setFullYear(dataAtual.getFullYear() + 4);

document.write(`<p>Daqui a 4 anos será: ${dataAtual.getFullYear()} </p>`);

// Adicionando mêses:
dataAtual.setMonth(dataAtual.getMonth() + 3);
document.write(`<p>Daqui a 3 mesês será: ${dataAtual.getMonth()} </p>`);

// Adicionando dias
dataAtual.setDate(dataAtual.getDate() + 10);
document.write(`<p>Daqui a 10 dias será: ${dataAtual.getDate()} </p>`);

// FORMATAÇÃO DE MOEDAS
// REAL
document.write("<h3>Formatação de moedas: </h3>");    

const salario = 1512;
const salarioReal = salario.toLocaleString("pt-br", {
    style: "currency",
    currency : "BRL",
});
document.write(`<p>O valor do salário mínimo atual é ${salarioReal}.</p>`);

// DÓLAR
const salarioDolar = salario.toLocaleString("en", {
    style : "currency",
    currency : "USD"
});
const salarioConvertido = salario * 0.176
document.write(`<p>Salário em dolar: ${salarioDolar}. </p>`);

document.write(`<p>Salário em valor de dolar: ${salarioConvertido.toLocaleString("en", {
      style : "currency",
      currency : "USD"
})}. </p>`);

// currency : EUR -> Euro

// FORMATAÇÃO DE STRING (TEXTOS)
document.write("<h3>Formatação de Strings: </h3>");
const nome = "Pelé";

// ALTERANDO PARA LETRAS MAIÚSCULAS
document.write(`<p>Nome em maiúsculas: ${nome.toUpperCase()}</p>`);

// ALTERANDO PARA LETRAS MINÚSCULAS
document.write(`<p>Nome em minúsculas: ${nome.toLocaleLowerCase()}</p>`);

// REMOVENDO ESPAÇOS DA STRING
const novoNome = nome.replace(/\s/g,"");


// CONTANDO CARACTERES DE UMA STRING
document.writeln(`<p>Esse nome tem: ${novoNome.length} letras.</p>`);