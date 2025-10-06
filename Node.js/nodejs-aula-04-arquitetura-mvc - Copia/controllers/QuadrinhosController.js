import express from "express";

const router = express.Router();

// ROTA DE PRODUTOS
router.get("/quadrinhos", (req, res) => {
  //const produtos = ["Computador", "Celular", "Tablet", "Notebook"];

  // Array de objeto com os produtos
   const quadrinhos = [
     { nome: "Quadrinhos do Batman", preco: "R$ 57.00", empresa: "DC Studios"},
     { nome: "Quadrinhos do Homem Aranha", preco: "R$ 40.00", empresa: "Marvel Studios"},
     { nome: "Quadrinhos do Venom", preco: "R$ 20.00", empresa: "Marvel Studios"},
     { nome: "Quadrinhos do Pantera Negra", preco: "R$ 38.00", empresa: "Marvel Studios"},
     { nome: "Quadrinhos do Homem de Ferro", preco: "R$ 38.00", empresa: "Marvel Studios"},
   ];
  
  res.render("quadrinhos", {
    quadrinhos: quadrinhos
  })
});
export default router;