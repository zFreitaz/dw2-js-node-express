import express from "express"

const router = express.Router();

// ROTA DE PEDIDOS
router.get("/animes", (req, res) => {
  const animes = [
    {anime: "DragonBall", rank: "Top 1 Mundial", avaliação: "10.00"},
    {anime: "One Piece", rank: "Top 2 Mundial", avaliação: "9.75"},
    {anime: "Naruto", rank: "Top 3 Mundial", avaliação: "9.50"},
    {anime: "Bleach", rank: "Top 4 Mundial", avaliação: "9.00"},
    {anime: "Shingeki no Kyojin", rank: "Top 5 Mundial", avaliação: "8.70"}

  ]
   res.render("animes", {
       animes : animes
   })
})
export default router;