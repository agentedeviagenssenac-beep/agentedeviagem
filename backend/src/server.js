const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
require('dotenv').config();

// 1. Inicializa o Express
const app = express();
const PORT = process.env.PORT || 3333;

// 2. Middlewares
app.use(cors());
app.use(express.json());

// 3. Configuração e Conexão com o Banco de Dados SQLite
const dbPath = path.resolve(__dirname, '../../database/turismo.sqlite');
const dirPath = path.dirname(dbPath);

if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
}

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Erro ao se conectar com o Sqlite: ', err.message);
    } else {
        console.log('Conectado com Sucesso!');
       
        const sqlFilePath = path.resolve(__dirname, '../../database/database.sql');
        if (fs.existsSync(sqlFilePath)) {
            const sqlQuery = fs.readFileSync(sqlFilePath, 'utf-8');
            db.exec(sqlQuery, (execErr) => {
                if (execErr) {
                    console.error('Erro ao executar o script SQL:', execErr.message);
                } else {
                    console.log('Tabelas e dados executados com sucesso!');
                }
            });
        }
    }
});

// 4. Importa e registra as rotas (GARANTA que os arquivos de rotas terminam com module.exports = router)
const authRoutes = require('./routes/auth.routes');
const destinationsRoutes = require('./routes/destinations.routes');

app.use('/api/auth', authRoutes);
app.use('/api/destinos', destinationsRoutes);

// Rota de Teste
app.get('/', (req, res) => {
    res.json({
        message: "API do App de Turismo rodando com sucesso!",
        status: "online"
    });
});

// 5. Inicialização do Servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});