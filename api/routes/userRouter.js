const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para listar todos os currículos (Usuários)
router.get('/', userController.getAllUsers);

// Rota para buscar um currículo específico por ID
router.get('/:id', userController.getUserById);

// Rota para criar um novo currículo
router.post('/', userController.createUser);

module.exports = router;