const connect = require('../database/conn'); // Conexão com o BD

module.exports = {
    async listSpecificOng(request, response){
        const ong_id = request.headers.authorization;
        const incidents = await connect('incidents')
        .where('ong_id', ong_id)
        .select('*')

        return response.json(incidents);
    }
}