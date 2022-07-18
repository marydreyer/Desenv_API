const userNegocio = require('../negocio/user_neg');

exports.inserir = (req, res) => {
    const user = req.body;
  
    userNegocio.inserir(user, 
      function(err, userInserido) {
        if(err){
          res.status(err.numero).json({erro: err.mensagem});
        }
        else {
          res.status(201).json(userInserido);
        }
      });  
}

exports.listar = (req, res) => {
    userNegocio.listar(function (err, user) {
      if(err) {
        res.status(err.numero).json({erro: err.mensagem});
      }
      else {
        res.json(user);
      }
    })
}

exports.buscarPorId = (req, res) => {
    const id = req.params.id;

    userNegocio.buscarPorId(id, function (err, user){
      if(err) {
        res.status(err.numero).json({erro: err.mensagem});
      }
      else {
        res.json(user);
      }
    });
}

exports.atualizar = (req, res) => {
    const id = req.params.id;
    const user = req.body;
    userNegocio.atualizar(id, user, 
      function(err, userAlterado) {
        if(err){
          res.status(err.numero).json({erro: err.mensagem});
        }
        else {
          res.json(userAlterado);
        }
      });
}

exports.deletar = (req, res) => {
    const id = req.params.id;
    userNegocio.deletar(id, function (err, user){
        if(err) {
          res.status(err.numero).json({erro: err.mensagem});
        }
        else {
          res.json(user);
        }
      });
  }