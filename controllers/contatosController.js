const Contato = require('../models/contato');

// Renderiza a página principal com a lista de contatos
exports.renderContatosPage = async (req, res) => {
  try {
    const contatos = await Contato.findAll();
    res.render('index', {
      title: 'Agenda de Contatos',
      contatos: contatos.map(c => c.toJSON())
    });
  } catch (error) {
    res.status(500).json({ message: "Erro ao carregar a página", error: error.message });
  }
};

// Lógica para criar um novo contato (via formulário)
exports.criarContato = async (req, res) => {
  try {
    const { nome, telefone, email } = req.body;
    await Contato.create({ nome, telefone, email });
    res.redirect('/');
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar o contato", error: error.message });
  }
};
