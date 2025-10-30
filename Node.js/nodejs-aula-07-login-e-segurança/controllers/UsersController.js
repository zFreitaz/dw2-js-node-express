import express from "express";
import bcrypy from "bcrypt";
const router = express.Router();
// Importando o Model de Usuário
import User from "../models/User.js";

// ROTA de LOGIN
router.get("/login", (req, res) => {
  res.render("login", {
    hasNoSession: true,
  });
});

// ROTA de CADASTRO
router.get("/cadastro", (req, res) => {
  res.render("cadastro", {
    hesNoSession: true,
  });
});

// ROTA de CRIAÇÃO de Usuário
router.post("/createUser", (req, res) => {
    // Coletando os dados do formulário
    const email = req.body.email
    const password = req.body.password

    const salt = bcrypy.genSaltSync(10);
    const hash = bcrypy.hashSync(password, salt);

   //verificar se o usurario ja esta cadastrado no banco 
   User.findOne({where: {email: email}}).then(user =>{
       if(user == undefined){
         User.create({
             email: email,
             password : hash
         }).then(() => {
              res.redirect("/login");
         }).catch(error => {
              console.log(error);
         });
       } else{
         //Caso o usuario exista
         res.send(`O usuario informado já está cadastrado! <br>
          <a href="/login">Tentar Novamente</a>`);
       }
 });    
    // Enviando para o banco
    User.create({
        email: email,
        password : password
    }).then(() => {
        res.redirect("/login");
    }).catch(error => {
        console.log(error);
    });
});

//ROTA DE AUTENTICAÇÃO
router.post("/authenticate", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    //Buscar o usúario no banco
    User.findOne({where: {email:email}}).then(user => {
      //Se o usúario existir
      if (user != undefined) {
        //Validar a senha
        const correct = bcrypy.compareSync(password, user.password)
        //Se a senha for valida
        if(correct) {
          // Autoriza Login
          //GERANDO SESSÃO PARA O USUÁRIO
          req.session.user = {
            id: user.id,
            email: user.email
          }
          // res.send(`Usuário logado é: </br>
          //   ID: ${req.session.user["id"]}<br>
          //   E-mail: ${req.session.user["email"]} `);
          res.redirect("/")
          //Se a senha não for válida
        } else {
          res.send(`A senha digitada está incorreta! <br>
            <a href="/login">Tentar novamente</a>`)
        }
        //Se o usuário não existe
      } else {
        res.send(`Usuário informado não existe! <br>
          <a href="/login">Tentar novamente</a>`);
      }
    });
});


// ROTA DE LOGOUT
router.get("/logout", (req, res) => {
  req.session.user = undefined
  res.redirect("/")
})

export default router;

