const connect = require('../database/conn'); // Conexão com o BD

module.exports = {
    async create (request,response){
        const {id} = request.body
        const ong = await connect('ongs').where('id', id).select('name').first();

        if(!ong){
            return response.status(400).json({error: "Não Existem Ongs neste ID"})
        }

        return response.json(ong)
    }
}