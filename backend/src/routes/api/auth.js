const express = require('express');
const authController = require('../../controllers/authController');
const authMiddleware = require('../../middlewares/authMiddleware');
const router = express.Router();

// Rota de autenticação
router.post('/login', authController.login);

// Rota para cadastro de usuários
router.post('/register', authMiddleware, authController.register);

module.exports = router;