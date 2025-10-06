// Importar o Express
import express from "express"

// Carregando uma variável Router o express.Router que é responsável por gerenciar as rotas da aplicação
const router = express.Router()

// ROTA DE CLIENTES
router.get("/jogos", (req, res) => {
  const jogos = [
    {img:"/imgs/GodOfWarRagnarok.jpg", nome: "God of War Ragnarok", console: "PlayStation 4", valor: "R$ 250.00" },
    {img:"/imgs/Ghost of Tsushima.avif", nome: "Ghost of Tsushima", console: "PlayStation 4", valor: "R$ 315.00" },
    {img:"/imgs/Horizon Zero Dawn.png", nome: "Horizon Zero Dawn", console: "PlayStation 4", valor: "R$ 215.00" },
    {img:"/imgs/Red Dead Redemption 2.webp", nome: "Red Dead Redemption 2", console: "PlayStation 4", valor: "R$ 215.00" },
    {img:"/imgs/The Last of Us Part II.jpg", nome: "The Last of Us Part II", console: "PlayStation 4", valor: "R$ 215.00" },
  ]

  res.render("jogos", {
    jogos : jogos
  });  
});

// Exportando o objeto router
export default router;