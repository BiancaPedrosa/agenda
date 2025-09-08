const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./config/database');
const contatosRoutes = require('./routes/contatosRoutes');
const Contato = require('./models/contato');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do Handlebars como view engine
app.engine('hbs', engine({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para processar requisições JSON e URL-encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Adiciona as rotas da agenda de contatos
app.use('/', contatosRoutes);

// Sincroniza o modelo com o banco de dados e inicia o servidor
sequelize.sync()
  .then(() => {
    console.log('Banco de dados sincronizado e pronto para uso.');
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });
