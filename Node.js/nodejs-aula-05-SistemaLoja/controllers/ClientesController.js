import express from "express";
const router = express.Router();

// ROTA CLIENTES
import Cliente from "../models/Cliente.js";

router.get("/clientes", function (req, res) {
  
   Cliente.findAll().then((clientes) => {
      res.render("clientes", {
        clientes: clientes,
      });
   }).catch((error) => {
      console.log(error);
    });
});

// ROTA DE CADASTRO DE CLIENTE
router.post("/clientes/new", (req, res) => {
  // COLETANDO OS DADOS DO FORMULÁRIO
   const nome = req.body.nome
   const cpf = req.body.cpf
   const endereco = req.body.endereco
   Cliente.create({
    // COLUNA : DADO DO FORM
     nome : nome,
     cpf : cpf,
     endereco : endereco
   }).then(() => {
     res.redirect("/clientes");
   }).catch(error => {
      console.log(error);
   });
});

// ROTA DE EXCLUSÃO DO CLIENTE
// :id É UM PARÂMETRO OBRIGATÓRIO
router.get("/clientes/delete/:id", (req, res) => {
  const id =req.params.id
  
// .DESTROY() -> EXLUIR UM REGISTRO DO BANCO
  Cliente.destroy({
    where: {
      id: id,
    },
  }).then(() => {
    res.redirect("/clientes")
  }).catch(error => {
    console.log(error)
  });
});

// ROTA DE EDIÇÃO DE CLIENTES
router.get("/clientes/edit/:id", (req, res) => {
  const id = req.params.id
   // BUSCANDO O CLIENTE PELA ID
   // findByPk() -> BUSCA UM REGISTRO PELA CHAVE PRIMÁRIA (ID)
   Cliente.findByPk(id).then(cliente => {
     res.render("clienteEdit", {
      cliente : cliente
    });
  });
});

export default router;
