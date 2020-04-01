const generateUiD = require('../utils/generateUiD')
const connect = require('../database/conn'); // Conexão com o BD

module.exports = {
    async ListOngs(request, response){ 
        const ongs = await connect('ongs').select('*');
        return response.json(ongs);
    },

    async create(request, response) {
        const {
            name,
            email,
            whatsapp,
            city,
            uf
        } = request.body;
        const id = generateUiD.generateUiD();
        await connect('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });
        return response.json({
            id
        })
    }
}