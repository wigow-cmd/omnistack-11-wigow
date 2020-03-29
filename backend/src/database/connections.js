const knex = require("knex");
const configuration = require("../../knexfile"); //importando as configurações do banco de dados do arquivo knexfile

const config =
  process.env.NODE_ENV === "test"
    ? configuration.test
    : configuration.development;

const connection = knex(config);

module.exports = connection;
