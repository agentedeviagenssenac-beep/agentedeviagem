const express = require('express');
const router = express.Router();
const db = require('../config/database'); // se necessario ajustar o caminho para o banco de dados

router.get('/', (req, res) => {
    const query = 'SELECT * FROM destinos';

    db.all(query, [], (err, rows) => {
        if (err) {
            console.error('Erro ao buscar destinos:', err.message)
            return res.status(500).json({error: 'Erro ao buscar destinos de dados.' });
        }

        res.status(200),json({
            sucess: true,
            data: rows
        })
    })
})
module.exports = router;