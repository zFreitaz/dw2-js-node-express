// Importando o Express(framework)
import express from "express"; // ES6 Modules
  
// Iniciando o Express na variável "app"
const app = express();

// Importando os Controllers (onde estão as rotas e onde é tratado as requisições)
import ClientesController from "./controllers/ClientesController.js";
import PedidosController from "./controllers/PedidosController.js";
import ProdutosController from "./controllers/ProdutosController.js";


// CONFIGURANDO O EJS
app.set("view engine", "ejs");
//Definindo a pasta PUBLIC para Arquivos Estáticos
app.use(express.static("public"));

// DEFININDO O USO DAS ROTAS QUE ESTÃO NOS CONTROLLERS
app.use("/", ClientesController);
app.use("/", PedidosController);
app.use("/", ProdutosController);

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



// ROTA DE PERFIL
// :user -> É um parâmetro da rota (OBRIGATÓRIO)
// :user? -> É um parâmetro de rota <(OPICIONAL)
app.get("/perfil/:user", (req, res) => {
  const user = req.params.user

  res.render("perfil", {
    // Enviando variáveis para a pagina EJS (HTML)
    user : user
  });
});



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
