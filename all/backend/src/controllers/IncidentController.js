const connect = require('../database/conn'); // Conexão com o BD

module.exports = {
    async ListIncs(request, response){ 
        const {page = 1} = request.query;
        
        const [count] = await connect('incidents').count();

        const incs = await connect('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1)* 5)
        .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);

        response.header('X-Total-Count', count['count(*)'])
        return response.json(incs);
    },

    async create(request, response) {
        const {
            title,
            description,
            value
        } = request.body;

        const ong_id = request.headers.authorization

        const [id] = await connect('incidents').insert({
            title,
            description,
            value,
            ong_id
        })
        return response.json({id})
    },
    async delete(request,response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connect('incidents').where('id', id).select('ong_id').first();
        // console.log(incident); //Mostra o ID da ong
        if(incident.ong_id != ong_id){
            return response.status(401).json({error: "não autorizado"})
        }
        await connect('incidents').where('id', id).delete();

        return response.status(204).send();
    }
}