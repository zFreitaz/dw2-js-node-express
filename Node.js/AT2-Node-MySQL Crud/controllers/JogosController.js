import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import Jogo from "../models/Jogo.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// SEU ARRAY ATUALIZADO (fallback)
let jogosData = [
    { id: 1, nome: "God of War Ragnarok", console: "PlayStation 4", valor: "R$ 250.00", imagem: "GodOfWarRagnarok.jpg" },
    { id: 2, nome: "Ghost of Tsushima", console: "PlayStation 4", valor: "R$ 315.00", imagem: "GhostOfTsushima.jpg" },
    { id: 3, nome: "Horizon Zero Dawn", console: "PlayStation 4", valor: "R$ 215.00", imagem: "Horizon Zero Dawn.png" },
    { id: 4, nome: "Red Dead Redemption 2", console: "PlayStation 4", valor: "R$ 215.00", imagem: "Red Dead Redemption 2.jpg" },
    { id: 5, nome: "The Last of Us Part II", console: "PlayStation 4", valor: "R$ 215.00", imagem: "The Last of Us Part II.jpg" },
];

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/imgs/"));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
    cb(null, "jogo-" + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// 1. LISTAR JOGOS
router.get("/jogos", async (req, res) => {
  try {
    const jogos = await Jogo.findAll();
    
    res.render("jogos", {
      jogos: jogos,
      jogo: {},
    });  
  } catch (error) {
    console.error('Erro ao buscar jogos, usando array local:', error);
    
    // FALLBACK: Seu array atualizado
    res.render("jogos", { 
      jogos: jogosData, 
      jogo: {} 
    });
  }
});

// 2. CADASTRAR JOGO
router.post("/jogos/new", upload.single("imagem"), async (req, res) => {
  try {
    const { nome, console, valor } = req.body;
    const imagem = req.file ? req.file.filename : 'default.jpg';

    await Jogo.create({
      nome,
      console,
      valor: valor || "R$ 0.00",
      imagem
    });

    res.redirect("/jogos");
  } catch (error) {
    console.error('Erro ao cadastrar jogo, usando array local:', error);
    
    // FALLBACK: Adiciona ao array local
    const novoJogo = {
      id: jogosData.length + 1,
      nome,
      console,
      valor: valor || "R$ 0.00",
      imagem: req.file ? req.file.filename : 'default.jpg'
    };
    jogosData.push(novoJogo);

    res.redirect("/jogos");
  }
});

// 3. EDITAR JOGO (Formulário)
router.get("/jogos/edit/:id", async (req, res) => {
  try {
    const jogo = await Jogo.findByPk(req.params.id);
    const jogos = await Jogo.findAll();

    res.render("jogos", { 
      jogos: jogos,
      jogo: jogo
    });
  } catch (error) {
    console.error('Erro ao buscar jogo, usando array local:', error);
    
    // FALLBACK: Busca no array local
    const jogoParaEditar = jogosData.find(j => j.id === parseInt(req.params.id));
    if (!jogoParaEditar) {
      return res.status(404).send("Jogo não encontrado.");
    }

    res.render("jogos", { 
      jogos: jogosData,
      jogo: jogoParaEditar
    });
  }
});

// 4. ATUALIZAR JOGO
router.post("/jogos/update/:id", upload.single("imagem"), async (req, res) => {
  try {
    const jogo = await Jogo.findByPk(req.params.id);
    
    const updates = {
      nome: req.body.nome,
      console: req.body.console,
      valor: req.body.valor
    };

    if (req.file) {
      updates.imagem = req.file.filename;
    }

    await jogo.update(updates);
    res.redirect("/jogos");
  } catch (error) {
    console.error('Erro ao atualizar jogo, usando array local:', error);
    
    // FALLBACK: Atualiza no array local
    const id = parseInt(req.params.id);
    const index = jogosData.findIndex(j => j.id === id);

    if (index !== -1) {
      let imagemNome = jogosData[index].imagem;
      if (req.file) {
        imagemNome = req.file.filename;
      }

      jogosData[index] = { 
        id, 
        nome: req.body.nome, 
        console: req.body.console, 
        valor: req.body.valor, 
        imagem: imagemNome 
      };
    }

    res.redirect("/jogos");
  }
});

// 5. EXCLUIR JOGO
router.post("/jogos/delete/:id", async (req, res) => {
  try {
    const jogo = await Jogo.findByPk(req.params.id);
    if (jogo) {
      await jogo.destroy();
    }
    res.redirect("/jogos");
  } catch (error) {
    console.error('Erro ao excluir jogo, usando array local:', error);
    
    // FALLBACK: Remove do array local
    const id = parseInt(req.params.id);
    jogosData = jogosData.filter(j => j.id !== id);
    
    res.redirect("/jogos");
  }
});

export default router;