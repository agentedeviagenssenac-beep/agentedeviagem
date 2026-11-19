const express = require('express');
const cors = require('cors');
require('dotenv').config();

// 1. Inicializa o Express
const app = express();
const PORT = process.env.PORT || 3333;

// 2. Middlewares
app.use(cors());
app.use(express.json());

// 3. Importa a Conexão com o Banco de Dados (que já inicializa tabelas e executa o SQL)
require('./config/database'); 

// 4. Importa e registra as rotas
const authRoutes = require('./routes/auth.routes');
const destinationsRoutes = require('./routes/destinations.routes');
// const itinerariesRoutes = require('./routes/itineraries.routes'); // Descomente quando for usar os roteiros

app.use('/api/auth', authRoutes);
app.use('/api/destinos', destinationsRoutes);
// app.use('/api/itinerarios', itinerariesRoutes);

// Rota de Teste
app.get('/', (req, res) => {
    res.json({
        message: "API do App de Turismo rodando com sucesso!",
        status: "online"
    });
});

// Middleware para rotas não encontradas (404)
app.use((req, res) => {
    res.status(404).json({ error: "Rota não encontrada na API." });
});

// 5. Inicialização do Servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});