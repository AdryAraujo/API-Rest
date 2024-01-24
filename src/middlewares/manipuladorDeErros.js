import mongoose from "mongoose";
import ErroBase from "../erros/ErroBase.js";
import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";
import ErroValidacao from "../erros/ErroValidacao.js";
import NaoEcontrado from "../erros/NaoEncontrado.js";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(erro, req, res, next){
  if(erro instanceof mongoose.Error.CastError){
    new RequisicaoIncorreta().enviarRespostas(res);
  }else if(erro instanceof mongoose.Error.ValidationError){
    new ErroValidacao(erro).enviarRespostas(res);
  }else if(erro instanceof NaoEcontrado){
    erro.enviarRespostas(res);
  }else{
    new ErroBase().enviarRespostas(res);
  }
}

export default manipuladorDeErros;