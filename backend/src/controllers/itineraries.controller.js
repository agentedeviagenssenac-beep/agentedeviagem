const ItineraryModel = require('../model/itinerary.model'); // Ajuste o caminho se o nome do seu model for diferente

const ItinerariesController = {
    // Criar um novo roteiro (protegido por token)
    create: (req, res) => {
        const { titulo, descricao, destino_id } = req.body;
        const usuario_id = req.user.id; // ID que vem do token JWT decodificado pelo middleware

        if (!titulo || !destino_id) {
            return res.status(400).json({ error: 'Título e destino são obrigatórios.' });
        }

        ItineraryModel.create({ titulo, descricao, destino_id, usuario_id }, (err, newItinerary) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao criar itinerário.' });
            }
            res.status(201).json({ success: true, data: newItinerary });
        });
    },

    // Listar os roteiros do usuário logado
    getByUser: (req, res) => {
        const usuario_id = req.user.id;

        ItineraryModel.getByUserId(usuario_id, (err, itineraries) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao buscar itinerários.' });
            }
            res.json({ success: true, data: itineraries });
        });
    }
};

module.exports = ItinerariesController;