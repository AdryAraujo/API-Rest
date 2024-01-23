import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(erro, req, res, next){
  if(erro instanceof mongoose.Error.CastError){
    res.status(400).json({message: "Dados fornecidos estão incorretos!"});
  }
  res.status(500).json({message: `${erro.message} : Erro interno do Servidor`});
}

export default manipuladorDeErros;