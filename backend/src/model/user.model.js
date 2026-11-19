const db = require('../config/database');

const UserModel = {
    // Buscar um usuário pelo e-mail (usado principalmente na hora do login para verificar se ele existe)
    findByEmail: (email, callback) => {
        const query = 'SELECT * FROM usuarios WHERE email = ?';
        db.get(query, [email], (err, row) => {
            callback(err, row);
        });
    },

    // Buscar um usuário pelo ID
    findById: (id, callback) => {
        const query = 'SELECT id, nome, email, data_criacao FROM usuarios WHERE id = ?';
        db.get(query, [id], (err, row) => {
            callback(err, row);
        });
    },

    // Criar/Cadastrar um novo usuário no sistema
    create: (userData, callback) => {
        const { nome, email, senhaHash } = userData; // O ideal é salvar a senha já criptografada (hash)
        const query = `INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)`;
        
        db.run(query, [nome, email, senhaHash], function(err) {
            callback(err, { id: this.lastID, nome, email });
        });
    }
};

module.exports = UserModel;