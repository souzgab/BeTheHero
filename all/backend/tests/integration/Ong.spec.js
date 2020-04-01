const request = require('supertest')
const app = require('../../src/app')
const conn = require('../../src/database/conn')

describe('Ong', () => {
    beforeEach(async ()=>{
        await conn.migrate.latest();
    })

    afterAll( async ()=>{
        await conn.destroy();
    })

    it('Should be able to create a ong', async ()=>{
        const response = await request(app).post('/ongs').send({
            name: "teste",
            email: "teste@teste.com",
            whatsapp: "11933989333",
            city: "Rio de Janeiro",
            uf: "RJ"
        })
        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)
    })
})