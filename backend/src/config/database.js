const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');
const { dir } = require('console');

// Caminho onde o sqlite3 vai ficar salvo 
const dbPath = path.resolve(__dirname, '../../database/turismo.sqlite');

// Garante que a pasta database existe antes de criar o arquivo
const dirPath = path.dirname(dbPath);
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true});
}

// Abre a conexão com o banco
const db = new sqlite3.Database(dbPath, (err) =>{
    if (err) {
        console.error('Erro ao se conectar com o Sqlite: ', err.message);
    }   else {
        console.log('Conectado com Sucesso!')
    }
});

// Lê o arquivo .sql e executa os comandos que estão dentro
const sqlFilePath = path.resolve(__dirname, '../../database/database.sql');

fs.readFile(sqlFilePath, 'utf-8', (err, sqlQuery) => {
    if (err) {
        console.error('Erro ao executar o script SQL:', err.message);
    } else {
        console.log('Tabelas e dados lidos e executados com sucesso!')
    }
});

module.exports = db;