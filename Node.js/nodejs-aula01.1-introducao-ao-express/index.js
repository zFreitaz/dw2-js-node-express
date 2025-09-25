// ====== Importando o Express (Framework) ====== */
const express = require("express");
// ====== Iniciando o Express na variável "app" ====== */
const app = express();
// ====== Configurando o EJS ====== */
app.set('view engine', 'ejs')

// Criando a primeira rota do site (ROTA PRINCIPAL)
app.get("/", (req, res) => {
    res.send("<h1>Hello World! Bem-Vindo ao meu primeiro site com node.js e Express! =)</h1>")
});

// ROTA DE PRODUTOS
app.get("/produtos", (req, res) => {
    res.send("<h1>Bem-Vindo a página de Produtos!</h1>")
});

// ROTA DE CLIENTES
app.get("/clientes", (req, res) => {
    res.send("<h1>Bem-Vindo a página de Clientes!")
});

// ====== Iniciando o Servidor HTTP ====== */
// Porta do Servidor
const port = 8080;  

app.listen(port, (error) => {
    if (error) {
        console.log(`Não foi possível iniciar o servidor, ocorreu um erro! \n ERRO - ${error}`);
    } else {
        console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
    }
});
