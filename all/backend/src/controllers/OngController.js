const connect = require('../database/conn'); // Conexão com o BD
const crypto = require('crypto'); // Além de Cryptografia, gera o id Aleatório em HexaDecimal

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
        const id = crypto.randomBytes(4).toString('HEX');
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