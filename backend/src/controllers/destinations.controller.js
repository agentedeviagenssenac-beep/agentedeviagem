const DestinationModel = require('../model/destination.model'); // Ajuste o caminho se o nome do seu model for diferente

const DestinationsController = {
    // Listar todos os destinos turísticos
    getAll: (req, res) => {
        DestinationModel.getAll((err, destinations) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao buscar destinos.' });
            }
            res.json({ success: true, data: destinations });
        });
    },

    // Buscar um destino específico por ID
    getById: (req, res) => {
        const { id } = req.params;

        DestinationModel.getById(id, (err, destination) => {
            if (err || !destination) {
                return res.status(404).json({ error: 'Destino não encontrado.' });
            }
            res.json({ success: true, data: destination });
        });
    }
};

module.exports = DestinationsController;