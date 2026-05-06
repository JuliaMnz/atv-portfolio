const express = require('express');
const { sequelize } = require('./api/models'); 
const routes = require('./api/routes');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Rota de teste para a raiz
app.get('/', (req, res) => {
  res.json({ message: "API do Currículo rodando!" });
});

// Rotas principais
app.use('/api', routes);

// Sincronização do Banco e Inicialização
const startServer = async () => {
  try {
    // Autentica a conexão antes de sincronizar
    await sequelize.authenticate();
    console.log('Conexão com o NeonDB estabelecida com sucesso.');

    // sync() cria as tabelas se elas não existirem
    await sequelize.sync({ alter: true }); 
    
    const PORT = process.env.PORT || 3000;
    if (process.env.NODE_ENV !== 'production') {
      app.listen(PORT, () => {
        console.log(`Servidor rodando localmente na porta ${PORT}`);
      });
    }
  } catch (error) {
    console.error('Erro ao conectar ou sincronizar o banco de dados:', error);
  }
};

startServer();

// Exportar para a Vercel
module.exports = app;