const express = require('express');
const userRouter = express.Router();
const authController = require('../controllers/authController');
const authenticate = require('../middleware/authenticate'); // Middleware para autenticação

// Rota para obter informações do usuário
userRouter.get('/me', authenticate, authController.getUserInfo);

module.exports = userRouter;