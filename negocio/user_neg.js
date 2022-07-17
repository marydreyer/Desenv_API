const userRepositorio = require('../persistencia/users_persistencia.js')

function inserir (user, callback) {
    if(!user || !user.nome || !user.email || !user.login || !user.senha){
        const erro = { 
            mensagem: "Campos não preenchidos!",
            numero: 400            
        };
        callback(erro, undefined)
    }
    else {
        userRepositorio.inserir(user, callback);
    }  
}

function listar (callback) {
    userRepositorio.listar(callback);
}

function buscarPorId(id, callback){
    if(!id || isNaN(id)){
        const erro = { 
            mensagem: "Id Invalido!",
            numero: 400            
        }
        callback(erro, undefined);
    }
    else { 
        userRepositorio.buscarPorId(id, callback);
    }
}

function atualizar(id, user, callback) {
    if(!id || isNaN(id)){
        const erro = { 
            mensagem: "Id Invalido!",
            numero: 400            
        }
        callback(erro, undefined);
    }
    else if(!user || !user.nome || !user.email || !user.login || !user.senha) {
        const erro = { 
            mensagem: "Os campos devem ser preenchidos!",
            numero: 400            
        };
        callback(erro, undefined)
    }
    else { 
        userRepositorio.atualizar(id, filme, callback);
    }

}

function deletar(id, callback) {
    if(!id || isNaN(id)){
        const erro = { 
            mensagem: "Id Invalido!",
            numero: 400            
        }
        callback(erro, undefined);
    }
    else {
        userRepositorio.deletar(id,callback);
    }
}

module.exports = {
    inserir, listar, buscarPorId, atualizar, deletar
}