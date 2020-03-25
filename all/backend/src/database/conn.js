const knex = require('knex')
const config = require('../../knexfile') //listagem de configs do knex

const connection = knex(config.development); // Configuração de conexão do Knex de development

module.exports = connection; //exportando conexão