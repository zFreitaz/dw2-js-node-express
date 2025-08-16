// Exercicio 01
document.write("<h3>Tarefa 01</h3>");
const name = "Vinícius";
function saudacaoPersonalizada(nome) {
    document.write(`<p>Olá, ${nome}! Bem-Vindo(a) à Calculadora Universal!</p>`);
}
saudacaoPersonalizada(name);

// Exercicio 02
document.write("<h3>Tarefa 02</h3>");
function operadorMatemático(num1, operador, num2) {
    document.write(`<p>O resultado de ${num1} ${operador} ${num2} é igual a ${eval(`${num1}${operador}${num2}`)}</p>`);
}
operadorMatemático(10, "+", 10);
operadorMatemático(10, "-", 10);
operadorMatemático(10, "*", 10);
operadorMatemático(10, "/", 10);

// Exercicio 03
document.write("<h3>Tarefa 03</h3>");
const numDobro = 10;
const calcularDobro = function (x) {
    return (x * 2);
}
document.write(`<p>O dobro do número ${numDobro} é ${calcularDobro(numDobro)}</p>`);

// Exercicio 04
document.write("<h3>Tarefa 04</h3>");
const numMetade = 10;
const calcularMetade = (x) => {
    return (x / 2);
}
document.write(`<p>A metade do número ${numMetade} é ${calcularMetade(numMetade)}</p>`);

// Exercicio 05
document.write("<h3>Tarefa 05</h3>");
(function () {
    document.write("<p>Calculadora Universal pronta para uso!</p>");
})();

