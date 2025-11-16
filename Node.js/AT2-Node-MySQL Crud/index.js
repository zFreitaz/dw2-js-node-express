import express from "express";
import sequelize from "./config/sequelize-configs.js";
import JogosController from "./controllers/JogosController.js";
import AnimesController from "./controllers/AnimesController.js";
import QuadrinhosController from "./controllers/QuadrinhosController.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use('/imgs', express.static("public/imgs"));

app.use("/", JogosController);
app.use("/", AnimesController);
app.use("/", QuadrinhosController);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/produtos", (req, res) => {
  const produtos = [
    { nome: "Quadrinhos do Batman", preco: 57 },
    { nome: "Quadrinhos do Homem Aranha", preco: 40 },
    { nome: "Quadrinhos do Venom", preco: 28 },
    { nome: "Quadrinhos do Pantera Negra", preco: 38 },
  ];
  res.render("produtos", { produtos: produtos });
});

app.get("/perfil/:user", (req, res) => {
  res.render("perfil", { user: req.params.user });
});

const port = 3000;

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log(`Servidor rodando: http://localhost:${port}`);
  } catch (error) {
    console.log('Erro no banco:', error.message);
  }
});