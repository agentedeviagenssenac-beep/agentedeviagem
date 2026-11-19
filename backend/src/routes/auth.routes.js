const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/auth.controller');

// Rota para cadastrar um novo usuário (POST /api/auth/register)
router.post('/register', AuthController.register);

// Rota para fazer login (POST /api/auth/login)
router.post('/login', AuthController.login);

module.exports = router;