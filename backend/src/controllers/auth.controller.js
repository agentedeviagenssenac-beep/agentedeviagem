const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('../model/user.model');

const AuthController = {
    // Cadastro de usuário
    register: (req, res) => {
        const { nome, email, senha } = req.body;

        if (!nome || !email || !senha) {
            return res.status(400).json({ error: 'Preencha todos os campos.' });
        }

        // Verifica se o e-mail já existe no banco
        UserModel.findByEmail(email, (err, existingUser) => {
            if (existingUser) {
                return res.status(400).json({ error: 'E-mail já cadastrado.' });
            }

            // Criptografa a senha antes de mandar para o banco
            const senhaHash = bcrypt.hashSync(senha, 10);

            UserModel.create({ nome, email, senhaHash }, (err, newUser) => {
                if (err) return res.status(500).json({ error: 'Erro ao cadastrar usuário.' });
                res.status(201).json({ success: true, user: newUser });
            });
        });
    },

    // Login e geração do Token JWT
    login: (req, res) => {
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).json({ error: 'Informe o e-mail e a senha.' });
        }

        UserModel.findByEmail(email, (err, user) => {
            if (err || !user) {
                return res.status(401).json({ error: 'E-mail ou senha incorretos.' });
            }

            // Compara a senha digitada com a senha criptografada do banco
            const senhaValida = bcrypt.compareSync(senha, user.senha);
            if (!senhaValida) {
                return res.status(401).json({ error: 'E-mail ou senha incorretos.' });
            }

            // Gera o token JWT válido por 1 dia
            const secreto = process.env.JWT_SECRET || 'sua_chave_secreta';
            const token = jwt.sign({ id: user.id, nome: user.nome }, secreto, { expiresIn: '1d' });

            res.json({
                success: true,
                token: token,
                user: { id: user.id, nome: user.nome, email: user.email }
            });
        });
    }
};

module.exports = AuthController;