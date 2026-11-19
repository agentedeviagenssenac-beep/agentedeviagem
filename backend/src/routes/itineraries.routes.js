const express = require('express');
const router = express.Router();
const ItinerariesController = require('../controllers/itineraries.controller');

// Rota para listar todos os roteiros/itinerários
router.get('/', ItinerariesController.listarItinerarios);

// Rota para criar um novo itinerário (roteiro de viagem)
router.post('/', ItinerariesController.criarItinerario);

// Rota para ver os detalhes de um itinerário específico pelo ID
router.get('/:id', ItinerariesController.buscarPorId);

module.exports = router;