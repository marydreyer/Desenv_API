const {Client} = require('pg');

const erroBD = { 
    mensagem: "Erro de conexao no BD",
    numero: 500
};
const erroFilmeNaoEncontrado = {
    mensagem: "Filme nao encontrado",
    numero:404
};

const conexao = {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'tekinha83',
    database: 'Streaming'
};



function inserir(filme, callback) {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "INSERT INTO filmes(nome, diretor, ator_principal, ano, preco) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    const values = [filme.nome, filme.diretor, filme.ator_principal, filme.ano, filme.preco];

    cliente.query(sql, values, 
        function (err, res){
            if(err){
                console.log(err);
                callback(erroBD, undefined);
            }
            else {
                callback(undefined, res.rows[0]);
            }
            cliente.end();
        })

}

function listar(callback) {
    const cliente = new Client(conexao);
    cliente.connect();
    
    const sql = "SELECT * FROM filmes ORDER BY id";
    cliente.query(sql, 
        function (err, res) {
            if(err) {
                console.log(err);
                callback(erroBD, undefined);
            }
            else {
                let filme = res.rows;
                callback(undefined, filme);     
            }
            cliente.end();
        }
    )    
}

function buscarPorId(id, callback){
    const cliente = new Client(conexao);
    cliente.connect();
    
    const sql = "SELECT * FROM filmes WHERE id=$1";
    const values = [id];

    cliente.query(sql, values,
        function (err, res) {
            if(err) {
                console.log(err);
                callback(erroBD, undefined);                
            }
            else if (res.rows && res.rows.length > 0) {
                let filme = res.rows[0];
                callback(undefined, filme);
            }
            else {
                callback(erroFilmeNaoEncontrado, undefined);
            }

            cliente.end();
        }
    )    
}


function atualizar(id,filme, callback) {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "UPDATE filmes SET nome=$1, diretor=$2, ator_principal=$3, ano=$4, preco=$5 WHERE id=$6 RETURNING *";
    const values = [filme.nome, filme.diretor, filme.ator_principal, filme.ano, filme.preco, id];

    cliente.query(sql, values, function(err, res) {
        if(err) {
            console.log(err);
            callback(erroBD, undefined);                
        }
        else if (res.rows && res.rows.length > 0) {
            let filme = res.rows[0];
            callback(undefined, filme);
        }
        else {
            callback(erroFilmeNaoEncontrado, undefined);
        }

        cliente.end();        
    })
}

function deletar(id, callback) {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "DELETE FROM filmes WHERE id=$1 RETURNING *";
    const values = [id];

    cliente.query(sql, values, function(err, res) {
        if(err) {
            console.log(err);
            callback(erroBD, undefined);                
    }
        else if (res.rows && res.rows.length > 0) {
            let filme = res.rows[0];
            callback(undefined, filme);
        }
        else {
            callback(erroFilmeNaoEncontrado, undefined);
    }

        cliente.end();        
    })

}

module.exports = {
    inserir, listar, buscarPorId, atualizar, deletar
}