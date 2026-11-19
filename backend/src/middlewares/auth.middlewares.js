const jwt = require('jsonwebtoken'); // Biblioteca para lidar com tokens (se vocês estiverem usando)

const verificarToken = (req, res, next) => {
    // Pega o token enviado pelo front-end no cabeçalho (header) da requisição
    const authHeader = req.headers['authorization'];
    
    if (!authHeader) {
        return res.status(401).json({ error: 'Acesso negado. Token não fornecido.' });
    }

    // O token geralmente vem no formato "Bearer SEU_TOKEN_AQUI"
    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Token inválido ou mal formatado.' });
    }

    try {
        // Valida se o token é verdadeiro usando a chave secreta do .env
        const secreto = process.env.JWT_SECRET || 'sua_chave_secreta';
        const decoded = jwt.verify(token, secreto);

        // Salva os dados do usuário na requisição para usar depois no controller
        req.user = decoded;

        // Se estiver tudo certo, o "next()" manda o pedido seguir para o Controller!
        next();
    } catch (err) {
        return res.status(403).json({ error: 'Token inválido ou expirado.' });
    }
};

module.exports = { verificarToken };