const cadastroFilmes = require('./persistencia/filmes_persistencia.js');
const cadastroUsers = require('./persistencia/users_persistencia.js');

//Main
/// INSERIR FILMES ///
/*cadastroFilmes.inserir({nome: "Indiana Jones", diretor: "Steven Spielberg", ator_principal: "Harrison Ford", ano: "1982", preco:450}, function(err, filmeInserido){
    if(err){
        console.log(err);
    }
    else{
        console.log(filmeInserido);
    }
});
cadastroFilmes.inserir({nome: "Star Wars", diretor: "George Lucas", ator_principal: "Mark Hamill", ano: "1977", preco:350}, function(err, filmeInserido){
    if(err){
        console.log(err);
    }
    else{
        console.log(filmeInserido);
    }
});*/
/*cadastroFilmes.inserir({nome: "Piratas do Caribe", diretor: "Gore Verbinski", ator_principal: "Johnny Depp", ano: "2003", preco:250}, function(err, filmeInserido){
    if(err){
        console.log(err);
    }
    else{
        console.log(filmeInserido);
    }
});*/


/// LISTAR FILMES ///
/*console.log("Listar: ");
cadastroFilmes.listar( function(err, filme){
    if(err){
        console.log(err);
    }
    else{
        console.log(filme);
    }
});*/

/// BUSCAR POR ID ///
/*console.log("BuscarPorId: ");
cadastroFilmes.buscarPorId(2, function(err, filme) {
    if(err){
        console.log(err);
    }
    else{
        console.log(filme);
    }
});*/

/// ATUALIZAR FILMES ///
/*console.log("Atualizar: ");
cadastroFilmes.atualizar(2, {nome: "De Volta para o Futuro", diretor: "Robert Zemeckis", ator_principal: "Michael J. Fox", ano: "1985", preco:450}, function(err, filmeAtualizado){
    if(err){
        console.log(err);
    } 
    else {
        console.log(filmeAtualizado);
   }
});*/
    

/// DELETAR FILMES ///
/*console.log("Deletar: ");
cadastroFilmes.deletar(10, function(erro, filme) {
    console.log("Filme deletado: ");
    if(erro) {
        console.log(erro);
    }
    else {
        console.log(filme);
    }
});*/

/*---------------------------------------------------------------------------------------------------------------------*/


/// INSERIR USUÁRIOS ///
/*cadastroUsers.inserir({nome: "Mariana", email:"mariana.odreyer@bol.com.br", login: "marydreyer", senha: "tricolor83"}, function(err, userInserido){
    if(err){
        console.log(err);
    }
    else{
        console.log(userInserido);
    }
});
cadastroUsers.inserir({nome: "Roger", email:"roger.rodrigues@bol.com.br", login: "roginho", senha: "porko92"}, function(err, userInserido){
    if(err){
        console.log(err);
    }
    else{
        console.log(userInserido);
    }
});
cadastroUsers.inserir({nome: "Melina", email:"melina.dreyer@bol.com.br", login: "mel84", senha: "exoterico84"}, function(err, userInserido){
    if(err){
        console.log(err);
    }
    else{
        console.log(userInserido);
    }
});


/// LISTAR USUÁRIOS ///
/*console.log("Listar: ");
cadastroUsers.listar( function(err, user){
    if(err){
        console.log(err);
    }
    else{
        console.log(user);
    }
});*/

/// BUSCAR POR ID ///
/*console.log("BuscarPorId: ");
cadastroUsers.buscarPorId(2, function(err, user) {
    if(err){
        console.log(err);
    }
    else{
        console.log(user);
    }
});*/

/// ATUALIZAR USUÁRIOS ///
/*console.log("Atualizar: ");
cadastroUsers.atualizar(2, {nome: "Laila", email:"lailacorrea@bol.com.br", login: "gremio03", senha: "cartas33"}, function(err, userAtualizado){
    if(err){
        console.log(err);
    } 
    else {
        console.log(userAtualizado);
   }
});*/
    

/// DELETAR USUARIO ///
/*console.log("Deletar: ");
cadastroUsers.deletar(10, function(erro, user) {
    console.log("Usuário deletado: ");
    if(erro) {
        console.log(erro);
    }
    else {
        console.log(user);
    }
});*/
