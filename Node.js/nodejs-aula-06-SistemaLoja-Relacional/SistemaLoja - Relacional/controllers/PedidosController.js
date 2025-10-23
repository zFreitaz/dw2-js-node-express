import express from "express";
import Pedido from "../models/Pedido.js";
// IMPORTANDO O MODEL DE CLIENTES
import Cliente from "../models/Cliente.js";
const router = express.Router();

// ROTA PEDIDOS
router.get("/pedidos", function (req, res) {
  // REALIZA AMBAS AS CONSULTAS EM PARALELO DENTRO DE UMA PROMESSA
  Promise.all([
  Pedido.findAll({
    // FAZENDO O INNERJOIN COM A TABELA DE CLIENTES
    include: [
      {
        model: Cliente, // INCLUI O MODELO CLIENTE QUE ESTÁ RELACIONADO
        required: true, // GARANTE QUE SOMENTE PEDIDOS COM CLIENTES SEJAM RETORNADO
      },
    ],
  }),
   Cliente.findAll(),
  ])
    .then(([pedidos, clientes]) => {
      res.render("pedidos", {
        pedidos: pedidos,
        clientes: clientes,
      });
    }).catch((err) => {
      console.log(err);
    });
});

// ROTA DE CADASTRO DE PEDIDOS
router.post("/pedidos/new", (req, res) => {
  const numero = req.body.numero;
  const valor = req.body.valor;
  const clienteId = req.body.clienteId
  Pedido.create({
    numero: numero,
    valor: valor,
    cliente_id: clienteId
  }).then(() => {
      res.redirect("/pedidos");
    }).catch((err) => {
      console.log(err);
    });
});

// ROTA DE EXCLUSÃO DE CLIENTES
router.get("/pedidos/delete/:id", (req, res) => {
  const id = req.params.id;
  Pedido.destroy({
    where: {id: id}
  }).then(() => {
      res.redirect("/pedidos");
    }).catch((err) => {
      console.log(err);
    });
});

export default router;
