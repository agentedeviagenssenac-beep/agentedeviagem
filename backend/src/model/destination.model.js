const db = require('../config/database');

const DestinationModel = {
    // Buscar todos os destinos cadastrados
    getAll: (callback) => {
        const query = 'SELECT * FROM destinos';
        db.all(query, [], (err, rows) => {
            callback(err, rows);
        });
    },

    // Buscar um destino específico pelo ID
    getById: (id, callback) => {
        const query = 'SELECT * FROM destinos WHERE id = ?';
        db.get(query, [id], (err, row) => {
            callback(err, row);
        });
    },

    // Cadastrar um novo destino
    create: (destinoData, callback) => {
        const { nome, descricao, localizacao } = destinoData;
        const query = `INSERT INTO destinos (nome, descricao, localizacao) VALUES (?, ?, ?)`;
        
        db.run(query, [nome, descricao, localizacao], function(err) {
            // "this.lastID" retorna o ID do registro que acabou de ser inserido
            callback(err, { id: this.lastID, ...destinoData });
        });
    }
};

module.exports = DestinationModel;