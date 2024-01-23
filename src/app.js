import express from "express";
import conectaDatabase from "./config/dbConnect.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";
import routes from "./routes/index.js";

const conexao = await conectaDatabase();
conexao.on("error", (erro) => {
  // eslint-disable-next-line no-undef
  console.error("erro de conexão", erro);
});

conexao.once("open",() =>{
  // eslint-disable-next-line no-undef
  console.log("conexão feita com sucesso!");
});

const app = express();
routes(app);

// eslint-disable-next-line no-unused-vars
app.use(manipuladorDeErros);

export default app;