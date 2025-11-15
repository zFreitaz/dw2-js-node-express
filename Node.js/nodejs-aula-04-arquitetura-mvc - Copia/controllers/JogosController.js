// Importar o Express
import express from "express"

// Carregando uma variável Router o express.Router que é responsável por gerenciar as rotas da aplicação
const router = express.Router()



// ROTA PEDIDOS
router.get("/pedidos", function (req, res) {
  // Realiza ambas as consultas em paralelo dentro de uma Promessa
  Promise.all([
    Pedido.findAll({
      // Fazendo o INNERJOIN com a tabela de Clientes
      include: [
        {
          model: Cliente, // Inclui o modelo Cliente que está relacionado
          required: true, // Garante que somente pedidos com clientes sejam retornado
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
    })
    .catch((err) => {
      console.log(err);
    });
});

// ROTA DE CADASTRO DE PEDIDOS
router.post("/pedidos/new", (req, res) => {
  const jogo = req.body.jogo;
  const console = req.body.console;
  const clienteId = req.body.clienteId;
  Pedido.create({
    Jogo: jogo,
    Console: console,
    cliente_id: clienteId,
  })
    .then(() => {
      res.redirect("/pedidos");
    })
    .catch((err) => {
      console.log(err);
    });
});

// ROTA DE EXCLUSÃO DE CLIENTES
router.get("/pedidos/delete/:id", (req, res) => {
  const id = req.params.id;
  Pedido.destroy({
    where: { id: id },
  })
    .then(() => {
      res.redirect("/pedidos");
    })
    .catch((err) => {
      console.log(err);
    });
});


// ROTA DE CLIENTES
router.get("/jogos", (req, res) => {
  const jogos = [
    { nome: "God of War Ragnarok", console: "PlayStation 4", valor: "R$ 250.00" },
    { nome: "Ghost of Tsushima", console: "PlayStation 4", valor: "R$ 315.00" },
    { nome: "Horizon Zero Dawn", console: "PlayStation 4", valor: "R$ 215.00" },
    { nome: "Red Dead Redemption 2", console: "PlayStation 4", valor: "R$ 215.00" },
    { nome: "The Last of Us Part II", console: "PlayStation 4", valor: "R$ 215.00" },
  ]

  res.render("jogos", {
    jogos : jogos
  });  
});

// Exportando o objeto router
export default router;