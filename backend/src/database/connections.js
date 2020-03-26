const knex = require("knex");
const configuration = require("../../knexfile"); //importando as configurações do banco de dados do arquivo knexfile

const connection = knex(configuration.development);

module.exports = connection;
