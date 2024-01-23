import {autor} from "../models/Autor.js";

class AutorController {
 
  static async ListarAutores (req, res, next) {
    try{
      const listaAutores = await autor.find();
      res.status(200).json(listaAutores);
    }catch(erro){
      next(erro);
    }
  }

  static async ListarAutorPorId (req, res, next) {
    try{
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);
      if(autorEncontrado !== null){
        res.status(200).json(autorEncontrado);
      }else{
        res.status(404).json({message: "Falha ao listar o autor"});
      }
    }catch(erro){
      next(erro);
    }
  }

  static async cadastrarAutor (req, res, next){
    try{
      const novoAutor = await autor.create(req.body);
      res.status(201).json({message:"criado com sucesso", livro: novoAutor});
    }catch(erro){
      next(erro);
    }
  }

  static async atualizarAutor (req, res, next) {
    try{
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Autor atualizado"});
    }catch(erro){
      next(erro);
    }
  }

  static async deletarAutor (req, res, next) {
    try{
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({ message: "Autor deletado com sucesso!"});
    }catch(erro){
      next(erro);
    }
  }


}

export default AutorController;
