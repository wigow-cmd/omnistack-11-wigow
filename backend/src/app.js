const express = require("express"); //importando o módulo express para a variável express
const cors = require("cors");
const { errors } = require("celebrate");
const routes = require("./routes"); //importando o arquivo de rotas

const app = express(); //variável para armazenar a aplicação

app.use(cors()); //depois fica app.use(cors({ origin: 'http://meuapp.com' })); para limitar o acesso a essa página, caso contrário qualquer página frontend acessa
app.use(express.json()); //requisições serão por JSON
app.use(routes); //ativando o uso das rotas

app.use(errors());

/**
 * Métodos HTTP:
 *
 * GET: Busca um informação no backend
 * POST: Cria uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 *
 * Tipos de parâmetros:
 *
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação) [/users?page=2&nome=Igor&idade=27]
 * Route Params: Parâmetros utilizados para identificar recursos [/users/1 -> usuário com id = 1 -> "/users/:id" no app.post]
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * "/" = localhost:3333/ -> se for "/users" = localhost:3333/users
 * Request -> guarda todos os dados enviados na requisição
 * Response -> resposta da requisição
 */

/**
 * SQL: MySQL, SQLite, PostgresSQL, Oracle, Miscrosoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 *
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where() -> tabela,todos os campos, filtro
 */

module.exports = app;

//app.listen(3333); //definindo a porta localhost:3333 , foi modificado para o server.js depois da implementação dos testes

/**
 * teste de commit
 */
