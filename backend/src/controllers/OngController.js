const crypto = require("crypto");
const connection = require("../database/connections");

module.exports = {
  async index(Request, Response) {
    const ongs = await connection("ongs").select("*"); //selecionando todos os dados da tabela ongs

    return Response.json(ongs); //mostrando os dados selecionados
  },

  async create(Request, Response) {
    //const params = request.query; //.query -> Query params /.params -> Route params /.body -> Request body

    const { name, email, whatsapp, city, uf } = Request.body;

    const id = crypto.randomBytes(4).toString("HEX");

    await connection("ongs").insert({
      //pode demorar a inserir os dados, então usamos async await
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return Response.json({ id });
  }
};
