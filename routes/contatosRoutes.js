const express = require('express');
const router = express.Router();
const contatosController = require('../controllers/contatosController');

// Rota principal que renderiza a página HTML
router.get('/', contatosController.renderContatosPage);

// Rotas para as ações do formulário (POST)
router.post('/contatos', contatosController.criarContato);


module.exports = router;