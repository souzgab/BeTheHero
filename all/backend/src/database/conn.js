const knex = require('knex')
const config = require('../../knexfile') //listagem de configs do knex

const envdb = process.env.NODE_ENV == 'test' ? config.test : config.development
const connection = knex(envdb); // Configuração de conexão do Knex de development

module.exports = connection; //exportando conexão