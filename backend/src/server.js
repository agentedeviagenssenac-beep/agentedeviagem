const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Importa a conexão com o banco de dados (que já cria as tabelas automaticamente)
require('./config/database');

const app = express();
const PORT = process.env.PORT || 3333;

// Middlewares
app.use(cors());
app.use(express.json()); // Permite que a API receba dados em formato JSON

// Rota de Teste (para sabermos se o servidor está no ar)
app.get('/', (req, res) => {
    jsonResponse = {
        message: "API do App de Turismo rodando com sucesso!",
        status: "online"
    };
    res.json(jsonResponse);
});

// Inicialização do Servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});