// Importando o Express(framework)
const express = require("express");

// Iniciando o Express na variável "app"
const app = express();

// CONFIGURANDO O EJS
app.set("view engine", "ejs");

// Criando a primeira rota do site (ROTA PRINCIPAL)
// REQ - Trata a REQUISIÇÃO / RES - Trata a RESPOSTA
app.get("/", (req, res) => {
  res.render("index");
});

// ROTA DE PRODUTOS
app.get("/produtos", (req, res) => {
  //const produtos = ["Computador", "Celular", "Tablet", "Notebook"];

  // Array de objeto com os produtos
   const produtos = [
     { nome: "Celular", preco: 3000},
     { nome: "Computador", preco: 4000},
     { nome: "Tablet", preco: 2000},
     { nome: "Notebook", preco: 3800},   
   ];
  
  res.render("produtos", {
    produtos : produtos
  })
});

// ROTA DE CLIENTES
app.get("/clientes", (req, res) => {
  const clientes = [
    { nome: "Ricardo", CPF: "123.456.789-00", endereco: "Rua das Flores, 34" },
    { nome: "Isaac", CPF: "123.456.789-00", endereco: "Rua Diamante, 100" },
    { nome: "Juliana", CPF: "123.456.789-00", endereco: "Rua Ceará, 30" },
    { nome: "Renan", CPF: "123.456.789-00", endereco: "Rua Curitiba, 22" },
  ]

  res.render("clientes", {
    clientes : clientes
  });  
});

// ROTA DE PERFIL
app.get("/perfil", (req, res) => {
  // Criando a vairável que será enviada para a página
  const user = "Vinícius";
  res.render("perfil", {
    // Enviando variáveis para a pagina EJS (HTML)
    user : user
  });
});

// ROTA DE PEDIDOS
app.get("/pedidos", (req, res) => {
  const pedidos = [
    {num: 1, produto: "Celular", valor: 3000.00},
    {num: 2, produto: "Tablet", valor: 2000.00},
    {num: 3, produto: "Notebook", valor: 3800.00},
    {num: 4, produto: "Computador", valor: 4000.00},

  ]
   res.render("pedidos", {
       pedidos : pedidos
   })
})

// Iniciando o servidor HTTP
// O servidor escutará na porta 8080
const port = 8080;

app.listen(port, (error) => {
  if (error) {
    console.log(
      `Não foi possível iniciar o servidor. Ocorreu um erro! ${error}`
    );
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
