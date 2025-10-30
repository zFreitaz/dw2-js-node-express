// MIDDLEWARE DE AUTENTICAÇÃO 
function Auth(req, res, next) {
    // O usuário possui uma sessão no site
    if(req.session.user != undefined){
      //PERMITE A CONTINUAÇÃO DA REQUISIÇÃO
      next();
    } else {
        res.render("login", {
          hasNoSession: true,
        });
    }
}
export default Auth;