const express = require('express');
const router = express.Router();

// Exemplo de rota temporária
router.get('/', (req, res) => {
    res.json({ mensagem: "Rota funcionando!" });
});

module.exports = router;