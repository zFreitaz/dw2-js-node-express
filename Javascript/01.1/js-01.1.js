// VARAIÁVEIS PODEM SER DECLARADAS DE 3 FORMAS:
// VAR, LET e CONST
// VAR: No geral evite o seu uso, pode não ser seguro.
// LET: Utilize quando for necessário reatribuir o valor da variável.
// CONST: Utilize quando NÃO precisar reatribuir o valor da variável. (sempre tem que aplicar o valor)

//var nome ="Vinícius"
//var nome = "Pelé"
//let cidade ="Registro"
//let cidade ="Cajat" // NÃO PODE
//let endereço
//endereço ="Rua Tal..."
//const idade // NÃO PODE
//const idade = 18
//idade = 20 // NÃO PODE

// TIPOS DE FUNÇÕES

// FUNÇÃO SIMPLES QUE MOSTRA UMA MENSAGEM
const message = "<h2>Olá Bem-vindo! Essa é a sua primeira função!</h2>";
function showMessage() {
  document.write(message);
}
// invocando a função:
showMessage();

// FUNÇÃO COM PARÂMETROS
const user = "Pelé";

function userMassage(user){
    // ESSA FUNÇÃO RECEBE PARÂMETRO
    document.write(`<h3>O que deseja fazer hoje, ${user} ?</h3>`);
    // ${} -> Template String / Literal Strings
    // É usado para inserir variáveis dentro de STRINGS (CRASE)
}
userMassage(user); //ARGUMENTO  2  