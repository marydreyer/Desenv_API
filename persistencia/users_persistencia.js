const {Client} = require('pg');

const erroBD = { 
    mensagem: "Erro de conexao no BD",
    numero: 500
};
const erroUserNaoEncontrado = {
    mensagem: "Usuário nao encontrado",
    numero:404
};

const conexao = {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'tekinha83',
    database: 'Streaming'
};


function inserir(user, callback) {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "INSERT INTO users(nome, email, login, senha) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [user.nome, user.email, user.login, user.senha];

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
    
    const sql = "SELECT * FROM users ORDER BY id";
    cliente.query(sql, 
        function (err, res) {
            if(err) {
                console.log(err);
                callback(erroBD, undefined);
            }
            else {
                let produtos = res.rows;
                callback(undefined, produtos);     
            }
            cliente.end();
        }
    )    
}

function buscarPorId(id, callback){
    const cliente = new Client(conexao);
    cliente.connect();
    
    const sql = "SELECT * FROM users WHERE id=$1";
    const values = [id];

    cliente.query(sql, values,
        function (err, res) {
            if(err) {
                console.log(err);
                callback(erroBD, undefined);                
            }
            else if (res.rows && res.rows.length > 0) {
                let user = res.rows[0];
                callback(undefined, user);
            }
            else {
                callback(erroUserNaoEncontrado, undefined);
            }

            cliente.end();
        }
    )    
}


function atualizar(id,user, callback) {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "UPDATE users SET nome=$1, email=$2, login=$3, senha=$4 WHERE id=$5 RETURNING *";
    const values = [user.nome, user.email, user.login, user.senha, id];

    cliente.query(sql, values, function(err, res) {
        if(err) {
            console.log(err);
            callback(erroBD, undefined);                
        }
        else if (res.rows && res.rows.length > 0) {
            let user = res.rows[0];
            callback(undefined, user);
        }
        else {
            callback(erroUserNaoEncontrado, undefined);
        }

        cliente.end();        
    })
}

function deletar(id, callback) {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "DELETE FROM users WHERE id=$1 RETURNING *";
    const values = [id];

    cliente.query(sql, values, function(err, res) {
        if(err) {
            console.log(err);
            callback(erroBD, undefined);                
    }
        else if (res.rows && res.rows.length > 0) {
            let user = res.rows[0];
            callback(undefined, user);
            }
        else {
            callback(erroUserNaoEncontrado, undefined);
    }

        cliente.end();        
    })

}

module.exports = {
    inserir, listar, buscarPorId, atualizar, deletar
}