const filmeRepositorio = require('../persistencia/filmes_persistencia.js')

function inserir (filme, callback) {
    if(!filme || !filme.nome || !filme.diretor || !filme.ator_principal || !filme.ano || !filme.preco){
        const erro = { 
            mensagem: "Campos não preenchidos!",
            numero: 400           
        };
        callback(erro, undefined)
    }
    else {
        filmeRepositorio.inserir(filme, callback);
    }  
}

function listar (callback) {
    filmeRepositorio.listar(callback);
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
        filmeRepositorio.buscarPorId(id, callback);
    }
}

function atualizar(id, filme, callback) {
    if(!id || isNaN(id)){
        const erro = { 
            mensagem: "Id Invalido!",
            numero: 400            
        }
        callback(erro, undefined);
    }
    else if(!filme || !filme.nome || !filme.diretor || !filme.ator_principal || !filme.ano || !filme.preco) {
        const erro = { 
            mensagem: "Os campos devem ser preenchidos!",
            numero: 400            
        };
        callback(erro, undefined)
    }
    else { 
        filmeRepositorio.atualizar(id, filme, callback);
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
        filmeRepositorio.deletar(id,callback);
    }
}

module.exports = {
    inserir, listar, buscarPorId, atualizar, deletar
}