import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(erro, req, res, next){
  if(erro instanceof mongoose.Error.CastError){
    res.status(400).json({message: "Dados fornecidos estão incorretos!"});
  }else if(erro instanceof mongoose.Error.ValidationError){
    // eslint-disable-next-line no-undef
    const mensagemErro = Object.values(erro.errors)
      .map(erro => erro.message)
      .join("; ");
    res.status(400).json({message:`Os seguintes erros foram encontrados: ${mensagemErro} `});
  }else{
    res.status(500).json({message: `${erro.message} : Erro interno do Servidor`});
  }
}

export default manipuladorDeErros;