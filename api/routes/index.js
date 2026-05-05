const express = require('express');
const router = express.Router();

// Importando os arquivos de rotas individuais
const userRouter = require('./userRouter');
const experienciaRouter = require('./experienciaRouter');

// Definindo os caminhos
router.use('/users', userRouter);
router.use('/experiencias', experienciaRouter);

module.exports = router;