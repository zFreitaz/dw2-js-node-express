import express from "express"

const router = express.Router();

// ROTA DE PEDIDOS
router.get("/pedidos", (req, res) => {
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
export default router;