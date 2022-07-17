const filmeNegocio = require('../negocio/filme_neg');

exports.inserir = (req, res) => {
    const filme = req.body;
  
    filmeNegocio.inserir(filme, 
      function(err, filmeInserido) {
        if(err){
          res.status(err.numero).json({erro: err.mensagem});
        }
        else {
          res.status(201).json(filmeInserido);
        }
      });  
}

exports.listar = (req, res) => {
    filmeNegocio.listar(function (err, filme) {
      if(err) {
        res.status(err.numero).json({erro: err.mensagem});
      }
      else {
        res.json(filme);
      }
    })
}

exports.buscarPorId = (req, res) => {
    const id = req.params.id;

    filmeNegocio.buscarPorId(id, function (err, filme){
      if(err) {
        res.status(err.numero).json({erro: err.mensagem});
      }
      else {
        res.json(filme);
      }
    });
}

exports.atualizar = (req, res) => {
    const id = req.params.id;
    const filme = req.body;
    filmeNegocio.atualizar(id, filme, 
      function(err, filmeAlterado) {
        if(err){
          res.status(err.numero).json({erro: err.mensagem});
        }
        else {
          res.json(filmeAlterado);
        }
      });
}

exports.deletar = (req, res) => {
    const id = req.params.id;
    filmeNegocio.deletar(id, function (err, filme){
        if(err) {
          res.status(err.numero).json({erro: err.mensagem});
        }
        else {
          res.json(filme);
        }
      });
  }