// Imports
const express = require('express');
const { celebrate, Segments, Joi} = require ('celebrate')
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
//Gerencia Rotas
const routes = express.Router();
//Validação de Rotas
const valid = require('./validators/validRouts')
// ------------------------------------------------------------>
routes.get('/incidents', valid.isValidIncPage(), IncidentController.ListIncs)//Lista todos os Incidentes
routes.get('/ongs', OngController.ListOngs)//Lista todas as Ongs
routes.get('/profile', valid.isValidListOng(), ProfileController.listSpecificOng)// Lista todos os Cases de uma Ong 

//Criação de Conteudo
routes.post('/incidents', IncidentController.create)//Cadastra novo Incidente
routes.post('/ongs', valid.isValidOng(), OngController.create);//Cadastra nova Ong
routes.post('/sessions', SessionController.create); //Cadastra nova Sessão

//Deleção de Conteudo
routes.delete('/incidents/:id',valid.isDeleteOfInc(), IncidentController.delete);

//exporta const de rota para outros arquivos
module.exports = routes;
