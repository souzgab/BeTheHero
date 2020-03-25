// Imports
const express = require('express');
const ongController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

//Gerencia Rotas
const routes = express.Router();
// ------------------------------------------------------------>
routes.get('/incidents', IncidentController.ListIncs)//Lista todos os Incidentes
routes.get('/ongs', ongController.ListOngs)//Lista todas as Ongs
routes.get('/profile', ProfileController.listSpecificOng)// Lista todos os Cases de uma Ong especifica

//Criação de Conteudo
routes.post('/incidents', IncidentController.create)//Cadastra novo Incidente
routes.post('/ongs', ongController.create);//Cadastra nova Ong
routes.post('/sessions', SessionController.create);
//Deleção de Conteudo
routes.delete('/incidents/:id', IncidentController.delete);


//exporta const de rota para outros arquivos
module.exports = routes;
