const express = require('express');
const rota = express.Router();

const controller = require('../controller/user_cont.js');

rota.get('/',controller.listar);
rota.get('/:id', controller.buscarPorId);
rota.put('/:id', controller.atualizar);
rota.post('/', controller.inserir);
rota.delete("/:id", controller.deletar);

module.exports = rota;